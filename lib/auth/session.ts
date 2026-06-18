import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type UserSession = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "aggregator" | "dealer" | "buyer";
  isAdmin: boolean;
};

const localAdminSession: UserSession = {
  id: "admin_demo_001",
  name: "AgriLink Super Admin",
  email: "admin@agrilink.local",
  role: "admin",
  isAdmin: true
};

export async function getCurrentUserSession(): Promise<UserSession | null> {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("agrilink_token");
    const backendUserCookie = cookieStore.get("agrilink_user");
    const backendUser = parseBackendUserCookie(backendUserCookie?.value);

    if (tokenCookie && tokenCookie.value) {
      const token = tokenCookie.value;
      const parts = token.split('.');
      
      if (parts.length === 3) {
        // Next.js Edge runtime (and Node) has atob for base64 decoding. Or we can use Buffer.
        // atob is more universally supported in Edge runtimes like Vercel.
        const payloadStr = Buffer.from(parts[1], 'base64').toString('utf-8');
        const payload = JSON.parse(payloadStr);
        
        return {
          id: backendUser?.id || payload.id || payload.sub || "",
          name: getSessionName(backendUser, payload),
          email: backendUser?.email || payload.email || payload.phone || "",
          role: getSessionRole(backendUser, payload),
          isAdmin: getSessionRole(backendUser, payload) === "admin"
        };
      }
    }
  } catch (err) {
    console.error("Error decoding session token:", err);
  }

  if (process.env.NODE_ENV !== "production") {
    return localAdminSession;
  }

  return null;
}

function parseBackendUserCookie(value?: string) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value)) as Record<string, string | undefined>;
  } catch {
    return null;
  }
}

function getSessionName(backendUser: Record<string, string | undefined> | null, payload: Record<string, string | undefined>): string {
  return (
    backendUser?.fullName ||
    backendUser?.name ||
    backendUser?.organizationName ||
    payload.fullName ||
    payload.name ||
    payload.organizationName ||
    "User"
  );
}

function getSessionRole(backendUser: Record<string, string | undefined> | null, payload: Record<string, string | undefined>): UserSession["role"] {
  const role = (backendUser?.role || payload.role || "buyer").toLowerCase();

  if (role === "admin" || role === "aggregator" || role === "dealer" || role === "buyer") {
    return role;
  }

  return "buyer";
}

export async function requireAdminSession(): Promise<UserSession> {
  const session = await getCurrentUserSession();

  if (!session?.isAdmin) {
    redirect("/");
  }

  return session;
}
