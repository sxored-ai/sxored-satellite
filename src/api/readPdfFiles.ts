import { ApiResponse, ApiError, FileToTextResponse } from '../types';
import { request } from './request';

export async function readPdfFiles(baseURL: string, accessToken: string, url: string, file: File, data: string): Promise<ApiResponse<FileToTextResponse>> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('data', data)

  return request<FileToTextResponse>(baseURL, accessToken, url, {
    method: 'POST',
    body: formData,
  });
}