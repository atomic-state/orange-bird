export {
  Atom,
  Filter,
  FilterGet,
  AtomicState,
  atom,
  useAtom,
  useValue,
  useActions,
  useDispatch,
  filter,
  storage,
  useFilter,
  useStorage,
  useStorageItem,
  ActionType,
  ActionsObjectType,
  useAtomType,
} from "atomic-state"

export {
  FetcherConfig,
  createHttpClient,
  fetcher,
  useFetcher,
  useFetcherLoading,
  useFetcherConfig,
  useFetcherData,
  CacheStoreType,
  mutateData,
  revalidate,
  useFetcherError,
  FetcherInit,
  useFetcherId,
} from "http-react-fetcher"

import { useState } from "react"

export function useBoolean(initialValue = null) {
  const [state, setState] = useState<boolean>(initialValue)

  const actions = {
    toggle() {
      setState((s) => !s)
    },
    off() {
      setState(false)
    },
    on() {
      setState(true)
    },
    reset() {
      setState(initialValue)
    },
  }

  const end = [state, actions] as [
    boolean,
    {
      toggle(): void
      off(): void
      on(): void
      reset(): void
    }
  ]

  return end
}

export function useObject<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue)

  const actions = {
    write(f: T | ((e: T) => T)) {
      const n = typeof f === "function" ? (f as any)(state) : { ...state, ...f }
      const tm = setTimeout(() => {
        setState((s) => ({
          ...s,
          ...n,
        }))
        clearTimeout(tm)
      }, 0)
    },
    replace(f: T | ((e: T) => T)) {
      const n = typeof f === "function" ? (f as any)(state) : f
      setState(n)
    },

    reset() {
      setState(initialValue)
    },
  }

  const end = [state, actions] as [
    T,
    {
      write(f: T | ((e: T) => T)): void
      replace(f: T | ((e: T) => T)): void
      /**
       * Reset to initial value
       */
      reset(): void
    }
  ]

  return end
}
