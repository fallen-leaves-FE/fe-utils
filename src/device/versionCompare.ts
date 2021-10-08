/**
 * @description 版本号比较大小
 * @param version1 版本号1
 * @param version2 版本号2
 * @returns 比较的结果 -1 | 0 | 1 分别标识小于|等于|大于
 */
const versionCompare = (version1: string | number, version2: string | number): number | undefined => {
  const v1 = version1.toString()
  const v2 = version2.toString()
  const GTR = 1 // 大于
  const LSS = -1 // 小于
  const EQU = 0 // 等于
  const v1arr = String(v1).split('.').map(function (a) {
    return parseInt(a)
  })
  const v2arr = String(v2).split('.').map(function (a) {
    return parseInt(a)
  })
  const arrLen = Math.max(v1arr.length, v2arr.length)
  let result

  // 排除错误调用
  if (v1 == undefined || v2 == undefined) {
    throw new Error()
  }

  // 检查空字符串，任何非空字符串都大于空字符串
  if (v1.length == 0 && v2.length == 0) {
    return EQU
  } else if (v1.length == 0) {
    return LSS
  } else if (v2.length == 0) {
    return GTR
  }

  // 循环比较版本号
  for (let i = 0; i < arrLen; i++) {
    result = getResult(v1arr[i], v2arr[i])
    if (result == EQU) {
      continue
    } else {
      break
    }
  }
  return result

  function getResult (n1: number, n2: number) {
    if (typeof n1 != 'number') {
      n1 = 0
    }
    if (typeof n2 != 'number') {
      n2 = 0
    }
    if (n1 > n2) {
      return GTR
    } else if (n1 < n2) {
      return LSS
    } else {
      return EQU
    }
  }
}

export default versionCompare
