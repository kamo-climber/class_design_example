import Specs from '../specs.module.js';

export default class LensSpecs extends Specs {
  /** @type {string} */
  productName;
  /** @type {string} */
  mountType;
  /** @type {number} */
  fNumber;
  /** @type {number[]} */
  focalLength;

  /**
   * @param {validator} validator - バリデータークラス
   * @param {Object} specs - レンズのスペック
   * @param {string} specs.productName - レンズの製品名
   * @param {number} specs.mountType - レンズのマウントタイプ
   * @param {number} specs.fNumber - レンズのF値
   * @param {[ number, number ]} specs.focalLength - レンズの焦点距離
   */
  constructor(validator, specs) {
    super();

    this.validate(specs, {
      productName: v => validator.isString(v),
      mountType: v => validator.isString(v),
      fNumber: v => validator.isPositiveNumber(v),
      focalLength: v => {
        return Array.isArray(v) && v.length <= 2 && v.every(num => validator.isPositiveNumber(num));
      }
    });

    const { productName, mountType, fNumber, focalLength } = specs;

    this.productName = productName;
    this.mountType = mountType;
    this.fNumber = fNumber;
    this.focalLength = focalLength;
  }
}