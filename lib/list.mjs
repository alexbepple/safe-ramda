import * as r from 'ramda'

export const find = r.curry((needlePredicate, haystack) =>
  r.isNil(haystack) ? undefined : r.find(needlePredicate, haystack)
)

export const filter = r.curry((predicate, filterable) =>
  r.isNil(filterable) ? filterable : r.filter(predicate, filterable)
)

export const map = r.curry((fn, functor) =>
  r.isNil(functor) ? functor : r.map(fn, functor)
)

export const nth = r.curry((
  offset,
  list,
) => (r.isNil(list) ? list : r.nth(offset, list)))

export const head = nth(0)

export const includes = r.curry((needle, haystack) => {
  if (!haystack) return false
  return r.includes(needle, haystack)
})
export const startsWith = r.curry((needle, haystack) => {
  if (!haystack) return false
  return r.startsWith(needle, haystack)
})
