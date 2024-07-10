import { ApiResponse, ApiError, PdfSummaryResponse } from '../types';
import { request } from './request';

export async function readPdfFraud(baseURL: string, accessToken: string, file: File): Promise<ApiResponse<PdfSummaryResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return request<PdfSummaryResponse>(baseURL, accessToken, '/upload-pdf-summary', {
    method: 'POST',
    body: formData,
  });
}
