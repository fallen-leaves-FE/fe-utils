/**
 * @description 格式化 queryString 为对象
 * @param queryString query字符串 例如：?name=Bob&age=24 或者 name=Bob&age=24
 * @returns 返回值 例如：{ name: 'Bob', age: '24' }
 */
const parseQuery = (queryString: string): Record<string, string | string> => {
  if (!queryString || typeof queryString !== 'string') {
    return {}
  }
  const str = queryString.startsWith('?') ? queryString.slice(1) : queryString
  const jsonMaps: Record<string, string | string> = {}
  str.split('&').forEach(keyValue => {
    const [key, value] = keyValue.split('=')
    jsonMaps[key] = decodeURIComponent(value)
  })
  return jsonMaps
}

export default parseQuery
