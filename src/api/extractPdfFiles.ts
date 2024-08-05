import { ApiResponse, ApiError, FileToTextResponse } from '../types';
import { request } from './request';

export async function extractPdfFiles(baseURL: string, accessToken: string, url: string, content: string): Promise<ApiResponse<FileToTextResponse>> {
  return request<FileToTextResponse>(baseURL, accessToken, url, {
    method: 'POST',
    body: JSON.stringify(content),
  });
}