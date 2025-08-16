const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || response.statusText);
  }

  return (await response.json()) as T;
}

// Convenience wrappers ------------------------------------------------------
export function get<T>(endpoint: string) {
  return apiFetch<T>(endpoint);
}

export function post<T>(endpoint: string, body: unknown) {
  return apiFetch<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
