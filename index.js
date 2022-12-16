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
exports.useFetcherBlob = exports.useBlob = exports.setURLParams = exports.useUNLINK = exports.useResolve = exports.usePUT = exports.usePURGE = exports.usePOST = exports.usePATCH = exports.useOPTIONS = exports.useLINK = exports.useHEAD = exports.useGET = exports.useMutate = exports.useDELETE = exports.useCode = exports.useData = exports.useError = exports.useFetch = exports.useConfig = exports.useLoading = exports.useFetchId = exports.useImperative = exports.useFetcher = exports.useFetcherMutate = exports.useFetcherCode = exports.useFetcherId = exports.useFetcherData = exports.useFetcherError = exports.useFetcherConfig = exports.useFetcherLoading = exports.fetcher = exports.revalidate = exports.mutateData = exports.FetcherConfig = exports.createHttpClient = exports.takeSnapshot = exports.getFilterValue = exports.getAtomValue = exports.useStorageItem = exports.useStorage = exports.useFilter = exports.storage = exports.filter = exports.useDispatch = exports.useActions = exports.useValue = exports.useAtom = exports.atom = exports.AtomicState = void 0;
exports.useObject = exports.useBoolean = exports.useWindowSize = exports.useText = exports.useFetcherText = void 0;
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
Object.defineProperty(exports, "getAtomValue", { enumerable: true, get: function () { return atomic_state_1.getAtomValue; } });
Object.defineProperty(exports, "getFilterValue", { enumerable: true, get: function () { return atomic_state_1.getFilterValue; } });
Object.defineProperty(exports, "takeSnapshot", { enumerable: true, get: function () { return atomic_state_1.takeSnapshot; } });
var http_react_fetcher_1 = require("http-react-fetcher");
// other
Object.defineProperty(exports, "createHttpClient", { enumerable: true, get: function () { return http_react_fetcher_1.createHttpClient; } });
Object.defineProperty(exports, "FetcherConfig", { enumerable: true, get: function () { return http_react_fetcher_1.FetcherConfig; } });
Object.defineProperty(exports, "mutateData", { enumerable: true, get: function () { return http_react_fetcher_1.mutateData; } });
Object.defineProperty(exports, "revalidate", { enumerable: true, get: function () { return http_react_fetcher_1.revalidate; } });
Object.defineProperty(exports, "fetcher", { enumerable: true, get: function () { return http_react_fetcher_1.fetcher; } });
// Hooks
Object.defineProperty(exports, "useFetcherLoading", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherLoading; } });
Object.defineProperty(exports, "useFetcherConfig", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherConfig; } });
Object.defineProperty(exports, "useFetcherError", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherError; } });
Object.defineProperty(exports, "useFetcherData", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherData; } });
Object.defineProperty(exports, "useFetcherId", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherId; } });
Object.defineProperty(exports, "useFetcherCode", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherCode; } });
Object.defineProperty(exports, "useFetcherMutate", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherMutate; } });
Object.defineProperty(exports, "useFetcher", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcher; } });
Object.defineProperty(exports, "useImperative", { enumerable: true, get: function () { return http_react_fetcher_1.useImperative; } });
Object.defineProperty(exports, "useFetchId", { enumerable: true, get: function () { return http_react_fetcher_1.useFetchId; } });
Object.defineProperty(exports, "useLoading", { enumerable: true, get: function () { return http_react_fetcher_1.useLoading; } });
Object.defineProperty(exports, "useConfig", { enumerable: true, get: function () { return http_react_fetcher_1.useConfig; } });
Object.defineProperty(exports, "useFetch", { enumerable: true, get: function () { return http_react_fetcher_1.useFetch; } });
Object.defineProperty(exports, "useError", { enumerable: true, get: function () { return http_react_fetcher_1.useError; } });
Object.defineProperty(exports, "useData", { enumerable: true, get: function () { return http_react_fetcher_1.useData; } });
Object.defineProperty(exports, "useCode", { enumerable: true, get: function () { return http_react_fetcher_1.useCode; } });
Object.defineProperty(exports, "useDELETE", { enumerable: true, get: function () { return http_react_fetcher_1.useDELETE; } });
Object.defineProperty(exports, "useMutate", { enumerable: true, get: function () { return http_react_fetcher_1.useMutate; } });
Object.defineProperty(exports, "useGET", { enumerable: true, get: function () { return http_react_fetcher_1.useGET; } });
Object.defineProperty(exports, "useHEAD", { enumerable: true, get: function () { return http_react_fetcher_1.useHEAD; } });
Object.defineProperty(exports, "useLINK", { enumerable: true, get: function () { return http_react_fetcher_1.useLINK; } });
Object.defineProperty(exports, "useOPTIONS", { enumerable: true, get: function () { return http_react_fetcher_1.useOPTIONS; } });
Object.defineProperty(exports, "usePATCH", { enumerable: true, get: function () { return http_react_fetcher_1.usePATCH; } });
Object.defineProperty(exports, "usePOST", { enumerable: true, get: function () { return http_react_fetcher_1.usePOST; } });
Object.defineProperty(exports, "usePURGE", { enumerable: true, get: function () { return http_react_fetcher_1.usePURGE; } });
Object.defineProperty(exports, "usePUT", { enumerable: true, get: function () { return http_react_fetcher_1.usePUT; } });
Object.defineProperty(exports, "useResolve", { enumerable: true, get: function () { return http_react_fetcher_1.useResolve; } });
Object.defineProperty(exports, "useUNLINK", { enumerable: true, get: function () { return http_react_fetcher_1.useUNLINK; } });
Object.defineProperty(exports, "setURLParams", { enumerable: true, get: function () { return http_react_fetcher_1.setURLParams; } });
Object.defineProperty(exports, "useBlob", { enumerable: true, get: function () { return http_react_fetcher_1.useBlob; } });
Object.defineProperty(exports, "useFetcherBlob", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherBlob; } });
Object.defineProperty(exports, "useFetcherText", { enumerable: true, get: function () { return http_react_fetcher_1.useFetcherText; } });
Object.defineProperty(exports, "useText", { enumerable: true, get: function () { return http_react_fetcher_1.useText; } });
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)({
        width: 0,
        height: 0,
    }), size = _a[0], setSize = _a[1];
    (0, react_1.useEffect)(function () {
        if (typeof window !== "undefined") {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    }, []);
    (0, react_1.useEffect)(function () {
        function resizeListener() {
            if (typeof window !== "undefined") {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
        }
        function addResizeListener() {
            if (typeof window !== "undefined") {
                window.addEventListener("resize", resizeListener);
            }
        }
        addResizeListener();
        return function () {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", resizeListener);
            }
        };
    }, []);
    return size;
}
exports.useWindowSize = useWindowSize;
function useBoolean(initialValue) {
    if (initialValue === void 0) { initialValue = null; }
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
            var n = (typeof f === "function" ? f(state) : __assign(__assign({}, state), f));
            setState(function (s) { return (__assign(__assign({}, s), n)); });
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
