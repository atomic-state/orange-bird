export { Atom, Filter, FilterGet, AtomicState, atom, useAtom, useValue, useActions, useDispatch, filter, storage, useFilter, useStorage, useStorageItem, } from "atomic-state";
export { FetcherConfig, createHttpClient, fetcher, useFetcher, } from "http-react-fetcher";
export declare function useBoolean(initialValue?: boolean): [boolean, {
    toggle(): void;
    off(): void;
    on(): void;
    reset(): void;
}];
export declare function useObject<T>(initialValue: T): [T, {
    write(f: T | ((e: T) => T)): void;
    replace(f: T | ((e: T) => T)): void;
    /**
     * Reset to initial value
     */
    reset(): void;
}];
