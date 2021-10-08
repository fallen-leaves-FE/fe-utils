# @fallen_leaves/fe-utils

前端通用工具库

> 优点：提高前端业务代码开发效率，增强代码复用性

前端开发过程中，会经常用到`判断浏览器类型`、`格式化各种日期`、`获取url参数`、`queryString转对象`、`防抖函数`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

## 安装
```bash
  npm install --save @fallen_leaves/fe-utils
  # or
  yarn add @fallen_leaves/fe-utils
```
## 使用
```bash
  # 完整导入
  import FeUtils from '@fallen_leaves/fe-utils'

  FeUtils.getCookie('user_id')
  # or

  # 模块导入
  import { getCookie } from '@fallen_leaves/fe-utils'

  getCookie('user_id')
```

## API文档

### Cookie
- [setCookie](src/cookie/setCookie.ts)&emsp; 添加cookie
- [getCookie](src/cookie/getCookie.ts)&emsp; 获取cookie
- [removeCookie](src/cookie/removeCookie.ts)&emsp; 删除cookie

### Device
- [getExplore](src/device/getExplore.ts)&emsp; 获取浏览器型号和版本
- [getOS](src/device/getOS.ts)&emsp; 获取操作系统类型
- [versionCompare](src/device/versionCompare.ts)&emsp; 版本号比较

### Function
- [debounce](src/function/debounce.ts)&emsp; 防抖函数
- [throttle](src/function/throttle.ts)&emsp; 节流函数

### Number
- [digitUppercase](src/number/digitUppercase.ts)&emsp; 数字转大写
- [fixedThousandsNumber](src/number/fixedThousandsNumber.ts)&emsp; 数字千分位格式化
- [formatFileSize](src/number/formatFileSize.ts)&emsp; 文件大小格式化

### Object
- [deepClone](src/object/deepClone.ts)&emsp; 深拷贝
- [isEmpty](src/object/isEmpty.ts)&emsp; 空对象判断

### Regexp
- [RegCollection](src/regexp/index.ts)&emsp; 常用正则判断函数
  - .isUrl(url)&emsp; 判段目标字符串是否为url
  - .isPhoneNumber(phoneNumber)&emsp; 判段目标字符串是否为手机号
  - .isEmail(email)&emsp; 判段目标字符串是否为邮箱
  - .isIDCard(IDCard)&emsp; 判段目标字符串是否为身份证号码
  - .isZipCode(zipCode)&emsp; 判段目标字符串是否为邮政编码
  - .isIE()&emsp; 判段是否为IE
  - .isChrome()&emsp; 判段是否为Chrome
  - .isFirefox()&emsp; 判段是否为Firefox
  - .isOpera()&emsp; 判段是否为Opera
  - .isSafari()&emsp; 判段是否为Safari
  - .isEdge()&emsp; 判段是否为Edge
  - .isAndroid()&emsp; 判段是否为Android
  - .isIPhone()&emsp;判段是否为iPhone
  - .isIPad()&emsp; 判段是否为iPad
  - .isMacOS()&emsp; 判段是否为MacOS
  - .isWindows()&emsp; 判段是否为Windows
  - .isLinux()&emsp; 判段是否为Linux
  - .isWeChat()&emsp; 判段是否为微信环境

### Time
- [formatFixedDate](src/time/formatFixedDate.ts)&emsp; 时间对象或者时间戳格式化
- [formatPassTime](src/time/formatPassTime.ts)&emsp; 距离指定时间已过去的时间格式化

### Url
- [getUrlParams](src/url/getUrlParams.ts)&emsp; 获取url上的query参数
- [deleteParams](src/url/deleteParams.ts)&emsp; 删除url上指定的query参数
- [parseQuery](src/url/parseQuery.ts)&emsp; querySrting格式化为对象
- [stringifyQuery](src/url/stringifyQuery.ts)&emsp; 对象格式化为queryString

### String
- [urlToLink](src/string/urlToLink.ts)&emsp; 目标字符串中的url串转换为&lt;a&gt;标签












