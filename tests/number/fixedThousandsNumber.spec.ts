import { fixedThousandsNumber } from '@/index'

describe('fixedThousandsNumber - 千分位转换方法测试', () => {
	test('整数测试', () => {
		const numStr = fixedThousandsNumber(100000)
		expect(numStr).toBe('100,000')
	})

	test('浮点数测试', () => {
		const numStr = fixedThousandsNumber(100000.886, 2)
		expect(numStr).toBe('100,000.89')
	})

	test('非数字类型检查', () => {
		const numStr = fixedThousandsNumber('数字', 2)
		expect(numStr).toBe('')
	})

	test('小于1000数字测试', () => {
		const numStr = fixedThousandsNumber(500, 2)
		expect(numStr).toBe('500.00')
	})
})
