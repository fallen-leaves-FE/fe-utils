import { digitUppercase } from "@/index"

describe('digitUppercase - 数字转大写', () => {
  test('1234 -> 壹仟贰佰叁拾肆元整', () => {
    const str = digitUppercase(1234)

    expect(str).toBe('壹仟贰佰叁拾肆元整')
  })
})
