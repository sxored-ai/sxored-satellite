import { readImgFiles } from './api/readImgFiles';
import { readPdfFiles } from './api/readPdfFiles';
import { extractPdfFiles } from './api/extractPdfFiles';
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
    return readImgFiles(this.baseURL, this.accessToken, file);
  }

  async readPdfFiles(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFiles(this.baseURL, this.accessToken, file);
  }

  async extractBankStatement(content: string): Promise<ApiResponse<FileToTextResponse>> {
    return extractPdfFiles(this.baseURL, this.accessToken, '/extract-bank-statement', content);
  }

  async extractBankAccount(content: string): Promise<ApiResponse<FileToTextResponse>> {
    return extractPdfFiles(this.baseURL, this.accessToken, '/extract-bank-account', content);
  }

  async extractOjkSlik(content: string): Promise<ApiResponse<FileToTextResponse>> {
    return extractPdfFiles(this.baseURL, this.accessToken, '/extract-ojk-slik', content);
  }
}

export default SxoredSatellite;
