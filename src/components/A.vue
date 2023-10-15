<!--
 * @Author: yutaiqi
 * @Date: 2023-10-07 22:20:18
 * @LastEditTime: 2023-10-07 22:33:13
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/components/A.vue
-->
<template>
    <div>
        我是插槽
        <slot></slot>
    </div>
</template>
 
<script lang="ts" setup>
</script>
 
<style scoped>
:slotted(.a) {
    color: pink;
}
</style>