import { urlToLink } from '@/index'

describe('urlToLink - 替换字符串中的url为<a>标签', () => {
  test('替换字符串中的url为<a>标签', () => {
    const nStr = urlToLink('这是文档地址：https://www.docs.com/path/to/target?id=1234 单击访问', 'link')

    expect(nStr).toBe('这是文档地址：<a href="https://www.docs.com/path/to/target?id=1234" class="link" target="_blank">https://www.docs.com/path/to/target?id=1234</a> 单击访问')
  })
})
