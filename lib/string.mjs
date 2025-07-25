import * as r from 'ramda'

export const replace = r.curry((needle, replacement, haystack) =>
  r.isNil(haystack) ? haystack : r.replace(needle, replacement, haystack)
)
export const split = r.curry((separator, string) =>
  r.isNil(string) ? string : r.split(separator, string)
)

export const toLower = r.unless(r.isNil)(r.toLower)
export const toUpper = r.unless(r.isNil)(r.toUpper)
