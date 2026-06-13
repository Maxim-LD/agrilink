import { fetchApi, setAuthToken } from "@/lib/api-client";

export type LoginPayload = {
  phone: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    role: string;
    fullName: string;
  };
};

export async function loginUser(payload: LoginPayload): Promise<LoginResponse | null> {
  const response = await fetchApi('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (response?.data) {
    const data = response.data;
    if (data.token) {
      setAuthToken(data.token);
    }
    return data;
  }

  return null;
}
