// Note: chai should injecte une methode should à tous les objcts JS
// should est inconsistant car il ne peut pas injecter equal() à undefined = on ne peut
// pas tester si un object est undefined.

const assert = require('chai').assert
const expect = require('chai').expect
let Percentage = require("../lib/Percentage")

describe("Percentage", function () {
  describe("#evolution", function ()
  {
    it("should give an evolution intervalle", function () {
      expect(Percentage.evolution(100,200)).be.equal(100, 'error cause')
      expect(Percentage.evolution(100,150)).be.equal(50)
      expect(Percentage.evolution(100,50)).be.equal(-50)
      expect(Percentage.evolution(100,50)).to.be.ok
      // expect(Percentage.evolution(100,50)).to.be.not.ok
    })

    it('should handle 0 evolution', () => {
      assert.equal(Percentage.evolution(0,10), Infinity)
    });
  })

  describe("#wait", () => {
    it('should exist', () => {
      // expect(Percentage.wait).be.equal(undefined)
      expect(Percentage.wait).to.be.a('function')
      expect(Percentage.wait).a('function')
    });


    it('should wait 300ms', () => {
      Percentage.wait(50, (test) => {
        expect(test).to.equal(18)
      })
    });
  })
})