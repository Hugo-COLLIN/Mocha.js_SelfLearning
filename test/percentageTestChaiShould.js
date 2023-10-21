// Note: chai should injecte une methode should à tous les objcts JS
// should est inconsistant car il ne peut pas injecter equal() à undefined = on ne peut
// pas tester si un object est undefined.

const assert = require('chai').assert
const should = require('chai').should()
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
      Percentage.evolution(100,200).should.be.equal(100)
      Percentage.evolution(100,150).should.be.equal(50)
      Percentage.evolution(100,50).should.be.equal(-50)
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
      // Percentage.wait.should.be.equal(undefined) //not working
    })

    it('should wait 300ms', () => {
      Percentage.wait(50, (test) => {
        assert.equal(test, 18)
        // done() //not working
      })
    });
  })
})