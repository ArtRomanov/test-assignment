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
var _this = this;
var requestForTodos = function () { return __awaiter(_this, void 0, void 0, function () {
    var url, loadData, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://jsonplaceholder.typicode.com/todos";
                return [4 /*yield*/, fetch(url)];
            case 1:
                loadData = _a.sent();
                return [4 /*yield*/, loadData.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var requestForUsers = function () { return __awaiter(_this, void 0, void 0, function () {
    var url, loadData, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://jsonplaceholder.typicode.com/users";
                return [4 /*yield*/, fetch(url)];
            case 1:
                loadData = _a.sent();
                return [4 /*yield*/, loadData.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var obj = {};
// select book by id;
var selectById = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, requestForTodos()];
            case 1:
                response = _a.sent();
                if (id in obj) {
                    console.log('request found in memo: ');
                    return [2 /*return*/, obj[id]];
                }
                else {
                    console.log('requesting from API...');
                    result = response.filter(function (book) { return book.id === id; });
                    obj[id] = result;
                    return [2 /*return*/, result];
                }
                return [2 /*return*/];
        }
    });
}); };
selectById(1).then(function (res) {
    console.log(res);
});
selectById(1).then(function (res) {
    console.log(res);
});
// 1. grouping todos by users:
var groupTodoByUser = function () { return __awaiter(_this, void 0, void 0, function () {
    var todosGroupByUsers, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                todosGroupByUsers = {};
                return [4 /*yield*/, requestForTodos()];
            case 1:
                response = _a.sent();
                response.map(function (todo) {
                    if (todo.userId in todosGroupByUsers) {
                        todosGroupByUsers[todo.userId].push(todo);
                    }
                    else {
                        todosGroupByUsers[todo.userId] = [todo];
                    }
                });
                return [2 /*return*/, console.log('Grouping todos by users: ', todosGroupByUsers)];
        }
    });
}); };
groupTodoByUser();
// 2. select all user's todos by userId:
var selectTodoByUserId = function (userId) { return __awaiter(_this, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, requestForTodos()];
            case 1:
                response = _a.sent();
                result = response.filter(function (todo) { return todo.userId === userId; });
                return [2 /*return*/, console.log("Select all user's todos by userId(" + userId + "):", result)];
        }
    });
}); };
selectTodoByUserId(2);
// 3. select todos by user name:
var selectTodosByUserName = function (userName) { return __awaiter(_this, void 0, void 0, function () {
    var responseUsers, resultUsersResponse, responseTodos, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, requestForUsers()];
            case 1:
                responseUsers = _a.sent();
                resultUsersResponse = responseUsers.filter(function (user) {
                    if (user.username === userName) {
                        return user.id;
                    }
                });
                return [4 /*yield*/, requestForTodos()];
            case 2:
                responseTodos = _a.sent();
                result = responseTodos.filter(function (todo) { return todo.userId === resultUsersResponse[0].id; });
                return [2 /*return*/, console.log("Select todos by user name '" + userName + "': ", result)];
        }
    });
}); };
selectTodosByUserName("Bret");
