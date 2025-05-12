import Specs from '../specs.module.js';

export default class FilmSpecs extends Specs {
  /** @type {string} */
  productName;
  /** @type {number} */
  limit;
  /** @type {number} */
  iso;
  /** @type {number} */
  size;

  /**
   * @param {validator} validator - バリデータークラス
   * @param {Object} specs - フィルムのスペック
   * @param {string} specs.productName - フィルムの製品名
   * @param {number} specs.limit - フィルムの枚数
   * @param {number} specs.iso - フィルムのISO
   * @param {number} specs.size - フィルムのサイズ
   */
  constructor(validator, specs) {
    super();

    this.validate(specs, {
      productName: v => validator.isString(v),
      limit: v => validator.isPositiveInteger(v),
      iso: v => validator.isPositiveInteger(v),
      size: v => validator.isPositiveInteger(v),
    });

    const { productName, limit, iso, size } = specs;

    this.productName = productName;
    this.limit = limit;
    this.iso = iso;
    this.size = size;
  }
}