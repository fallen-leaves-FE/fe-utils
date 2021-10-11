interface ObjectTypes <T = any> {
	[propsName: string]: T
}

/**
 * @description 获取url中的query参数
 * @param url 目标地址，默认：当前地址栏url
 * @param name 要获取的参数名称, 非必传
 * @returns 返回值，如果name不为空则返回name的值，否则返回一个包含所有参数键值对的对象
 */
export declare const getUrlParams: (url: string = window.location.href, name?: string) => string | ObjectTypes<string>

/**
 * @description 格式化 queryString 为对象
 * @param queryString query字符串 例如：?name=Bob&age=24 或者 name=Bob&age=24
 * @returns 返回值 例如：{ name: 'Bob', age: '24' }
 */
export declare const parseQuery: (queryString: string) => ObjectTypes<string>

/**
 * @description 格式化对象为queryString
 * @param query query对象 例如：{ name: 'Bob', age: 24 }
 * @returns queryString 例如：'name=Bob&age=24'
 */
export declare const stringifyQuery: (query: ObjectTypes = {}, needEncodeURIComponent = true) => string

/**
 * @description 删除url中指定名称的query参数
 * @param url 目标url
 * @param keys 要删除的query参数，例如：deleteUrlParams('name') 或者 deleteUrlParams(['name', 'age'])
 * @returns 返回删除目标query参数后的字符串
 */
export declare const deleteUrlParams: (url: string = window.location.href, keys: string[] | string = []) => string

/**
 * @description 时间格式化函数
 * @param date 时间对象或者时间戳
 * @param fmt 格式化模板 例如：'yyyy-MM-dd HH:mm:ss'
 * @returns 时间格式化字符串 '2021-10-01 08:00:00'
 */
export declare const formatFixedDate: (date: Date | number, fmt: string) => string

/**
 * @description 格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 时间对象或者时间戳
 * @returns {String} 例如 '刚刚'，'3分钟前'，'1小时前'
 */
export declare const formatPassTime: (startTime: Date | number = new Date()) => string

/**
 * @description 字符串中的url替换为<a>标签
 * @param url 目标字符串
 * @param className <a>标签的class名称
 * @returns {String} 替换后的html字符串
 */
export declare const urlToLink: (url: string, className = '') => string

/**
 * @description 深拷贝
 * @param source 要拷贝的对象
 * @returns 返回值
 */
export declare const deepClone: (source: any) => any

/**
 * @description 判断空对象
 * @param source 目标对象
 * @returns {Boolean}
 */
export declare const isEmpty: (source: any) => boolean

/**
 * @description 小写数字转大写金额
 * @param num 金额数字 例如：1000
 * @returns 转换后的大写金额 例如：壹仟
 */
export declare const digitUppercase: (num: number) => string

/**
 * @description 数字转千分位
 * @param {Number} num 被转换的数字
 * @param {Number} fixed 浮点数精度
 * @returns {String} 返回值
 */
export declare const fixedThousandsNumber: (num: number | string, fixed = 0) => string

/**
 * @description 格式化文件大小
 * @param size 文件大小
 * @returns 返回 10KB, 10MB, 10GB
 */
export declare const formatFileFize: (size: number) => string

/**
 * @description 函数防抖
 * @param fn 要防抖的方法
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export declare function debounce (fn: Function, wait: number, immediate = false): Function

/**
 * @description 节流函数
 * @param fn 要节流的方法
 * @param wait 节流间隔时间(毫秒)
 */
export declare function throttle (fn: Function, wait: number): Function

type ExploreName = 'IE' | 'Edge' | 'Firefox' | 'Chrome' | 'Opera' | 'Safari' | 'Unkonwn'
interface ExploreProps {
  platform: ExploreName
  version: string
}
/**
 * @description 获取浏览器平台及版本
 * @returns {Object} 返回浏览器平台和版本
 */
export declare const getExplore: () => ExploreProps

type OSType = 'ios' | 'Android' | 'WindowsPhone' | 'MacOS' | 'Windows' | 'Linux' | 'Unkonwn'
/**
 * @description 获取系统类型
 * @returns 系统标识 'ios' | 'Android' | 'WindowsPhone' | 'MacOS' | 'Windows' | 'Linux' | 'Unkonwn'
 */
export declare const getOS: () => OSType

