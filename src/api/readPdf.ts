import { ApiResponse, ApiError, ImageToTextResponse } from '../types';
import { request } from './request';

export async function readPdf(baseURL: string, accessToken: string, file: File): Promise<ApiResponse<ImageToTextResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return request<ImageToTextResponse>(baseURL, accessToken, '/upload-pdf-text', {
    method: 'POST',
    body: formData,
  });
}
