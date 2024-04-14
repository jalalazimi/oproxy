import { describe, expect, it } from 'vitest'
import oproxy, { array } from '../src'

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
  phones: [],
  ages: [1, 30, 39, 29, 10, 13],
  cities: ['Dublin', 'London', undefined, 'New York', false],
}

describe('oproxy', () => {
  it('array of Object', () => {
    const schema = {
      list: array('users'),
    }
    expect(oproxy(src, schema)).toEqual({
      list: ['foo', 'bar', 'baz', 'qux'],
    })
  })
  it('default value', () => {
    const schema = {
      phones: array('phones').defaultValue('UNSET'),
    }
    expect(oproxy(src, schema)).toEqual({
      phones: 'UNSET',
    })
  })

  it('chunk', () => {
    const schema = {
      users: array('users').chunk(2),
    }
    expect(oproxy(src, schema)).toEqual({
      users: [
        ['foo', 'bar'],
        ['baz', 'qux'],
      ],
    })
  })

  it('compact', () => {
    const schema = {
      cities: array('cities').compact(),
    }
    expect(oproxy(src, schema)).toEqual({
      cities: ['Dublin', 'London', 'New York'],
    })
  })

  it('drop', () => {
    const schema = {
      users: array('users').drop(2),
    }
    expect(oproxy(src, schema)).toEqual({
      users: ['baz', 'qux'],
    })
  })

  it('filter', () => {
    const schema = {
      users: array('users').filter(item => item !== 'bar'),
    }
    expect(oproxy(src, schema)).toEqual({
      users: ['foo', 'baz', 'qux'],
    })
  })
})
