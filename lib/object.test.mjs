import { describe, it } from '@std/testing/bdd'
import { pick } from './index.mjs'
import * as r from 'ramda'
import __ from 'hamjest'

describe('#pick', () => {
  const props = ['foo', 'bar']
  const obj = { foo: 42, bar: null, baz: null }
  it('works like r.pick', () => {
    __.assertThat(pick(props, obj), __.is(r.pick(props, obj)))
  })
  it('is nil-safe', () => {
    // the docs say `pick` return an object; empty object seems like a good choice
    __.assertThat(pick(props, null), __.is({}))
  })
  it('is curried', () => {
    __.assertThat(pick(props)(obj), __.is(pick(props, obj)))
  })
})
