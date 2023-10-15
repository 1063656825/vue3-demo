/*
 * @Author: yutaiqi
 * @Date: 2023-04-09 22:12:41
 * @LastEditTime: 2023-04-10 23:17:15
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/Dep.js
 */
let uid = 0
export class Dep {
  constructor() {
    this.id = uid++
    console.log('这是一个的DEP的构造函数')
    // subs是用来存放订阅者信息的，里面主要就是watcher的实例
    this.subs = []
  }
  // 添加订阅
  addSub(sub) {
    // 往subs中添加watcher实例
    this.subs.push(sub)
  }
  // 添加依赖
  depend() {
    // Dep.target就是我们指定的一个全局位置，使用window.target也是可以的
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  notify() {
    console.log('i am notify')
    // 浅克隆一份subs,如果不拷贝就会出现无限递归的情况
    const subs = this.subs.slice()

    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}
