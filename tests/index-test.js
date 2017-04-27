// import expect from 'expect'
import assert from 'assert'

import Hsearch from 'src/index'
describe('本地测试', () => {
  it('输入内容', () => {
    assert.equal('10',Hsearch('m','m=10'))
  })
})
