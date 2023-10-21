class Percentage {
  static evolution(x, y) {
    return Math.round(100 * 100 * (y - x) / x) / 100;
  }

  static wait(time, callback) {
    setTimeout(() => {
      callback(18)
    }, time)
  }
}

module.exports = Percentage;
