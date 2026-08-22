// API client - all network logic lives here

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
}

export const apiCall = async <T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> => {
  const { method = 'GET', body } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};

// Example API methods
export const api = {
  transactions: {
    list: () => apiCall<any>('/transactions'),
    getById: (id: string) => apiCall<any>(`/transactions/${id}`),
    create: (data: unknown) => apiCall<any>('/transactions', { method: 'POST', body: data }),
  },
};
