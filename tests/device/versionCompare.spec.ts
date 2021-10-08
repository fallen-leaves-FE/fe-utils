import { versionCompare } from '@/index'

describe('versionCompare - 版本号比较', () => {
  test('"29.0.1" < "30.0.1"', () => {
    expect(versionCompare('29.0.1', '30.0.1')).toBe(-1)
  })
  test('"29.0.1" == "29.0.1"', () => {
    expect(versionCompare('29.0.1', '29.0.1')).toBe(0)
  })
  test('"30.0.1" > "29.0.1"', () => {
    expect(versionCompare('30.0.1', '29.0.1')).toBe(1)
  })
})
