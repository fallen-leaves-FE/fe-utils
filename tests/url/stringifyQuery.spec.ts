import { stringifyQuery } from "@/index"

describe('stringifyQuery - 对象转成query字符串', () => {
	test('英文测试', () => {
		const str = stringifyQuery({
			name: 'Bob',
			age: '24'
		})
		expect(str).toBe('name=Bob&age=24')
	})

	test('中文测试', () => {
		const str = stringifyQuery({
			name: '张三',
			age: '24'
		})
		expect(str).toBe('name=%E5%BC%A0%E4%B8%89&age=24')
	})
})
