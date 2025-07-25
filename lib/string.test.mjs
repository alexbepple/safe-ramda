import * as r from 'ramda'
import { describe, it } from '@std/testing/bdd'
import __ from 'hamjest'
import { replace, split, toLower, toUpper } from './index.mjs'
import { nil } from './hamjest.test.mjs'

describe('#replace', () => {
  it('is nil-safe', () => {
    const replaceIt = replace('foo', 'bar')
    __.assertThat(replaceIt(null), __.is(null))
  })
})

describe('#split', () => {
  it('is nil-safe', () => {
    __.assertThat(split('x')(null), __.is(nil()))
  })
})

describe('#toLower', () => {
  it('works like r.toLower', () => {
    __.assertThat(toLower('FOO'), __.is(r.toLower('FOO')))
  })
  it('is nil-safe', () => {
    __.assertThat(toLower(null), __.is(null))
    __.assertThat(toLower(undefined), __.is(undefined))
  })
})
describe('#toUpper', () => {
  it('works like r.toUpper', () => {
    __.assertThat(toUpper('FOO'), __.is(r.toUpper('FOO')))
  })
  it('is nil-safe', () => {
    __.assertThat(toUpper(null), __.is(null))
    __.assertThat(toUpper(undefined), __.is(undefined))
  })
})
