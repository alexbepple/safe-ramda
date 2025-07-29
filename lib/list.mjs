import * as r from 'ramda'
import { binaryDefaultingLastArgTo } from './_shared.mjs'

/*
 * As an alternative, I considered providing default return values directly,
 * e.g. `ifSecondNilElse(false, r.includes)`.
 * However, the conceptualization feels more intuitive.
 */
const binaryDefaultingNilListToEmpty = binaryDefaultingLastArgTo([])

// get single element – maybe

export const find = binaryDefaultingNilListToEmpty(r.find)
export const nth = binaryDefaultingNilListToEmpty(r.nth)
export const head = nth(0)

export const last = (listLike) =>
  r.isNil(listLike) ? undefined : r.last(listLike)

// get another list – maybe (preserve structure)

export const filter = r.curry((predicate, filterable) =>
  r.isNil(filterable) ? filterable : r.filter(predicate, filterable)
)

export const map = r.curry((fn, functor) =>
  r.isNil(functor) ? functor : r.map(fn, functor)
)

// predicates

export const includes = binaryDefaultingNilListToEmpty(r.includes)
export const startsWith = binaryDefaultingNilListToEmpty(r.startsWith)

export const all = binaryDefaultingNilListToEmpty(r.all)
export const none = binaryDefaultingNilListToEmpty(r.none)
export const any = binaryDefaultingNilListToEmpty(r.any)
