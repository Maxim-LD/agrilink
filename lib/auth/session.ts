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

    if (tokenCookie && tokenCookie.value) {
      const token = tokenCookie.value;
      const parts = token.split('.');
      
      if (parts.length === 3) {
        // Next.js Edge runtime (and Node) has atob for base64 decoding. Or we can use Buffer.
        // atob is more universally supported in Edge runtimes like Vercel.
        const payloadStr = Buffer.from(parts[1], 'base64').toString('utf-8');
        const payload = JSON.parse(payloadStr);
        
        return {
          id: payload.id || "",
          name: payload.name || payload.fullName || "User",
          email: payload.email || payload.phone || "",
          role: payload.role ? payload.role.toLowerCase() as UserSession['role'] : "buyer",
          isAdmin: payload.role?.toLowerCase() === "admin"
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

export async function requireAdminSession(): Promise<UserSession> {
  const session = await getCurrentUserSession();

  if (!session?.isAdmin) {
    redirect("/");
  }

  return session;
}
