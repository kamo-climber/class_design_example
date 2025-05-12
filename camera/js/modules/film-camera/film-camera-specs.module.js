import Specs from '../specs.module.js';

export default class FilmCameraSpecs extends Specs {
  /** @type {string} */
  productName;
  /** @type {number} */
  filmSize;
  /** @type {string} */
  lensMountType;

  /**
   * @param {validator} validator - バリデータークラス
   * @param {Object} specs - カメラのスペック
   * @param {string} specs.productName - カメラの製品名
   * @param {number} specs.filmSize - カメラのフィルムサイズ
   * @param {number} specs.lensMountType - カメラのレンズマウント
   */
  constructor(validator, specs) {
    super();
    
    this.validate(specs, {
      productName: v => validator.isString(v),
      filmSize: v => validator.isPositiveNumber(v),
      lensMountType: v => validator.isString(v)
    });

    const { productName, filmSize, lensMountType } = specs;

    this.productName = productName;
    this.filmSize = filmSize;
    this.lensMountType = lensMountType;
  }
}