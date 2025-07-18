import { describe, it } from '@std/testing/bdd'
import __ from 'hamjest'

export const assertTrue = (_) => __.assertThat(_, __.is(true))
export const assertFalse = (_) => __.assertThat(_, __.is(false))

export const nil = () => ({
  matches: (actual) => [null, undefined].includes(actual),
  describeTo: (description) => description.append('a nil value'),
  describeMismatch: (actual, description) =>
    description.appendValue(actual).append(' is not nil'),
})

describe('#nil', () => {
  it('matches nil values', () => {
    __.assertThat(nil(), __.matches(null))
    __.assertThat(nil(), __.matches(undefined))
  })
  it('does not match non-nil values', () => {
    __.assertThat(nil(), __.not(__.matches(0)))
    __.assertThat(nil(), __.not(__.matches(Number.NaN)))
  })
})
