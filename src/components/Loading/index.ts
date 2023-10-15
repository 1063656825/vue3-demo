/*
 * @Author: yutaiqi
 * @Date: 2023-07-13 23:23:42
 * @LastEditTime: 2023-07-13 23:31:24
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/components/Loading/index.ts
 */
import { createVNode, type App, type VNode, render } from 'vue'
import Loading from './index.vue'
export default {
    install(app: App) {
        console.log(app);
        //createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
        const vnode: VNode = createVNode(Loading)
        //render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
        render(vnode, document.body)
        // Vue 提供的全局配置 可以自定义
        app.config.globalProperties.$loading = {
            show: () => vnode.component?.exposed?.show(),
            hide: () => vnode.component?.exposed?.hide()
        }

    }
}