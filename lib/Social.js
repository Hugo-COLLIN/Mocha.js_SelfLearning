class Social {
  static twitter_url = "https://urls.api.twitter.com/1/urls/count.json?callback=?&url="
  static facebook_url = "https://graph.facebook.com/"

  static getTwitterCount = (url) => {
    return this.callAPI(this.twitter_url + url)
  }

  static callAPI = (url) =>
  {
    return null
  }
}

module.exports = Social