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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("./config"));
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, typeorm_1.getConnectionManager().create(config_1.default).connect()];
                case 1:
                    connection = _a.sent();
                    options = {
                        name: "przd.test",
                        columns: [
                            {
                                name: 'id',
                                type: 'integer',
                                isPrimary: true,
                                isGenerated: false,
                            }
                        ],
                    };
                    return [4, connection
                            .createQueryRunner()
                            .dropTable(new typeorm_1.Table(options), true)];
                case 2:
                    _a.sent();
                    return [4, connection.query("\n            CREATE TABLE IF NOT EXISTS \"przd\".\"test\" (\n                \"id\" integer NOT NULL,\n                CONSTRAINT \"PK_test_constraint\" PRIMARY KEY (\"id\")\n            ) WITH ( OIDS=FALSE );\n        ")];
                case 3:
                    _a.sent();
                    return [4, connection.query("INSERT INTO \"przd\".\"test\" (id) VALUES (1);")];
                case 4:
                    _a.sent();
                    return [4, connection.createQueryRunner()
                            .clearTable("przd.test")];
                case 5:
                    _a.sent();
                    return [4, connection.query("INSERT INTO \"przd\".\"test\" (id) VALUES (1);")];
                case 6:
                    _a.sent();
                    console.log('Closing connection');
                    return [4, connection.close()];
                case 7:
                    _a.sent();
                    console.log('Connection closed');
                    return [2];
            }
        });
    });
}
run();
