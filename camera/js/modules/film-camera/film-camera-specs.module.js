export default class FilmCameraSpecs {
  /** @type {string} */
  productName;
  /** @type {number} */
  filmSize;
  /** @type {string} */
  lensMountType;

  /**
   * @param {Object} specs - カメラのスペック
   * @param {string} specs.productName - カメラの製品名
   * @param {number} specs.filmSize - カメラのフィルムサイズ
   * @param {number} specs.lensMountType - カメラのレンズマウント
   */
  constructor({ productName, filmSize, lensMountType }) {
    this.productName = productName;
    this.filmSize = filmSize;
    this.lensMountType = lensMountType;
  }
}