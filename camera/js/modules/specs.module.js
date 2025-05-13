export default class Specs {

  /**
   * 共通のバリデーション処理
   * @param {Object} specs
   * @param {Object.<string, Function>} rules
   */
  validate(specs, rules) {
    for(const [key, validateFn] of Object.entries(rules)) {
      const value = specs[key];
      if(!validateFn(value)) {
        throw new Error(`Invalid parameter: ${key}`);
      }
    }
  }
}