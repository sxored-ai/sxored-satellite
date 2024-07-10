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
const readIdCard_1 = require("./api/readIdCard");
const readPdf_1 = require("./api/readPdf");
const readPdfFraud_1 = require("./api/readPdfFraud");
const environment_1 = require("./environment");
class SxoredSatellite {
    constructor(accessToken, baseURL = environment_1.environment.apiBaseUrl) {
        this.baseURL = baseURL;
        this.accessToken = accessToken;
    }
    readIdCard(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, readIdCard_1.readIdCard)(this.baseURL, this.accessToken, file);
        });
    }
    readPdf(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, readPdf_1.readPdf)(this.baseURL, this.accessToken, file);
        });
    }
    readPdfFraud(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, readPdfFraud_1.readPdfFraud)(this.baseURL, this.accessToken, file);
        });
    }
}
exports.default = SxoredSatellite;
