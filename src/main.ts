/*
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-08-08 16:32:54
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import useResize from 'v-resize-yy'
const app = createApp(App)
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
    format<T>(str: T) {
        return `过滤器-${str}`
    }
}
app.use(createPinia())
app.use(router)
app.use(useResize)

import Loading from './components/Loading'
app.use(Loading)

// element
// main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')



type Filter = {
    format<T>(str: T): string
}
declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env: string
    }
}