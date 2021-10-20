import { RGBToHex } from '@/index'

describe('RGBToHex - rgb转hex', () => {

  test('RGBToHex(0, 170, 255)', () => {
    expect(RGBToHex(0, 170, 255)).toBe('#00aaff')
  })

  test('RGBToHex("rgb(0, 170, 255)")', () => {
    expect(RGBToHex('rgb(0, 170, 255)')).toBe('#00aaff')
  })
})
