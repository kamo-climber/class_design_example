export default class RegistryFactory {
  #validator;
  #registry = {};

  constructor(validator) {
    this.#validator = validator;
  }

  /**
   * 製品の生成関数を登録する
   * @param {string} type 製品タイプ（例：'film'）
   * @param {function(validator: Validator, specs: object): any} creator
   */
  register(type, creator) {
    if (typeof creator !== 'function') {
      throw new Error('creator must be a function');
    }
    this.#registry[type] = creator;
  }

  /**
   * 製品インスタンスを生成する
   * @param {string} type 製品タイプ
   * @param {object} specs スペックオブジェクト
   * @returns {any}
   */
  create(type, specs) {
    const creator = this.#registry[type];
    if (!creator) {
      throw new Error(`Type '${type}' is not registered.`);
    }
    return creator(this.#validator, specs);
  }
}