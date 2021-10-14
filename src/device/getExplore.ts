import { ExploreProps, ExploreName } from './../../types/index.d'

/**
 * @description 获取浏览器平台及版本
 * @returns {Object} 返回浏览器平台和版本
 */
const getExplore = (): ExploreProps => {
  let platform: ExploreName = 'Unkonwn'
  let version = '0'
  const ua = navigator.userAgent.toLowerCase()

  const ieReg = /msie ([\d.]+)/
  const edgeReg = /edge\/([\d.]+)/
  const firefoxReg = /firefox\/([\d.]+)/
  const operaReg = /(?:opera|opr).([\d.]+)/
  const chromeReg = /chrome\/([\d.]+)/
  const safariReg = /version\/([\d.]+).*safari/

  if (ieReg.test(ua)) {
    platform = 'IE'
    version = (<string[]>ua.match(ieReg))[1]
  } else if (edgeReg.test(ua)) {
    platform = 'Edge'
    version = (<string[]>ua.match(edgeReg))[1]
  } else if (firefoxReg.test(ua)) {
    platform = 'Firefox'
    version = (<string[]>ua.match(firefoxReg))[1]
  } else if (operaReg.test(ua)) {
    platform = 'Opera'
    version = (<string[]>ua.match(operaReg))[1]
  } else if (chromeReg.test(ua)) {
    platform = 'Chrome'
    version = (<string[]>ua.match(chromeReg))[1]
  } else if (safariReg.test(ua)) {
    platform = 'Safari'
    version = (<string[]>ua.match(safariReg))[1]
  }

  return {
    platform,
    version
  }
}

export default getExplore
