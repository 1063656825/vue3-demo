<!--
 * @Author: yutaiqi
 * @Date: 2023-10-19 21:19:21
 * @LastEditTime: 2023-10-19 23:17:45
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/child.vue
-->
<template>
    <ul >
        <li v-for="(item, index) in data">
            <slot :item="item" :index="index"></slot>
        </li>
    </ul>
</template>
<script generic="T" setup lang="ts">
// 普通方式
import type { PropType } from 'vue';
const props = defineProps({
    name:{
        type: Array as PropType<string[]>,
        required:true
    }
})
// 

// 范型字面量
const props = defineProps<{
    name: string[]
}>()

// vue3.3 对defineProps的改进 新增范型支持 需要在script标签上添加 generic=“T”
const props = defineProps<{ data: T[] }>()
// emit时间 普通方法
const emit = defineEmits(['send'])

const emit = defineEmits<{
    (event:string,name:string):void
}>()

// vue3.3 改进 更加简洁
const emit = defineEmits<{
    'send': [name: string]
}>()

const send = () => {
    emit('send', 'aaaaaaa')
}

// vue3.3 内置了defineOptions 不需要再去下载插件了
// 它里面属性更optionsAPI 一摸一样
// 定义name
defineOptions(
    {
        name:'xxx'
    }
)

// defineSlots 只有声明没有实现,只能接受类型，不能带参数
defineSlots<{
    default: {
        item: string,
        index: number
    }
}>()
</script>