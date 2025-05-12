export default class Validator {
  /**
   * 値が文字列かどうかを検証
   * @param {*} value - 検証対象の値。
   * @returns {boolean} 値が文字列であれば true、そうでなければ false。
   */
  isString(value) {
    return typeof value === 'string' && value.trim() !== ''
  }

  /**
   * 値が正の整数（0より大きい整数）かどうかを検証
   * @param {*} value - 検証対象の値
   * @returns {boolean} 値が正の整数であれば true、そうでなければ false
   */
  isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  /**
   * 値が正の数値（0より大きい float または整数）かどうかを検証
   * @param {*} value - 検証対象の値
   * @returns {boolean} 値が正の数値であれば true、そうでなければ false
   */
  isPositiveNumber(value) {
    return typeof value === 'number' && !isNaN(value) && value > 0;
  }
}
