/**
 * @description 格式化对象为queryString
 * @param query query对象 例如：{ name: 'Bob', age: 24 }
 * @returns queryString 例如：'name=Bob&age=24'
 */
const stringifyQuery = (query: Record<string, string> = {}, needEncodeURIComponent = true): string => {
  if (!query || typeof query !== 'object' || Array.isArray(query)) {
    return ''
  }
  return Object.entries(query).map(([key, value]) => `${key}=${needEncodeURIComponent ? encodeURIComponent(value) : value}`).join('&')
}

export default stringifyQuery
