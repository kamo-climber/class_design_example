import FilmCameraSpecs from './film-camera-specs.module.js';
import Film from '../film/film.module.js';
import Lens from '../lens/lens.module.js';

export default class FilmCamera {
  /**@type {string} */
  #productName;
  /**@type {number} */
  #filmSize;
  /**@type {string} */
  #lensMountType;
  /**@type {Film} */
  #film;
  /**@type {Lens} */
  #lens;

  /**
   * @param {FilmCameraSpecs} specs 
   */
  constructor(specs) {
    if(!(specs instanceof FilmCameraSpecs)) { throw new Error('パラメータが正しくありません。'); }

    const { productName, filmSize, lensMountType } = specs;
    this.#productName = productName;
    this.#filmSize = filmSize;
    this.#lensMountType = lensMountType;
  }

  /**
   * レンズの装着
   * @param {Lens} lens 
   * @returns {void}
   */
  mountLens(lens) {
    this.unmountLens();

    if(!lens instanceof Lens) {
      console.log('レンズを装着して下さい。');
      return;
    }

    if(lens.getMountType() !== this.#lensMountType) {
      console.log('レンズの規格が合いません。');
      return;
    }

    this.#lens = lens;
  }

  /**
   * レンズの脱着
   * @returns {void}
   */
  unmountLens() {
    this.#lens = null;
  }

  /**
   * フィルムの装着
   * @param {Film} film 
   * @returns {void}
   */
  mountFilm(film) {
    this.unmountFilm();

    if(!film instanceof Film) {
      console.log('フィルムを装着して下さい。');
      return;
    }

    if(film.getSize() !== this.#filmSize) {
      console.log('フィルムの規格が合いません。');
      return;
    }

    this.#film = film;
  }

  /**
   * レンズの脱着
   * @returns {void}
   */
  unmountFilm() {
    this.#film = null;
  }

  /**
   * @param {number} value 
   * @returns {void} 
   */
  zoom(value) {
    if (!this.#lens) {
      console.log('レンズを装着してください。');
      return;
    }
    this.#lens.zoom(value);
  }

  /**
   * @returns {void} 
   */
  focus() {
    if (!this.#lens) {
      console.log('レンズを装着してください。');
      return;
    }
    this.#lens.focus();
  }

  /**
   * @returns {void}
   */
  shutter() {
    if(!this.#lens) {
      console.log('レンズを装着して下さい。');
      return;
    }

    if(!this.#film) {
      console.log('フィルムを装着して下さい。');
      return;
    }

    if(this.#film.getRemainingShutterCount() < 1) {
      console.log('新しいフィルムを装着して下さい。');
      return;
    }

    const structure = `${this.#productName} + ${this.#lens.getProductName()} + ${this.#film.getProductName()}`;

    this.#film.save(structure);
    this.#film.shutterCounter();
  }
}