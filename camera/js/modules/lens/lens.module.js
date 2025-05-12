import LensSpecs from './lens-specs.module.js';

export default class Lens {
  /** @type {string} */
  #productName;
  /** @type {string} */
  #mountType;
  /** @type {number} */
  #fNumber;
  /** @type {number[]} */
  #focalLength;
  /** @type {number} */
  #zoom;

  /**
   * @param {LensSpecs} specs 
   */
  constructor(specs) {
    if(!(specs instanceof LensSpecs)) { throw new Error('パラメータが正しくありません。'); }

    const { productName, mountType, fNumber, focalLength } = specs;
    this.#productName = productName;
    this.#mountType = mountType;
    this.#fNumber = fNumber;
    this.#focalLength = focalLength;
    this.#zoom = focalLength[0];
  }

  /**
   * @returns {string}
   */
  getProductName() {
    return this.#productName;
  }

  /**
   * @returns {string}
   */
  getMountType() {
    return this.#mountType;
  }

  /**
   * @returns {number}
   */
  getFNumber() {
    return this.#fNumber;
  }

  /**
   * @returns {number[]}
   */
  getFocalLength() {
    return this.#focalLength;
  }

  /**
   * @returns {number}
   */
  getZoom() {
    return this.#zoom;
  }

  /**
   * @returns {void}
   */
  zoom(value) {
    if(this.#focalLength.length !== 2) { return; }
    value = Math.max(value, this.#focalLength[0]);
    value = Math.min(value, this.#focalLength[1]);

    console.log('ズームしました。');
    this.#zoom = value;
  }

  /**
   * @returns {void}
   */
  focus() {
    console.log('フォーカスを合わせました。');
  }
}