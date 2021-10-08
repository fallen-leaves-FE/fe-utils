import { deleteUrlParams } from "@/index"

describe('deleteUrlParams - 删除url中指定的query参数', () => {
	const source = 'https://examples.com/base/path?name=Bob&age=24&sex=0'

	test('删除单个测试', () => {
		const url = deleteUrlParams(source, 'name')
		expect(url).toBe('https://examples.com/base/path?age=24&sex=0')
	})

	test('删除多个测试', () => {
		const url = deleteUrlParams(source, ['name', 'age'])
		expect(url).toBe('https://examples.com/base/path?sex=0')
	})

	test('删除多个测试后无剩余', () => {
		const url = deleteUrlParams(source, ['name', 'age', 'sex'])
		expect(url).toBe('https://examples.com/base/path')
	})
})
