/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect, type DependencyList, type EffectCallback } from "react"
import { isServer } from "../utils/env"

export const useIsoMorphicEffect = (effect: EffectCallback, deps?: DependencyList | undefined) => {
  if (isServer) {
    useEffect(effect, deps)
  } else {
    useLayoutEffect(effect, deps)
  }
}