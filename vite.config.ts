/*
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-07-02 15:15:45
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import tsx from './plugin/index'
import { PostCsspxToViewport } from './plugin/postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tsx()],
    css: {
        postcss: {
            plugins: [PostCsspxToViewport()]
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
