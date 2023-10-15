/*
 * @Author: yutaiqi
 * @Date: 2023-03-30 22:17:07
 * @LastEditTime: 2023-03-30 23:13:49
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/observe.js
 */
import { Observer } from './Observer'
export default function (value) {
  if (typeof value !== 'object') return
  let obj
  if (typeof value.__ob__ !== 'undefined' && value.__ob__ instanceof Observer) {
    return value.__ob__
  } else {
    return new Observer(value)
  }
}
