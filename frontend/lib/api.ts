const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
export async function apiGet(path: string) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const res = await fetch(`${API_BASE}${path}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error('API error');
  return res.json();
}
