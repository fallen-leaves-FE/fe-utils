/**
 * @name getCookie
 * @description 获取cookie
 * @param {String} name cookie名称
 * @returns {Object|String} 返回值name的cookie值，若name为空则返回所有cookie
 */
const getCookie = (name?: string): ObjectTypes<string> | string =>  {
  const keyValueList: string[] = document.cookie.split('; ')
  const json: ObjectTypes<string> = {}

  keyValueList.forEach(item => {
    const [key, value] = item.split('=')
    json[key] = value
  })
  if (name) {
    return json[name]
  }
  return json
}

export default getCookie
