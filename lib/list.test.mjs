import { describe, it } from '@std/testing/bdd'
import { find, head, map, nth } from './index.mjs'
import * as r from 'ramda'
import __ from 'hamjest'

describe('#find', () => {
  it('is nil-safe', () => {
    __.assertThat(find(r.T)(null), __.is(undefined))
  })
})

describe('#head', () => {
  const list = ['foo']
  it('works like r.head', () => {
    __.assertThat(head(list), __.is(r.head(list)))
  })
  it('is nil-safe', () => {
    // arguments for nil as return value:
    // 1) intuition: a bit of nothing is nothing
    // 2) Sanctuary: S.head (S.Nothing) => S.Nothing. So, if nil is like S.Nothing, nil makes sense, too.
    __.assertThat(head(undefined), __.is(undefined))
    __.assertThat(head(null), __.is(null))
  })
})

describe('#nth', () => {
  const list = ['foo']
  it('works like r.nth', () => {
    __.assertThat(nth(0, list), __.is(r.nth(0, list)))
  })
  it('is nil-safe', () => {
    // arguments for nil as return value: cp. `head`
    __.assertThat(nth(0, undefined), __.is(undefined))
    __.assertThat(nth(0, null), __.is(null))
  })
  it('is curried', () => {
    __.assertThat(nth(0)(list), __.is(nth(0, list)))
  })
})

describe('#map', () => {
  const fn = r.inc
  const list = ['foo', 'bar']

  it('works like r.map', () => {
    __.assertThat(map(fn, list), __.is(r.map(fn, list)))
  })
  it('is nil-safe', () => {
    // Arguments for nil as return value:
    // 1) `map` is considered a structure-preserving fn. What is the structure of nil? Nil?
    // 2) Sanctuary: S.map (S.toUpper) (S.Nothing) => S.Nothing. So, if nil is like S.Nothing, nil makes sense, too.
    __.assertThat(map(fn, undefined), __.is(undefined))
    __.assertThat(map(fn, null), __.is(null))
  })
  it('is curried', () => {
    __.assertThat(map(fn)(list), __.is(map(fn, list)))
  })
})