/**
 * @name getCookie
 * @description 获取cookie
 * @param {String} name cookie名称
 * @returns {Object|String} 返回值name的cookie值，若name为空则返回所有cookie
 */
export declare const getCookie: (name?: string) => ObjectTypes<string> | string

interface SetCookieOpt {
	// 过期时间
	expirse?: number
	// 二级域名
	domain?: string
	// 存储路径
	path?: string
}
/**
 * @name setCookie
 * @description 设置cookie
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Object} opt 配置参数
 * @returns {void} 返回值
 */

export declare const setCookie: (
  name: string,
  value: string,
  {
    expirse,
    domain,
    path
  }:SetCookieOpt = {}
) => void

/**
 * @description 删除cookie
 * @param name cookie名称
 * @returns 返回值
 */
export declare const removeCookie: (name: string) => void

/**
 * @description 版本号比较大小
 * @param version1 版本号1
 * @param version2 版本号2
 * @returns 比较的结果 -1 | 0 | 1 分别标识小于|等于|大于
 */
export declare const versionCompare: (version1: string | number, version2: string | number) => number | undefined

interface RegexpCollection {
  readonly ua: string
  readonly isUrlReg: RegExp
  readonly isPhoneNumberReg: RegExp
  readonly isEmailReg: RegExp
  readonly isIDCardReg: RegExp
  readonly isZipCodeReg: RegExp
  readonly isIEReg: RegExp
  readonly isChromeReg: RegExp
  readonly isFirefoxReg: RegExp
  readonly isOperaReg: RegExp
  readonly isSafariReg: RegExp
  readonly isEdgeReg: RegExp
  readonly isAndroidReg: RegExp
  readonly isIPhoneReg: RegExp
  readonly isIPadReg: RegExp
  readonly isMacOSReg: RegExp
  readonly isWindowsReg: RegExp
  readonly isLinuxReg: RegExp
  readonly isWeChatReg: RegExp
  /**
   * @description 判断字符串是否为url
   * @param url 目标字符串
   * @returns 是否为url
   */
  isUrl (url: string): boolean
  /**
   * @description 判断是否为手机号
   * @param phone 目标字符串
   * @returns 是否为手机号
   */
  isPhoneNumber (phone: string): boolean
  /**
   * @description 判断是否为邮箱地址
   * @param email 目标字符串
   * @returns 是否为邮箱地址
   */
  isEmail (email: string): boolean
  /**
   * @description 判断是否为身份证号码
   * @param num 目标字符串
   * @returns 是否为身份证号
   */
  isIDCard (idCardNum: string): boolean
  /**
   * @description 判断是否为邮政编码
   * @param zipCode 目标字符串
   * @returns 是否为邮政编码
   */
  isZipCode (zipCode: string): boolean
  /**
   * @description 判断是否为IE浏览器
   * @returns {Boolean}
   */
  isIE (): boolean

  /**
   * @description 判断是否为Chrome浏览器
   * @returns {Boolean}
   */
  isChrome (): boolean
  /**
   * @description 判断是否为Firefox浏览器
   * @returns {Boolean}
   */
  isFirefox (): boolean
  /**
   * @description 判断是否为Opera浏览器
   * @returns {Boolean}
   */
  isOpera (): boolean
  /**
   * @description 判断是否为Safari浏览器
   * @returns {Boolean}
   */
  isSafari (): boolean
  /**
   * @description 判断是否为Edge浏览器
   * @returns {Boolean}
   */
  isEdge (): boolean
  /**
   * @description 判断是否为Android
   * @returns {Boolean}
   */
  isAndroid (): boolean
  /**
   * @description 判断是否为iPhone
   * @returns {Boolean}
   */
  isIPhone (): boolean
  /**
   * @description 判断是否为iPad
   * @returns {Boolean}
   */
  isIPad (): boolean
  /**
   * @description 判断是否为MacOS
   * @returns {Boolean}
   */
  isMacOS (): boolean
  /**
   * @description 判断是否为windows
   * @returns {Boolean}
   */
  isWindows (): boolean
  /**
   * @description 判断是否为Linux
   * @returns {Boolean}
   */
  isLinux (): boolean
  /**
   * @description 判断是否为微信环境
   * @returns {Boolean}
   */
  isWeChat (): boolean
}

export declare const RegCollection: RegexpCollection
