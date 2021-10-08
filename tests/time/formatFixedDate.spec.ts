import { formatFixedDate } from '@/index'

describe('formatFixedDate - 时间对象格式化', () => {
  test('年份日期和时间', () => {
    const date = new Date('2021/10/08 08:00:00')
    const fmtDate = formatFixedDate(date, 'yyyy-MM-dd HH:mm:ss')
    expect(fmtDate).toBe('2021-10-08 08:00:00')
  })

  test('年份日期', () => {
    const date = new Date('2021/10/08 08:00:00')
    const fmtDate = formatFixedDate(date, 'yyyy/MM/dd')
    expect(fmtDate).toBe('2021/10/08')
  })

  test('时间', () => {
    const date = new Date('2021/10/08 08:00:00')
    const fmtDate = formatFixedDate(date, 'HH:mm:ss')
    expect(fmtDate).toBe('08:00:00')
  })
})
