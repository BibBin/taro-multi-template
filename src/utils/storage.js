import Taro from '@tarojs/taro';
const BrandEnvMap = require('@/config/brand');
const brand = BrandEnvMap.CURBD;
/*!
 * 本地存储
 */
export default {
  /**
   * 写入Storage
   * @param {String} key 值名称
   * @param {String} value 值
   * @return {void}
   */
  set(key, value) {
    Taro.setStorageSync(`${brand}-${key}`, value);
  },
  /**
   * 获取Storage
   * @param {String} key 值名称
   * @return {String}
   */
  get(key) {
    return Taro.getStorageSync(`${brand}-${key}`);
  },
  /**
   * 删除Storage
   * @param {String} key 值名称
   * @return {void}
   */
  remove(key) {
    Taro.removeStorageSync(`${brand}-${key}`);
  }
};
