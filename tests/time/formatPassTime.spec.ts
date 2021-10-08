import { formatPassTime } from '@/index'

describe('formatPassTime - 距离指定时间点过去的时间格式化', () => {
  test('刚刚', () => {
    const target = new Date('2021/10/08 12:00:00')
    const now = new Date('2021/10/08 12:00:30')
    expect(formatPassTime(target, now)).toBe('刚刚')
  })
  test('n分钟前', () => {
    const target = new Date('2021/10/08 12:00:00')
    const now = new Date('2021/10/08 12:02:30')
    expect(formatPassTime(target, now)).toBe('2分钟前')
  })
  test('n小时前', () => {
    const target = new Date('2021/10/08 12:00:00')
    const now = new Date('2021/10/08 14:00:30')
    expect(formatPassTime(target, now)).toBe('2小时前')
  })
  test('日期格式化-未跨年', () => {
    const target = new Date('2021/10/08 12:00:00')
    const now = new Date('2021/10/09 14:00:30')
    expect(formatPassTime(target, now)).toBe('10-08')
  })
  test('日期格式化-跨年', () => {
    const target = new Date('2021/10/08 12:00:00')
    const now = new Date('2022/10/09 14:00:30')
    expect(formatPassTime(target, now)).toBe('2021-10-08')
  })
})
