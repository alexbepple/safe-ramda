import { describe, it } from '@std/testing/bdd'
import __ from 'hamjest'
import { replace, split } from './index.mjs'
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
