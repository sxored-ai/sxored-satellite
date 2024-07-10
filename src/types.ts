export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: any;
}

export interface ImageToTextResponse {
  text: string;
  confidence: number;
}

export interface FileToTextResponse {
  text: string;
  confidence: number;
}

export interface PdfSummaryResponse {
  summary: string;
  keyPoints: string[];
}
