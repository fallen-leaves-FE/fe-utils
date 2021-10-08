import { RegCollection } from '@/index'

describe('常用正则表达式判断函数', () => {
  test('是否为url', () => {
    const str = 'https://www.baidu.com?id=123'
    expect(RegCollection.isUrlReg.test(str)).toBe(true)
    expect(RegCollection.isUrl(str)).toBe(true)
  })

  test('是否为邮箱', () => {
    const str = 'fallen@163.com'
    expect(RegCollection.isEmailReg.test(str)).toBe(true)
    expect(RegCollection.isEmail(str)).toBe(true)
  })

  test('是否为手机号', () => {
    const str = '18310915333'
    expect(RegCollection.isPhoneNumberReg.test(str)).toBe(true)
    expect(RegCollection.isPhoneNumber(str)).toBe(true)
  })

  test('是否为身份证号', () => {
    const str = '610302194910011314'
    expect(RegCollection.isIDCardReg.test(str)).toBe(true)
    expect(RegCollection.isIDCard(str)).toBe(true)
  })

  test('是否为邮政编码', () => {
    const str = '721006'
    expect(RegCollection.isZipCodeReg.test(str)).toBe(true)
    expect(RegCollection.isZipCode(str)).toBe(true)
  })
})
