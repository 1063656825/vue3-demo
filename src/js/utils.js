/*
 * @Author: yutaiqi
 * @Date: 2023-03-30 22:23:09
 * @LastEditTime: 2023-03-30 22:35:06
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/utils.js
 */
export function def(value, key, val, enumerable) {
  Object.defineProperty(value, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
