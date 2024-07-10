import { ApiResponse, ApiError, FileToTextResponse } from '../types';
import { request } from './request';

export async function readMetadata(baseURL: string, accessToken: string, file: File): Promise<ApiResponse<FileToTextResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return request<FileToTextResponse>(baseURL, accessToken, '/read-metadata', {
    method: 'POST',
    body: formData,
  });
}
