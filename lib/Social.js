const promise = require('promise')
const request = require('request')

class Social {
  static reqres_url = "https://reqres.in/api/users?page=2"
  static jsonPlaceholder_url = "https://jsonplaceholder.typicode.com/users/1"

  static getReqresCount = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self.callAPI(self.reqres_url).then((result) => {
        resolve(result.total)
      })
    })
  }

  static getJsonPlaceholderCount = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self.callAPI(self.jsonPlaceholder_url).then((result) => {
        resolve(result.id)
      })
    })
  }

  static callAPI = (url) =>
  {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        (!error && response.statusCode === 200) ? resolve(JSON.parse(body)) : reject(error)
      })
    })
  }


}

module.exports = Social