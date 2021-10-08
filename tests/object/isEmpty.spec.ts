import { isEmpty } from '@/index'

describe('判断对象是否为空', () => {
  test('空数组', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1])).toBe(false)
  })

  test('空json', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ name: '' })).toBe(false)
  })

  test('其他对象', () => {
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
  })
})
