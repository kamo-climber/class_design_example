export default class FilmSpecs {
  /** @type {string} */
  productName;
  /** @type {number} */
  limit;
  /** @type {number} */
  iso;
  /** @type {number} */
  size;

  /**
   * @param {Object} specs - フィルムのスペック
   * @param {string} specs.productName - フィルムの製品名
   * @param {number} specs.limit - フィルムの枚数
   * @param {number} specs.iso - フィルムのISO
   * @param {number} specs.size - フィルムのサイズ
   */
  constructor({ productName, limit, iso, size }) {
    this.productName = productName;
    this.limit = limit;
    this.iso = iso;
    this.size = size;
  }
}