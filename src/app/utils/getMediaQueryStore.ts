import { isClient } from "./env"

const stores = new Map<
  string,
  {
    isMatch: boolean
    mql: MediaQueryList
    subs: Set<() => void>
    stop: () => void
  }
>()

export function getMediaQueryStore(query: string) {
  if (stores.has(query)) return stores.get(query)!
  const mql = isClient ? window.matchMedia(query) : ({} as MediaQueryList)
  const subs = new Set<() => void>()
  const update = () => {
    store.isMatch = !!mql.matches
    subs.forEach((cb) => cb())
  }

  if (mql.addEventListener) mql.addEventListener("change", update)
  else if ((mql as MediaQueryList).addListener) (mql as MediaQueryList).addListener(update) // Safari <14

  const stop = () => {
    if (mql.removeEventListener) mql.removeEventListener("change", update)
    else if ((mql as MediaQueryList).removeListener) (mql as MediaQueryList).removeListener(update) // Safari <14
  }

  const store = { isMatch: isClient ? mql.matches : false, mql, subs, stop }
  stores.set(query, store)
  return store
}