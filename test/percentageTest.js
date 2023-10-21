const assert = require('assert')
let Percentage = require("../lib/Percentage")

describe("Percentage", function () {
  describe("#evolution", function ()
  {
    before(() => {

    })

    after(() => {

    })

    beforeEach(() => {
      // Percentage = null; //break all tests
    })

    afterEach(() => {

    })

    it("should give an evolution intervalle", function () {
      assert.equal(Percentage.evolution(100,200), 100)
      assert.equal(Percentage.evolution(100,150), 50)
      assert.equal(Percentage.evolution(100,50), -50)
    })

    it('should handle 0 evolution', () => {
      assert.equal(Percentage.evolution(0,10), Infinity)
    });
    // it.only('should handle 0 evolution', () => {
    //   assert.equal(Percentage.evolution(0,10), Infinity)
    // });

    it.skip('should round values', () => {
      assert.equal(Percentage.evolution(30, 100), 233.33)
    });

    //pending test
    it('should draw unicorns');
  })

  describe("#wait", () => {
    it('should exist', () => {
      assert.notEqual(Percentage.wait, undefined)
    });

    it('should wait 300ms', () => {
      Percentage.wait(50, (test) => {
        assert.equal(test, 18)
        // done() //not working
      })
    });
  })
})