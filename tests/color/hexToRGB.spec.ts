import { hexToRGB } from '@/index'

describe('hexToRGB - hex转rgb', () => {
  test('#00aaff', () => {
    expect(hexToRGB('#00aaff')).toBe('rgb(0, 170, 255)')
  })

  test('00aaff', () => {
    expect(hexToRGB('00aaff')).toBe('rgb(0, 170, 255)')
  })
})
