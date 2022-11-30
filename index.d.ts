export { Atom, Filter, FilterGet, AtomicState, atom, useAtom, useValue, useActions, useDispatch, filter, storage, useFilter, useStorage, useStorageItem, ActionType, ActionsObjectType, useAtomType, } from "atomic-state";
export { FetcherConfig, createHttpClient, fetcher, useFetcher, useFetcherLoading, useFetcherConfig, useFetcherData, CacheStoreType, mutateData, revalidate, useFetcherError, FetcherInit, useFetcherId, } from "http-react-fetcher";
export declare function useBoolean(initialValue?: null): [boolean, {
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
