/*
 * @Author: yutaiqi
 * @Date: 2023-10-10 23:32:24
 * @LastEditTime: 2023-10-11 00:05:52
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/plugin/postcss-px-to-viewport.ts
 */
import type { Plugin } from "postcss";
const Options = {
    viewportWidth: 375

}
interface Options {
    viewportWidth: number
}
export const PostCsspxToViewport = (option:Options = Options):Plugin =>{
    const opt = Object.assign({}, option)
    return{
        postcssPlugin:'postcss-px-to-viewport',
        // 钩子函数
        // 拿到所有结点
        Declaration(node){
            if(node.value.includes('px')){
                const num = parseFloat(node.value)
                node.value = `${((num / opt.viewportWidth) * 100).toFixed(2)}vw`
            }
            
            
        }

    }
}