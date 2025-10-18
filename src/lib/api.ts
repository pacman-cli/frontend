export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    // Revalidate server components every 30s by default
    next: {
       revalidate: 30 
      },
  });
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`);
  }
  return res.json();
}

export async function apiPost<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, { //api call to the backend
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, //headers for the api call
    body: JSON.stringify(body),
    ...init, //init is the request init
  }); //res is the response from the api call
  if (!res.ok) {
    throw new Error(`POST ${path} failed: ${res.status}`);
  }
  return res.json();
}


