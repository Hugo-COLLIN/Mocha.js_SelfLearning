assert = require("assert")

describe 'test de Text2', ->
  it 'should do stg2', ->
    a = 3
    assert.equal a * 2,6
    assert.equal a,3, "N'a pas fonctionné"