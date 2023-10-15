/*
 * @Author: yutaiqi
 * @Date: 2023-03-30 22:17:26
 * @LastEditTime: 2023-04-10 13:20:40
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/Observer.js
 */
import { def } from './utils.js'
import { defineReactive } from './defineReactive.js'
import { arrayMethods } from './array.js'
import observe from './observe.js'
import { Dep } from './Dep.js'
export class Observer {
  constructor(value) {
    // 每个Observer实例都有一个dep实例
    this.dep = new Dep()
    // 给对象都添加 __ob__ 不可递归属性
    def(value, '__ob__', this, false)
    // 判断是否为数组，数组则进行数组操作
    if (Array.isArray(value)) {
      // 将arrayMethos设置为数组的属性
      Object.setPrototypeOf(value, arrayMethods)
      // 循环遍历数组设置响应式
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  // 遍历value
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
  // 遍历数组
  observeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      observe(arr[i])
    }
  }
}
