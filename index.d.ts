export { Atom, Filter, FilterGet, AtomicState, atom, useAtom, useValue, useActions, useDispatch, filter, storage, useFilter, useStorage, useStorageItem, ActionType, ActionsObjectType, useAtomType, getAtomValue, getFilterValue, takeSnapshot, } from "atomic-state";
export { CacheStoreType, FetcherInit, createHttpClient, FetcherConfig, mutateData, revalidate, useFetcherLoading, useFetcherConfig, useFetcherError, useFetcherData, useImperative, useFetcherId, useFetchId, useLoading, useFetcher, useConfig, useFetch, useError, useData, fetcher, } from "http-react-fetcher";
export declare function useWindowSize(): any;
export declare function useBoolean(initialValue?: boolean | null): [boolean, {
    toggle(): void;
    off(): void;
    on(): void;
    reset(): void;
}];
export declare function useObject<T = any>(initialValue: T): [T, {
    write(f: Partial<T> | ((e: T) => Partial<T>)): void;
    replace(f: T | ((e: T) => T)): void;
    /**
     * Reset to initial value
     */
    reset(): void;
}];
