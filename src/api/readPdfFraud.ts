import { ApiResponse, ApiError, FileToTextResponse } from '../types';
import { request } from './request';

export async function readPdfFraud(baseURL: string, accessToken: string, file: File): Promise<ApiResponse<FileToTextResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return request<FileToTextResponse>(baseURL, accessToken, '/check-fraud', {
    method: 'POST',
    body: formData,
  });
}
