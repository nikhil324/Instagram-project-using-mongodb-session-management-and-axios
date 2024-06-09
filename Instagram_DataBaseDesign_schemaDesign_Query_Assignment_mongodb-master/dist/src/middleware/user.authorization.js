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
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers['authorization'];
    token = token.slice(7, token.length);
    console.log(token);
    if (token == null) {
        res.status(401).send("unauthorized user to access.");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.secretKey);
        req.user = decoded;
        //console.log(decoded);
        next();
    }
    catch (err) {
        res.status(401).json({ error: 'Unauthorized' });
    }
});
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=user.authorization.js.map