import setCookie from './setCookie'

/**
 * @description 删除cookie
 * @param name cookie名称
 * @returns 返回值
 */

const removeCookie = (name: string):void => {
  if (!name) {
    return
  }
  setCookie(name, '', { expirse: -1 })
}

export default removeCookie
