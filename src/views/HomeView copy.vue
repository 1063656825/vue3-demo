<!--
 * @Author: yutaiqi
 * @Date: 2023-07-02 16:34:52
 * @LastEditTime: 2023-07-02 16:34:53
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView copy.vue
-->
<template>
<div>这是父组件 HomeView</div>
<br/>
<renderDom title="测试标题" @on-click="test"/>
</template>
<script setup lang="ts">
import renderDom from './testTsx'
const test = (value:any)=>{
    console.log(value);
    
}
</script>