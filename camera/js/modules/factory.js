import FilmCameraSpecs from './film-camera/film-camera-specs.module.js';
import FilmCamera from './film-camera/film-camera.module.js';
import LensSpecs from './lens/lens-specs.module.js';
import Lens from './lens/lens.module.js';
import FilmSpecs from './film/film-specs.module.js';
import Film from './film/film.module.js';


export default class Factory {
  /** @type {Validator} */
  #validator
  #PARAMETER_ERROR = 'パラメータが正しくありません。';

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
    this.#validate(specs, {
      productName: v => typeof v === 'string',
      filmSize: v => this.#validator.isPositiveNumber(v),
      lensMountType: v => typeof v === 'string'
    });

    return new FilmCamera(new FilmCameraSpecs(specs));
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
    this.#validate(specs, {
      productName: v => typeof v === 'string',
      mountType: v => typeof v === 'string',
      fNumber: v => this.#validator.isPositiveNumber(v),
      focalLength: v => {
        return Array.isArray(v) && v.length <= 2 && v.every(num => this.#validator.isPositiveNumber(num));
      }
    });

    return new Lens(new LensSpecs(specs));
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
    this.#validate(specs, {
      productName: v => typeof v === 'string',
      limit: v => this.#validator.isPositiveInteger(v),
      iso: v => this.#validator.isPositiveInteger(v),
      size: v => this.#validator.isPositiveInteger(v)
    });

    return new Film(new FilmSpecs(specs));
  }

  /**
   * 共通のバリデーション処理
   * @param {Object} specs
   * @param {Object.<string, Function>} rules
   */
  #validate(specs, rules) {
    for(const [key, validateFn] of Object.entries(rules)) {
      const value = specs[key];
      if(!validateFn(value)) {
        throw new Error(this.#PARAMETER_ERROR);
      }
    }
  }
}