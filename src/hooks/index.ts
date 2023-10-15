/*
 * @Author: yutaiqi
 * @Date: 2023-07-08 23:40:57
 * @LastEditTime: 2023-07-09 00:18:01
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/hooks/index.ts
 */
import { onMounted } from "vue"
type Options ={
    el:string
}
export default function (options: Options) {
    return new Promise(resolve =>{
        onMounted(()=>{
            let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            console.log(img);
            img.onload = () =>{
                resolve({
                    baseUrl:toBase64(img)
                })
                
            }
            
        })
        const toBase64 = (el:HTMLImageElement)=>{
            console.log(el);
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")
            canvas.width = el.width
            canvas.height = el.height
            ctx?.drawImage(el, 0, 0, el.width, el.height)
            return canvas.toDataURL('image/jpeg')
            
        }
    })
    
}