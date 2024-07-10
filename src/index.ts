import { readIdCard } from './api/readIdCard';
import { readPdf } from './api/readPdf';
import { readPdfFraud } from './api/readPdfFraud';
import { readMetadata } from './api/readMetadata';
import { ApiResponse, ImageToTextResponse, FileToTextResponse, PdfSummaryResponse } from './types';
import { environment } from './environment';

class SxoredSatellite {
  private baseURL: string;
  private accessToken: string;

  constructor(accessToken: string, baseURL: string = environment.apiBaseUrl) {
    this.baseURL = baseURL;
    this.accessToken = accessToken;
  }

  async readIdCard(file: File): Promise<ApiResponse<ImageToTextResponse>> {
    return readIdCard(this.baseURL, this.accessToken, file);
  }

  async readPdf(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdf(this.baseURL, this.accessToken, file);
  }

  async readPdfFraud(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFraud(this.baseURL, this.accessToken, file);
  }

  async readMetadata(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readMetadata(this.baseURL, this.accessToken, file);
  }
}

export default SxoredSatellite;
