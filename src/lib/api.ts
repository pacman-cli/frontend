<<<<<<< HEAD
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
=======
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8080/api'
>>>>>>> 55c0a3a (Added codes)

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    // Revalidate server components every 30s by default
    next: {
<<<<<<< HEAD
       revalidate: 30 
      },
  });
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`);
  }
  return res.json();
=======
      revalidate: 30
    },
  })
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`)
  }
  return res.json()
>>>>>>> 55c0a3a (Added codes)
}

export async function apiPost<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, { //api call to the backend
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, //headers for the api call
    body: JSON.stringify(body),
    ...init, //init is the request init
<<<<<<< HEAD
  }); //res is the response from the api call
  if (!res.ok) {
    throw new Error(`POST ${path} failed: ${res.status}`);
  }
  return res.json();
=======
  }) //res is the response from the api call
  if (!res.ok) {
    throw new Error(`POST ${path} failed: ${res.status}`)
  }
  return res.json()
>>>>>>> 55c0a3a (Added codes)
}


