<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-10-10 23:30:00
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/App.vue
-->
<template>
    <div>
        <header class="header">
            <div>left</div>
            <div>center</div>
            <div>right</div>
        </header>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less">
.header {
    width: 100%;
    display: flex;
    
    div{
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
    }
    div:nth-child(1) {
        width: 100px;
        background-color: green;
    }

    div:nth-child(2) {
        flex: 1;
        background-color: red;
    }

    div:nth-child(3) {
        width: 100px;
        background-color: yellow;
    }
}</style>