/**
 * @description 字符串中的url替换为<a>标签
 * @param url 目标字符串
 * @param className <a>标签的class名称
 * @returns {String} 替换后的html字符串
 */
const urlToLink = (url: string, className = ''): string => {
  const reg = /((((https?|ftp?):(?:\/\/)?)(?:[-;:&=\+\$]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\?\+=&;:%!\/@.\w_]*)#?(?:[-\+=&;%!\?\/@.\w_]*))?)/ig

  return url.replace(reg, (href: string) => {
    return `<a href="${href}" class="${className}" target="_blank">${href}</a>`
  })
}

export default urlToLink
