<!--
 * @Author: yutaiqi
 * @Date: 2023-07-08 23:46:36
 * @LastEditTime: 2023-07-08 23:46:37
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/HomeView copy 2.vue
-->
<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-07-02 16:46:33
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述 
 * @FilePath: /vue3-demo/src/views/HomeView.vue
-->
<template>
    <div>visible:{{ visible }}</div>
    <div>text:{{ text }}</div>
    <button @click="visible = !visible">开关</button>
    <AboutView v-model="visible" v-model:text="text"/>

</template>
<script setup lang="ts">
import AboutView from './AboutView.vue';
import { ref } from 'vue';
const visible = ref<Boolean>(false)
const text = ref<String>('')
</script>