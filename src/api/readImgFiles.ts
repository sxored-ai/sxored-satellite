import { ApiResponse, ApiError, ImageToTextResponse } from '../types';
import { request } from './request';

export async function readImgFiles(baseURL: string, accessToken: string, file: File): Promise<ApiResponse<ImageToTextResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return request<ImageToTextResponse>(baseURL, accessToken, '/read-idcard', {
    method: 'POST',
    body: formData,
  });
}
