import { SetCookieOpt } from '../../types/index.d'
/**
 * @name setCookie
 * @description 设置cookie
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Object} opt 配置参数
 * @returns {void} 返回值
 */

const setCookie = (
  name: string,
  value: string,
  {
    expirse,
    domain,
    path
  }: SetCookieOpt = {}
): void => {
  let stringifiedAttributes = ''
  // 过期时间
  if (typeof expirse === 'number' && !Object.is(expirse, NaN)) {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + expirse)
    stringifiedAttributes += ';expires=' + endDate.toString()
  }
  // path
  path = path || '/'
  stringifiedAttributes += ';path=' + path
  // domain
  if (domain) {
    stringifiedAttributes += ';domain=' + path
  }
  // 设置cookie
  document.cookie = `${name}=${value}${stringifiedAttributes}`
}

export default setCookie
