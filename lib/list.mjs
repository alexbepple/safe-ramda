import * as r from 'ramda'

export const find = r.curry((needlePredicate, haystack) =>
  r.isNil(haystack) ? undefined : r.find(needlePredicate, haystack)
)

export const map = r.curry((fn, functor) =>
  r.isNil(functor) ? functor : r.map(fn, functor)
)

export const nth = r.curry((
  offset,
  list,
) => (r.isNil(list) ? list : r.nth(offset, list)))

export const head = nth(0)
