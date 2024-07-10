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
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = request;
function request(baseURL, accessToken, endpoint, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${baseURL}${endpoint}`, Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, options.headers), { 'x-api-key': accessToken }) }));
        const data = yield response.json();
        if (!response.ok) {
            throw handleError(response, data);
        }
        return {
            data,
            status: response.status,
            statusText: response.statusText,
        };
    });
}
function handleError(response, data) {
    return {
        message: response.statusText,
        status: response.status,
        details: data,
    };
}
