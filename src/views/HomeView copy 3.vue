<!--
 * @Author: yutaiqi
 * @Date: 2023-07-13 23:40:57
 * @LastEditTime: 2023-07-13 23:40:58
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView copy 3.vue
-->
<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-07-13 23:34:52
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView.vue
-->
<template>
    {{$env }}
    {{ $filters.format('test') }}
    {{ filte }}
    <div v-resize="aaa" id="border">
        <img
            class="img"
            :src="imgUrl"
            mode="scaleToFill"
            width="200"
            height="200"
        />
    </div>

</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const app = getCurrentInstance()
let filte = app?.proxy?.$filters.format('测试')

import useBase64 from '../hooks/index'
import imgUrl from '../assets/images/1.jpeg'
// import useResize from 'v-resize-yy'
// import { onMounted } from 'vue';
useBase64({el:'.img'}).then(res=>{
    console.log(res);
})
const aaa = (e:any)=>{
    console.log(e);
    
}
// onMounted(()=>{
//     let dom:HTMLElement = document.querySelector("#border") as HTMLElement;
//     useResize(dom,(e:any)=>{
//         console.log(e);
        
//     })
// })

</script>
<style>
#border{
    resize: both;
    border: 1px solid #000;
    overflow: hidden;
}
</style>