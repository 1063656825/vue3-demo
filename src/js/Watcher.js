import { Dep } from './Dep'

/*
 * @Author: yutaiqi
 * @Date: 2023-04-09 22:32:50
 * @LastEditTime: 2023-04-10 23:17:29
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/Watcher.js
 */
let uid = 0
export default class Watcher {
  // 对象、表达式、函数
  constructor(target, expression, callback) {
    this.id = uid++
    this.target = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
    console.log('我是一个Watcher构造函数')
  }
  update() {
    this.run()
  }
  // 依赖收集的阶段
  get() {
    // 进入依赖收集阶段，就是将Dep.target从全局指向watcher本身。
    Dep.target = this
    // 接收返回值的
    let value
    const obj = this.target
    try {
      value = this.getter(obj)
    } finally {
      // 这个watcher执行完成后一定要置空
      Dep.target = null
    }
    return value
  }
  run() {
    const value = this.get()
    if (value != this.value || typeof value == 'object') {
      const oldValue = this.value
      this.value = value
      this.callback.call(this.target, value, oldValue)
    }
  }
}
function parsePath(expression) {
  let segments = expression.split('.')
  return (obj) => {
    for (const iterator of segments) {
      if (!obj) return
      obj = obj[iterator]
    }
    return obj
  }
}
