// Tests libs
const expect = require('chai').expect
const sinon = require('sinon')

//To test
const Social = require('../lib/Social')

describe("Social", () => {
  const url = "https://hugocollin.com"

  it('should have twitter_url', () => {
    expect(Social).has.property("twitter_url")
  });

  it('should have facebook_url', () => {
    expect(Social).has.property("facebook_url")
  });

  describe('#getTwitterCount', () =>
  {
    it('should be a function', () => {
      expect(Social.getTwitterCount).a('function')
    });

    it('should call callAPI', () => {
      sinon.spy(Social, "callAPI")
      Social.getTwitterCount(url)
      expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).true
    })
  });
})