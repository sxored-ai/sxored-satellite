"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const environment_1 = require("./environment");
const fetchMock = jest.fn();
global.fetch = fetchMock;
const accessToken = 'test-access-token';
const apiSdk = new index_1.default(accessToken);
describe('SxoredSatellite', () => {
    afterEach(() => {
        fetchMock.mockReset();
    });
    it('should use default API base URL if none is provided', () => {
        expect(apiSdk['baseURL']).toBe(environment_1.environment.apiBaseUrl);
    });
    it('should allow overriding the API base URL', () => {
        const customBaseURL = 'https://custom.api.example.com';
        const customApiSdk = new index_1.default(accessToken, customBaseURL);
        expect(customApiSdk['baseURL']).toBe(customBaseURL);
    });
    it('should handle uploadIdCard successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            status: 200,
            statusText: 'OK',
            json: () => __awaiter(void 0, void 0, void 0, function* () { return ({ text: 'ID Card Text', confidence: 0.99 }); }),
        });
        const file = new File(['dummy content'], 'id_card.png', { type: 'image/png' });
        const response = yield apiSdk.readIdCard(file);
        expect(response.data.text).toBe('ID Card Text');
        expect(response.status).toBe(200);
    }));
    it('should handle uploadPdfForText successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            status: 200,
            statusText: 'OK',
            json: () => __awaiter(void 0, void 0, void 0, function* () { return ({ text: 'PDF Text', confidence: 0.95 }); }),
        });
        const file = new File(['dummy content'], 'document.pdf', { type: 'application/pdf' });
        const response = yield apiSdk.readPdf(file);
        expect(response.data.text).toBe('PDF Text');
        expect(response.status).toBe(200);
    }));
});
