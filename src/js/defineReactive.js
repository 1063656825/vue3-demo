import observe from './observe'
import { Dep } from './Dep'
/*
 * @Author: yutaiqi
 * @Date: 2023-03-29 22:13:14
 * @LastEditTime: 2023-04-10 23:22:27
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/defineReactive.js
 */
export function defineReactive(data, key, val) {
  const dep = new Dep()
  // 如果是深层次就不会有val
  if (arguments.length == 2) {
    val = data[key]
  }
  let childObj = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 如果是处于依赖就收集依赖就行
      if (Dep.target) {
        dep.depend()
        if (childObj) childObj.dep.depend()
      }
      console.log(`正在获取${key}的值`)
      return val
    },
    set(newVal) {
      console.log(`正在设置${key}的值`)
      if (val === newVal) return
      val = newVal
      childObj = observe(newVal)
      // 订阅者模式
      dep.notify()
    }
  })
}
