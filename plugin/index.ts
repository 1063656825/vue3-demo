/*
 * @Author: yutaiqi
 * @Date: 2023-07-02 15:05:02
 * @LastEditTime: 2023-07-02 16:05:43
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/plugin/index.ts
 */
import type { Plugin } from "vite";
import * as babel from '@babel/core'//将源代码转成目标代码
import jsx from '@vue/babel-plugin-jsx'//支持 tsx v-model

// 插件就是一个函数
export default function (): Plugin {
    return{
        name:"vite-plugin-tsx",
        config () {
            return {
               esbuild:{
                  include:/\.ts$/
               }
            }
         },
        async transform(code,id){
            if(/.tsx$/.test(id)){
                
                //@ts-ignore
                const ts = await import('@babel/plugin-transform-typescript').then(r=>r.default)
                console.log(ts,ts.default,'ts');
                
                const res = await babel.transformAsync(code,{
                    plugins:[jsx,[ts,{isTSX:true, allowExtensions:true}]],
                    ast: true,
                    babelrc:false,
                    configFile:false
                })
                console.log(res,'11111');
                
                return res?.code
            }
            return code
        }
    }
}