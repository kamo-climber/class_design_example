import FilmSpecs from './film-specs.module.js';

export default class Film {
  /** @type {string} */
  #productName;
  /** @type {number} */
  #limit;
  /** @type {number} */
  #iso;
  /** @type {number} */
  #size;
  /** @type {number} */
  #shutterCount = 0;

  /**
   * @param {FilmSpecs} specs 
   */
  constructor(specs) {
    if(!(specs instanceof FilmSpecs)) { throw new Error('パラメータが正しくありません。'); }

    const { productName, limit, iso, size } = specs;
    this.#productName = productName;
    this.#limit = limit;
    this.#iso = iso;
    this.#size = size;
  }

  /**
   * @returns {string}
   */
  getProductName() {
    return this.#productName;
  }

  /**
   * @returns {number}
   */
  getLimit() {
    return this.#limit;
  }

  /**
   * @returns {number}
   */
  getIso() {
    return this.#iso;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.#size;
  }

  /**
   * @returns {void}
   */
  save(structure) {
    console.log(`${structure}の構成で写真を撮りました。`);
  }

  /**
   * @returns {number}
   */
  getRemainingShutterCount() {
    return this.#limit - this.#shutterCount;
  }

  /**
   * @returns {void}
   */
  shutterCounter() {
    this.#shutterCount++
    console.log(`残り枚数は${this.getRemainingShutterCount()}です。`);
  }
}