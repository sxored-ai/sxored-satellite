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
exports.readIdCard = readIdCard;
const request_1 = require("./request");
function readIdCard(baseURL, accessToken, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append('file', file);
        return (0, request_1.request)(baseURL, accessToken, '/read-idcard', {
            method: 'POST',
            body: formData,
        });
    });
}
