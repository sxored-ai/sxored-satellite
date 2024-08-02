import { readImgFiles } from './api/readImgFiles';
import { readPdfFiles } from './api/readPdfFiles';
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

  async readBankStatement(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFiles(this.baseURL, this.accessToken, '/bank-statements', file, '');
  }

  async readStatementAccount(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFiles(this.baseURL, this.accessToken, '/bank-statement-account', file, '');
  }

  async analyzeBankStatement(file: File, data: string): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFiles(this.baseURL, this.accessToken, '/bank-statement-analyzer', file, data);
  }

  async readSlikOjk(file: File): Promise<ApiResponse<FileToTextResponse>> {
    return readPdfFiles(this.baseURL, this.accessToken, '/read-slik-ojk', file, '');
  }
}

export default SxoredSatellite;
