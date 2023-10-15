<!--
 * @Author: yutaiqi
 * @Date: 2023-08-08 16:30:04
 * @LastEditTime: 2023-08-08 16:30:05
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView copy 4.vue
-->
<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-07-28 10:10:36
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView.vue
-->
<template>
    <h1>{{ name }}</h1>
    <button @click="start">开始</button>
</template>
   
<script setup lang='ts'>
import { ref } from 'vue';
let name = ref('开始')
function getRandom(n: number , m: number){
    return Math.floor(Math.random()*(n-m)+m)
}
let userList = ['王博文','杨烁','王秉权','陈皓天','张世勋','赵秋睿','金延泽','朱名扬']
let choose: string[] = []
function start(){
    if(choose.length === 8) {
        name.value = '结束'
        return
    }
    let index = getRandom(9,1)
    let tem = userList[index-1]
    console.log(index,tem,choose.indexOf(tem));
    
    if(choose.indexOf(tem) > -1){
        start()
    }else{
        choose.push(tem)
        name.value = tem
    }
}

// console.log(instance)
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
</style>