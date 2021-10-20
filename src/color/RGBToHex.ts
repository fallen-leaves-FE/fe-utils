/**
 * @description rgb转hex
 * @param args rgb格式的color，RGBToHex(0, 170, 255) 或者 RGBToHex('rgb(0, 170, 255)')
 * @returns hex格式的color字符串，'#00aaff'
 */
const RGBToHex = (...args: Array<string | number>) => {
  let r: number,
    g: number,
    b: number
  if (args.length === 3) { // 调用形式为 RGBToHex(r, g, b)
    [r, g, b] = args.map(el => parseInt(el as string))
  } else if (args.length === 1 && typeof args[0] === 'string') { // 调用形式为 RGBToHex('rgb(r, g, b)')
    const arr = args[0].replace(/[rgb\(\)\s]/ig, '').split(',').filter(el => (/[0-9]/g).test(el))
    if (arr.length === 3) {
      [r, g, b] = arr.map(el => parseInt(el as string))
    } else {
      return ''
    }
  } else {
    return ''
  }
  return `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`
}

export default RGBToHex
