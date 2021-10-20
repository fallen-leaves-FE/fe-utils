/**
 * @description 16进制颜色转rgb格式
 * @param hex 16进制颜色字符串，例如：#00aaff, 00aaff
 * @returns 返回颜色值 例如：'rgb(0, 170, 255)'
 */
const hexToRGB = (hex: string) => {
  let alpha = false
  let h: string | number = hex.slice(hex.startsWith('#') ? 1 : 0)
  if (h.length === 3) {
    h = h.split('').map(x => x + x).join('')
  } else if (h.length === 8) {
    alpha = true
  }
  h = parseInt(h, 16)
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  )
}

export default  hexToRGB
