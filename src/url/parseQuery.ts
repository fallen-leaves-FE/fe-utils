/**
 * @description 格式化 queryString 为对象
 * @param queryString query字符串 例如：?name=Bob&age=24 或者 name=Bob&age=24
 * @returns 返回值 例如：{ name: 'Bob', age: '24' }
 */
const parseQuery = (queryString: string): ObjectTypes<string | string[]> => {
  if (!queryString || typeof queryString !== 'string') {
    return {}
  }
  const str = queryString.startsWith('?') ? queryString.slice(1) : queryString
  const jsonMaps: ObjectTypes<string | string[]> = {}
  str.split('&').forEach(keyValue => {
    const [key, value] = keyValue.split('=')
    if (typeof jsonMaps[key] === 'undefined') {
      jsonMaps[key] = decodeURIComponent(value)
    } else { // 重名参数存放在数组中
      if (typeof jsonMaps[key] === 'string') {
        jsonMaps[key] = [<string>jsonMaps[key], decodeURIComponent(value)]
      } else {
        (<string[]>jsonMaps[key]).push(decodeURIComponent(value))
      }
    }
  })
  return jsonMaps
}

export default parseQuery
