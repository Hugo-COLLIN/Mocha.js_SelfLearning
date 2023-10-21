// Tests libs
const chai = require('chai')
const expect = chai.expect;
const sinon = require('sinon')

const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)


//To test
const Social = require('../lib/Social')

describe("Social", () => {
  it('should have reqres_url', () => {
    expect(Social).has.property("reqres_url")
  });

  it('should have facebook_url', () => {
    expect(Social).has.property("facebook_url")
  });

  describe('#getReqresCount', () =>
  {
    it('should be a function', () => {
      expect(Social.getReqresCount).a('function')
    });

    it('should call callAPI', () => {
      sinon.spy(Social, "callAPI")
      Social.getReqresCount()
      expect(Social.callAPI.withArgs(Social.reqres_url).calledOnce).true
      Social.callAPI.restore(); //Avoid conflicts between tests (e.g. stubs)
    })

    it('should return count', (done) => {
      const stub = sinon.stub(Social, 'callAPI')
      // replace API by cutting function call to give the expected value
      // stub.returns(new Promise((resolve, reject) => {
      //   resolve({total:12})
      // }))
      stub.resolves({total:12})

      // Social.getReqresCount().then((count) => {
      //   expect(count).equal(12)
      //   done()
      // })
      expect(Social.getReqresCount()).eventually.equal(12).notify(done); // replace above by using chai-as-promised
    });
  });
})