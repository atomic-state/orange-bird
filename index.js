"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObject = exports.useBoolean = exports.useFetcherError = exports.revalidate = exports.mutateData = exports.useFetcherData = exports.useFetcherConfig = exports.useFetcherLoading = exports.useFetcher = exports.fetcher = exports.createHttpClient = exports.FetcherConfig = exports.useStorageItem = exports.useStorage = exports.useFilter = exports.storage = exports.filter = exports.useDispatch = exports.useActions = exports.useValue = exports.useAtom = exports.atom = exports.AtomicState = void 0;
var atomic_state_1 = require("atomic-state");
Object.defineProperty(exports, "AtomicState", { enumerable: true, get: function () { return atomic_state_1.AtomicState; } });
Object.defineProperty(exports, "atom", { enumerable: true, get: function () { return atomic_state_1.atom; } });
Object.defineProperty(exports, "useAtom", { enumerable: true, get: function () { return atomic_state_1.useAtom; } });
Object.defineProperty(exports, "useValue", { enumerable: true, get: function () { return atomic_state_1.useValue; } });
Object.defineProperty(exports, "useActions", { enumerable: true, get: function () { return atomic_state_1.useActions; } });
Object.defineProperty(exports, "useDispatch", { enumerable: true, get: function () { return atomic_state_1.useDispatch; } });
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return atomic_state_1.filter; } });
Object.defineProperty(exports, "storage", { enumerable: true, get: function () { return atomic_state_1.storage; } });
Object.defineProperty(exports, "useFilter", { enumerable: true, get: function () { return atomic_state_1.useFilter; } });
Object.defineProperty(exports, "useStorage", { enumerable: true, get: function () { return atomic_state_1.useStorage; } });
Object.defineProperty(exports, "useStorageItem", { enumerable: true, get: function () { return atomic_state_1.useStorageItem; } });
var http_react_fetcher_1 = require("http-react-fetcher");
Object.defineProperty(exports, "FetcherConfig", { enumerable: true, get: function () { return http_react_fetcher_1.FetcherConfig; } });
Object.defineProperty(exports, "createHttpClient", { enumerable: true, get: function () { return http_react_fetcher_1.createHttpClient; } });
Object.defineProperty(exports, "fetcher", { enumerable: true, get: function () { return http_react_fetcher_1.fetcher; } });
Object.defineProperty(exports, "useFetcher", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcher; } });
Object.defineProperty(exports, "useFetcherLoading", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherLoading; } });
Object.defineProperty(exports, "useFetcherConfig", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherConfig; } });
Object.defineProperty(exports, "useFetcherData", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherData; } });
Object.defineProperty(exports, "mutateData", { enumerable: true, get: function () { return http_react_fetcher_1.mutateData; } });
Object.defineProperty(exports, "revalidate", { enumerable: true, get: function () { return http_react_fetcher_1.revalidate; } });
Object.defineProperty(exports, "useFetcherError", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherError; } });
var react_1 = require("react");
function useBoolean(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = (0, react_1.useState)(initialValue), state = _a[0], setState = _a[1];
    var actions = {
        toggle: function () {
            setState(function (s) { return !s; });
        },
        off: function () {
            setState(false);
        },
        on: function () {
            setState(true);
        },
        reset: function () {
            setState(initialValue);
        },
    };
    var end = [state, actions];
    return end;
}
exports.useBoolean = useBoolean;
function useObject(initialValue) {
    var _a = (0, react_1.useState)(initialValue), state = _a[0], setState = _a[1];
    var actions = {
        write: function (f) {
            var n = typeof f === "function" ? f(state) : __assign(__assign({}, state), f);
            var tm = setTimeout(function () {
                setState(function (s) { return (__assign(__assign({}, s), n)); });
                clearTimeout(tm);
            }, 0);
        },
        replace: function (f) {
            var n = typeof f === "function" ? f(state) : f;
            setState(n);
        },
        reset: function () {
            setState(initialValue);
        },
    };
    var end = [state, actions];
    return end;
}
exports.useObject = useObject;
