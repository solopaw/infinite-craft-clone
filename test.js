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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var axios_1 = require("axios");
var get = axios_1.default.get;
var API = 'https://neal.fun/api/infinite-craft/pair';
var HEADERS = {
    "Referer": "https://neal.fun/infinite-craft/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
};
// save files
var CREATION_TREE = 'creation_tree.json';
var TRIED = 'tried.txt';
var FIRST_DISCOVERIES = 'first_discoveries.txt';
var DELAY = null; // optional delay between requests, in seconds
// ANSI escape codes for colored text
var C = {
    YELLOW: '\u001b[33m',
    MAGENTA: '\u001b[35m',
    CYAN: '\u001b[36m',
    GREEN: '\u001b[32m',
    RED: '\u001b[31m',
    BOLD: '\u001b[1m',
    UNDERLINE: '\u001b[4m',
    RESET: '\u001b[0m'
};
function sleep(seconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, seconds * 1000); });
}
function solve() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, creationTree, availableItems, tried, _loop_1, state_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log();
                    console.log("".concat(C.BOLD).concat(C.RED).concat(C.UNDERLINE, "Infinite Crafter").concat(C.RESET));
                    console.log();
                    console.log('Loading save files...');
                    return [4 /*yield*/, loadFiles()];
                case 1:
                    _a = _c.sent(), creationTree = _a[0], availableItems = _a[1], tried = _a[2];
                    console.log();
                    if (DELAY === null) {
                        console.log("".concat(C.CYAN, "Running without a delay!").concat(C.RESET));
                    }
                    else {
                        console.log("".concat(C.RED, "Running with a delay of ").concat(DELAY, " seconds!").concat(C.RESET));
                    }
                    console.log();
                    _loop_1 = function () {
                        var randomIndexes, item1, item2, response, data, emoji, isNew, result, error_1;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    randomIndexes = Array.from({ length: 2 }, function () { return Math.floor(Math.random() * availableItems.length); });
                                    item1 = availableItems[randomIndexes[0]];
                                    item2 = availableItems[randomIndexes[1]];
                                    if (tried.some(function (combo) { return combo[0] === item1 && combo[1] === item2; })) {
                                        return [2 /*return*/, "continue"];
                                    }
                                    if (!(DELAY !== null)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, sleep(Math.random() * DELAY)];
                                case 1:
                                    _d.sent();
                                    _d.label = 2;
                                case 2:
                                    _d.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, get("".concat(API, "?first=").concat(item1, "&second=").concat(item2), { headers: HEADERS })];
                                case 3:
                                    response = _d.sent();
                                    data = response.data;
                                    tried.push([item1, item2]);
                                    (0, fs_1.appendFileSync)(TRIED, "".concat(item1, "\t").concat(item2, "\n"));
                                    emoji = data.emoji, isNew = data.isNew, result = data.result;
                                    process.stdout.write("".concat(C.YELLOW).concat(item1).concat(C.RESET, " + ").concat(C.YELLOW).concat(item2).concat(C.RESET, " => ").concat(C.MAGENTA).concat(emoji, " ").concat(result).concat(C.RESET));
                                    if (isNew) {
                                        console.log(", ".concat(C.CYAN).concat(C.BOLD).concat(C.UNDERLINE, "First Discovery!").concat(C.RESET));
                                        if (FIRST_DISCOVERIES) {
                                            (0, fs_1.appendFileSync)(FIRST_DISCOVERIES, "".concat(new Date().toISOString(), " \t->\t ").concat(result, "\n"));
                                        }
                                    }
                                    else if (result === 'Nothing') {
                                        console.log(", ".concat(C.RED, "XXX").concat(C.RESET));
                                        return [2 /*return*/, "continue"];
                                    }
                                    else if (!availableItems.includes(result)) {
                                        console.log(", ".concat(C.GREEN, "New Item!").concat(C.RESET));
                                    }
                                    else {
                                        console.log();
                                    }
                                    if (result.includes('+')) {
                                        console.log("\t".concat(C.RED, "Erroneous result is being omitted from future use...").concat(C.RESET));
                                        return [2 /*return*/, "continue"];
                                    }
                                    if (!availableItems.includes(result)) {
                                        availableItems.push(result);
                                        creationTree[result] = [item1, item2];
                                        console.log("\tItem ".concat(C.GREEN, "#").concat(availableItems.length).concat(C.RESET, " @ depth ").concat(C.GREEN).concat(findDepth(creationTree, result)).concat(C.RESET));
                                        if (CREATION_TREE) {
                                            (0, fs_1.writeFileSync)(CREATION_TREE, JSON.stringify(creationTree, null, 2));
                                        }
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _d.sent();
                                    if (!(0, axios_1.isAxiosError)(error_1))
                                        return [2 /*return*/, { value: void 0 }];
                                    console.log("".concat(C.RED, "Error with \"").concat(item1, "\" and \"").concat(item2, "\": ").concat(((_b = error_1.response) === null || _b === void 0 ? void 0 : _b.status) || error_1.message).concat(C.RESET));
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    };
                    _c.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1()];
                case 3:
                    state_1 = _c.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadFiles() {
    return __awaiter(this, void 0, void 0, function () {
        var creationTree, availableItems, data, tried, data, firstDiscoveries;
        return __generator(this, function (_a) {
            creationTree = {};
            availableItems = ['Water', 'Fire', 'Wind', 'Earth'];
            try {
                data = (0, fs_1.readFileSync)(CREATION_TREE, 'utf8');
                creationTree = JSON.parse(data.trim());
                availableItems.push.apply(availableItems, Object.keys(creationTree));
                console.log("".concat(C.GREEN, "Loaded ").concat(CREATION_TREE, " with ").concat(availableItems.length, " items!").concat(C.RESET));
            }
            catch (error) {
                console.log("".concat(C.RED, "Creation tree save not found, using defaults: ").concat(C.YELLOW).concat(availableItems.join(', ')).concat(C.RESET));
                (0, fs_1.writeFileSync)(CREATION_TREE, JSON.stringify(creationTree, null, 2));
            }
            tried = [];
            try {
                data = (0, fs_1.readFileSync)(TRIED, 'utf8');
                tried = data.trim().split('\n').map(function (combo) { return combo.split('\t'); });
                console.log("".concat(C.GREEN, "Loaded ").concat(TRIED, " with ").concat(tried.length, " combinations!").concat(C.RESET));
            }
            catch (error) {
                console.log("".concat(C.RED, "Tried combinations file not found, creating one with the name: \"").concat(TRIED, "\"").concat(C.RESET));
                (0, fs_1.writeFileSync)(TRIED, '');
            }
            try {
                firstDiscoveries = (0, fs_1.readFileSync)(FIRST_DISCOVERIES, 'utf8').trim().split('\n');
                console.log("".concat(C.GREEN, "Loaded ").concat(FIRST_DISCOVERIES, " with ").concat(firstDiscoveries.length, " first discoveries!").concat(C.RESET));
            }
            catch (error) {
                console.log("".concat(C.RED, "First discoveries file not found, creating one with the name: \"").concat(FIRST_DISCOVERIES, "\"").concat(C.RESET));
                (0, fs_1.writeFileSync)(FIRST_DISCOVERIES, '');
            }
            return [2 /*return*/, [creationTree, availableItems, tried]];
        });
    });
}
function findDepth(creationTree, result) {
    for (var _i = 0, _a = Object.entries(creationTree); _i < _a.length; _i++) {
        var _b = _a[_i], res = _b[0], _c = _b[1], ingredient1 = _c[0], ingredient2 = _c[1];
        if (res === result) {
            return Math.max(findDepth(creationTree, ingredient1), findDepth(creationTree, ingredient2)) + 1;
        }
    }
    return 0;
}
if (require.main === module) {
    solve();
}
