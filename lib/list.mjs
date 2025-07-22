import * as r from 'ramda'

// get single element – maybe

export const find = r.curry((needlePredicate, haystack) =>
  r.isNil(haystack) ? undefined : r.find(needlePredicate, haystack)
)

export const nth = r.curry((
  offset,
  list,
) => (r.isNil(list) ? undefined : r.nth(offset, list)))

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

// get boolean

export const includes = r.curry((needle, haystack) => {
  if (!haystack) return false
  return r.includes(needle, haystack)
})
export const startsWith = r.curry((needle, haystack) => {
  if (!haystack) return false
  return r.startsWith(needle, haystack)
})
