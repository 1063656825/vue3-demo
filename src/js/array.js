/*
 * @Author: yutaiqi
 * @Date: 2023-03-31 22:56:18
 * @LastEditTime: 2023-04-09 22:46:27
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/array.js
 */
import { def } from './utils'
// 获取数组原型链
const defaultPrototype = Array.prototype

export const arrayMethods = Object.create(defaultPrototype)
// 默认7项数组操作方法
const methodNames = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
methodNames.forEach((method) => {
  const originMethod = defaultPrototype[method]

  def(
    arrayMethods,
    method,
    function () {
      // 把数组上的__ob__取出
      let ob = this.__ob__
      // 将arguments类数组转变为真数组
      let arg = [...arguments]
      // 首先调用数组自己的操作方法
      const result = originMethod.call(this, ...arguments)
      // 因为 push, shift, splice都可以进行插入操作，所以我们要对插入的值也进行响应式，看是否为数组
      let insertValue = []
      switch (method) {
        case 'push':
        case 'unshift':
          insertValue = arg
          break
        case 'splice':
          insertValue = arg.slice(2)
          break
      }
      if (insertValue.length > 0) {
        ob.observeArray(insertValue)
      }
      // 新增加的数组也要进行notify
      ob.dep.notify()
      return result
    },
    false
  )
})
