export type ERequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH';

export const fetchRequest = async (endpoint: string, method: ERequestMethod, payload: unknown) => {
  const options = {
    method: method,
    headers: {
      accept: 'application/json',
    },
  } as RequestInit;

  if (method === 'POST') {
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(endpoint, options);
  const json = await response.json();

  return { response, json };
};
