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
exports.Hue = void 0;
const axios_1 = __importDefault(require("axios"));
class Hue {
    constructor(user, ip) {
        this.getLights = () => __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(`${this.baseURL}/lights`);
            return res.data;
        });
        this.getLight = (id) => __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(`${this.baseURL}/lights/${id}`);
            return res.data;
        });
        this.toggleLight = (id) => __awaiter(this, void 0, void 0, function* () {
            const light = yield this.getLight(id);
            const res = yield axios_1.default.put(`${this.baseURL}/lights/${id}/state`, {
                "on": light.state.on ? false : true
            });
            return res.data;
        });
        this.changeColor = (id, hue, sat, bri) => __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.put(`${this.baseURL}/lights/${id}/state`, {
                "on": true,
                "sat": sat,
                "bri": bri,
                "hue": hue
            });
            console.log(res.data);
            return res.data;
        });
        this.username = user;
        this.ip = ip;
        this.baseURL = `http://${ip}/api/${this.username}`;
    }
}
exports.Hue = Hue;
