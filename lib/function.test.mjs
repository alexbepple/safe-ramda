import { describe, it } from '@std/testing/bdd'
import { apply } from './index.mjs'
import * as r from 'ramda'
import __ from 'hamjest'

describe('#apply', () => {
  const fn = r.identity
  const args = ['foo', 'bar']

  it('normally works like r.apply', () => {
    __.assertThat(apply(fn, args), __.is(r.apply(fn, args)))
  })
  it('is curried', () => {
    __.assertThat(apply(fn)(args), __.is(apply(fn, args)))
  })

  describe('abnormal function', () => {
    it('returns `undefined`, if function nil', () => {
      __.assertThat(apply(null, []), __.is(undefined))
    })
  })
})
