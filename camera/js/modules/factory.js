import FilmCameraSpecs from './film-camera/film-camera-specs.module.js';
import FilmCamera from './film-camera/film-camera.module.js';
import LensSpecs from './lens/lens-specs.module.js';
import Lens from './lens/lens.module.js';
import FilmSpecs from './film/film-specs.module.js';
import Film from './film/film.module.js';


export default class Factory {
  /** @type {Validator} */
  #validator

  /**
   * @param {Validator} validator
   */
  constructor(validator) {
    this.#validator = validator;
  }

  /**
   * @param {Object} specs - カメラのスペック
   * @param {string} specs.productName - カメラの製品名
   * @param {number} specs.filmSize - カメラのフィルムサイズ
   * @param {number} specs.lensMountType - カメラのレンズマウント
   * @returns {FilmCamera}
   */
  createFilmCamera(specs) {
    return new FilmCamera(new FilmCameraSpecs(this.#validator, specs));
  }

  /**
   * @param {Object} specs - レンズのスペック
   * @param {string} specs.productName - レンズの製品名
   * @param {number} specs.mountType - レンズのマウントタイプ
   * @param {number} specs.fNumber - レンズのF値
   * @param {[ number, number ]} specs.focalLength - レンズの焦点距離
   * @returns {Lens}
   */
  createLens(specs) {
    return new Lens(new LensSpecs(this.#validator, specs));
  }

  /**
   * @param {Object} specs - フィルムのスペック
   * @param {string} specs.productName - フィルムの製品名
   * @param {number} specs.limit - フィルムの枚数
   * @param {number} specs.iso - フィルムのISO
   * @param {number} specs.size - フィルムのサイズ
   * @returns {Film}
   */
  createFilm(specs) {
    return new Film(new FilmSpecs(this.#validator, specs));
  }
}