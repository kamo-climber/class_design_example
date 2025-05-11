export default class LensSpecs {
  /** @type {string} */
  productName;
  /** @type {string} */
  mountType;
  /** @type {number} */
  fNumber;
  /** @type {number[]} */
  focalLength;
  /** @type {number} */
  zoom;

  /**
   * @param {Object} specs - フィルムのスペック
   * @param {string} specs.productName - フィルムの製品名
   * @param {number} specs.mountType - フィルムの枚数
   * @param {number} specs.fNumber - フィルムのISO
   * @param {[ number, number ]} specs.focalLength - フィルムのサイズ
   */
  constructor({ productName, mountType, fNumber, focalLength }) {
    this.productName = productName;
    this.mountType = mountType;
    this.fNumber = fNumber;
    this.focalLength = focalLength;
  }
}