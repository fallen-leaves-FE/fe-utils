import { RegCollections } from '@/index'

describe('常用正则表达式判断函数', () => {
  test('是否为url', () => {
    const str = 'https://www.baidu.com?id=123'
    expect(RegCollections.isUrlReg.test(str)).toBe(true)
    expect(RegCollections.isUrl(str)).toBe(true)
  })

  test('是否为邮箱', () => {
    const str = 'fallen@163.com'
    expect(RegCollections.isEmailReg.test(str)).toBe(true)
    expect(RegCollections.isEmail(str)).toBe(true)
  })

  test('是否为手机号', () => {
    const str = '18310915333'
    expect(RegCollections.isPhoneNumberReg.test(str)).toBe(true)
    expect(RegCollections.isPhoneNumber(str)).toBe(true)
  })

  test('是否为身份证号', () => {
    const str = '610302194910011314'
    expect(RegCollections.isIDCardReg.test(str)).toBe(true)
    expect(RegCollections.isIDCard(str)).toBe(true)
  })

  test('是否为邮政编码', () => {
    const str = '721006'
    expect(RegCollections.isZipCodeReg.test(str)).toBe(true)
    expect(RegCollections.isZipCode(str)).toBe(true)
  })
})
