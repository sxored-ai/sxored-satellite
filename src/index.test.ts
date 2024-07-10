import SxoredSatellite from './index';
import { environment } from './environment';

const fetchMock = jest.fn();
global.fetch = fetchMock;

const accessToken = 'test-access-token';
const apiSdk = new SxoredSatellite(accessToken);

describe('SxoredSatellite', () => {
  afterEach(() => {
    fetchMock.mockReset();
  });

  it('should use default API base URL if none is provided', () => {
    expect(apiSdk['baseURL']).toBe(environment.apiBaseUrl);
  });

  it('should allow overriding the API base URL', () => {
    const customBaseURL = 'https://custom.api.example.com';
    const customApiSdk = new SxoredSatellite(accessToken, customBaseURL);
    expect(customApiSdk['baseURL']).toBe(customBaseURL);
  });

  it('should handle uploadIdCard successfully', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({ text: 'ID Card Text', confidence: 0.99 }),
    });

    const file = new File(['dummy content'], 'id_card.png', { type: 'image/png' });
    const response = await apiSdk.readIdCard(file);
    expect(response.data.text).toBe('ID Card Text');
    expect(response.status).toBe(200);
  });

  it('should handle uploadPdfForText successfully', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({ text: 'PDF Text', confidence: 0.95 }),
    });

    const file = new File(['dummy content'], 'document.pdf', { type: 'application/pdf' });
    const response = await apiSdk.readPdf(file);
    expect(response.data.text).toBe('PDF Text');
    expect(response.status).toBe(200);
  });

  it('should handle uploadPdfForSummary successfully', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({ summary: 'PDF Summary', keyPoints: ['Point 1', 'Point 2'] }),
    });

    const file = new File(['dummy content'], 'document.pdf', { type: 'application/pdf' });
    const response = await apiSdk.readPdfFraud(file);
    expect(response.data.summary).toBe('PDF Summary');
    expect(response.data.keyPoints).toEqual(['Point 1', 'Point 2']);
    expect(response.status).toBe(200);
  });
});
