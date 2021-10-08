/**
 * @description 获取系统类型
 * @returns 系统标识 'ios' | 'Android' | 'WindowsPhone' | 'MacOS' | 'Windows' | 'Linux' | 'Unkonwn'
 */
const getOS = (): OSType => {
  const userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || ''
  const appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || ''

  let os: OSType = 'Unkonwn'
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) {
    os = 'ios'
  } else if (/android/i.test(userAgent)) {
    os = 'Android'
  } else if (/win/i.test(appVersion) && /phone/i.test(userAgent)) {
    os = 'WindowsPhone'
  } else if (/macintosh/i.test(userAgent)) {
    os = 'MacOS'
  } else if (/windows/i.test(userAgent)) {
    os = 'Windows'
  } else if (/linux/i.test(userAgent)) {
    os = 'Linux'
  }
  return os
}

export default getOS
