const assert = require("assert")

describe('test de Text', function () {
  it('should do stg', function () {
    let a = 3
    assert.equal(a * 2,6)
    assert.equal(a,3, "N'a pas fonctionné")
  })
})