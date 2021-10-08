import { deepClone } from '@/index'

describe('deepClone - 深拷贝', () => {
  test('拷贝数组', () => {
    const source = [1,2,3]
    const target = deepClone(source)
    expect(source).toEqual(target)
    source[1] = 0
    expect(source).not.toEqual(target)
  })

  test('拷贝json对象', () => {
    const source = {
      name: 'Bob',
      others: {
        sex: 1
      }
    }
    const target = deepClone(source)
    expect(source).toEqual(target)
    source.name= 'Jim'
    source.others.sex = 0
    expect(source).not.toEqual(target)
  })
  test('其他', () => {
    const source = '123'
    const target = deepClone(source)
    expect(source).toEqual(target)
  })
})
