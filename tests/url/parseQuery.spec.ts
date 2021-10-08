import { parseQuery } from '@/index'

describe('parseQuery - 格式化queryString为对象', () => {
	test('英文测试', () => {
		const obj = parseQuery('?name=Bob&age=24')
		expect(obj).toEqual({
			name: 'Bob',
			age: '24'
		})
	})

	test('中文测试', () => {
		const obj = parseQuery('?name=%E5%BC%A0%E4%B8%89&age=24')
		expect(obj).toEqual({
			name: '张三',
			age: '24'
		})
	})

	test('重名参数测试', () => {
		const obj = parseQuery('?name=Bob&age=24&name=Jim')
		expect(obj).toEqual({
			name: ['Bob', 'Jim'],
			age: '24'
		})
	})
})
