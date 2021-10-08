import parseQuery from './parseQuery'
import stringifyQuery from './stringifyQuery'
/**
 * @description 删除url中指定名称的query参数
 * @param url 目标url
 * @param keys 要删除的query参数，例如：deleteUrlParams('name') 或者 deleteUrlParams(['name', 'age'])
 * @returns 返回删除目标query参数后的字符串
 */
const deleteUrlParams = (url: string = window.location.href, keys: string[] | string = []): string => {
  const [hostAndPath, queryString = ''] = url.split('?')
  const queryObj = parseQuery(queryString)

  if (typeof keys === 'string') {
    Reflect.deleteProperty(queryObj, keys)
  } else if (Array.isArray(keys)) {
    keys.forEach((key: string) => {
      Reflect.deleteProperty(queryObj, key)
    })
  } else {
    return url
  }

  return `${hostAndPath}${stringifyQuery(queryObj) ? '?' + stringifyQuery(queryObj) : ''}`
}

export default deleteUrlParams
