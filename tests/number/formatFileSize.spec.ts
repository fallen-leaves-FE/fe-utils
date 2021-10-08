import { formatFileFize }  from "@/index"

describe('formatFileFize - 文件大小格式化', () => {
  test('小于1KB', () => {
    const fileSize = formatFileFize(1023)
    expect(fileSize).toBe('1023B')
  })
  test('小于1MB', () => {
    const fileSize = formatFileFize(1023 * 1024)
    expect(fileSize).toBe('1023.00KB')
  })
  test('小于1GB', () => {
    const fileSize = formatFileFize(1023 * 1024 * 1024)
    expect(fileSize).toBe('1023.00MB')
  })
  test('大于1GB', () => {
    const fileSize = formatFileFize(100 * 1024 * 1024 * 1024)
    expect(fileSize).toBe('100.00GB')
  })
})
