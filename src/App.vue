<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-10-19 22:58:26
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/App.vue
-->
<template>
<div>
    <child :data="list">
        <template #default="{item}">
        {{ item }}
        </template>
    </child>
</div>
</template>
<script setup lang="ts">
import child from './views/child.vue'
const handleSend = (msg:string)=>{
    console.log(msg);
    
}
const list = ['电商时代','是的','等待'
]
</script>