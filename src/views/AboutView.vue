<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-07-02 16:49:07
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/AboutView.vue
-->
<template>
  <div class="about" v-if="propsData.modelValue">
    <h1>This is an about page</h1>
    <input type="text" v-model="propsData.text" @input="changeText">
    <button
        open-type=""
        hover-class="button-hover"
        @click="close"
    >
        关闭
    </button>
  </div>
</template>
<script setup lang="ts">
type Props = {
    modelValue: {
        type: Boolean,
        default: false
    },
    text:{
        type: String,
        default:'1'
    }
}
const propsData = defineProps<Props>()
const emit = defineEmits(['update:modelValue','update:text'])
const close =()=>{
    emit('update:modelValue',false)
}
const changeText = (e:any)=>{
    emit('update:text',e.target.value)
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
