import { ApiResponse, ApiError } from '../types';

export async function request<T>(baseURL: string, accessToken: string, endpoint: string, options: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(`${baseURL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      'x-api-key': accessToken,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw handleError(response, data);
  }

  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
}

function handleError(response: Response, data: any): ApiError {
  return {
    message: response.statusText,
    status: response.status,
    details: data,
  };
}
