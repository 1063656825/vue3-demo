/*
 * @Author: yutaiqi
 * @Date: 2023-03-30 22:30:44
 * @LastEditTime: 2023-04-10 20:45:49
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/js/index.js
 */
import observe from './observe'
import Watcher from './Watcher'
let obj = {
  a: {
    m: {
      n: 99
    }
  },
  b: 12,
  c: [1, 2, 3, 4, 5]
}
observe(obj)
new Watcher(obj, 'a.m.n', (newValue, oldValue) => {
  console.log(newValue, oldValue, 'watcher')
})
obj.a.m.n = 77
// obj.b = 11
// obj.c.push(1)
console.log(obj.a.m.n)
