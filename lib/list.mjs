import * as r from 'ramda'
import { defaultingLastArgTo } from './_shared.mjs'

/*
 * As an alternative, I considered providing default return values directly,
 * e.g. `ifSecondNilElse(false, r.includes)`.
 * However, the conceptualization feels more intuitive.
 */
const defaultingListToEmpty = defaultingLastArgTo([])

// get single element – maybe

export const find = defaultingListToEmpty(r.find)
export const nth = defaultingListToEmpty(r.nth)
export const head = defaultingListToEmpty(r.head)

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

export const includes = defaultingListToEmpty(r.includes)
export const startsWith = defaultingListToEmpty(r.startsWith)

export const all = defaultingListToEmpty(r.all)
export const none = defaultingListToEmpty(r.none)
export const any = defaultingListToEmpty(r.any)
