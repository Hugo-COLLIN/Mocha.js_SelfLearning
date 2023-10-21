class Percentage {
  static evolution(x, y) {
    return Math.round(100 * 100 * (y - x) / x) / 100;
  }
}

module.exports = Percentage;
