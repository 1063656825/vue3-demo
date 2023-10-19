<!--
 * @Author: yutaiqi
 * @Date: 2023-03-15 15:33:09
 * @LastEditTime: 2023-10-17 21:51:41
 * @LastEditors: yutaiqi
 * @Description: h函数
 * @FilePath: /vue3-demo/src/App.vue
-->
<template>
    <table border>
        <tr>
            <th>
                name
            </th>
            <th>age</th>
            <th>address</th>
            <th>操作</th>
        </tr>
<tr v-for="user in userList" :key="user.id">
    <td>{{ user.name }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.address }}</td>
    <td>
        <Btn type="success">编辑</Btn>
        <Btn type="danger">删除</Btn>
    </td>
</tr>
    </table>

</template>
<script setup lang="ts">
import { ref, reactive, h } from 'vue'
// 1. template 模版书写风格 2.tsx编写风格 3.函数式组件 h函数
// h函数的源码 createVnode
// h函数的优势 跳过了模版的编译
// parser -> ast -> transform -> js api -> generate -> render
// 缺点很多人接受不了 学习成本略高 vue3 使用h函数较少

interface Props {
    type: 'success' | 'danger' | 'warning'
}
const Btn = (props:Props, ctx:any) => {
    return h('button', {
        style:{
            color: props.type === 'success' ? 'green': props.type === 'danger' ? 'red' : 'yello'
        },
        onClick: ()=>{ console.log('click',ctx,props), ctx.emit('click')}
    }, ctx.slots.default())
}

let userList = reactive([
    {id: '1', name: '小明1', age: 13, address: '大连'},
    {id: '2', name: '小明2', age: 14, address: '大连'},
    {id: '3', name: '小明3', age: 15, address: '大连'},
    {id: '4', name: '小明4', age: 16, address: '大连'},
    {id: '5', name: '小明5', age: 17, address: '大连'},
    {id: '6', name: '小明6', age: 19, address: '大连'},
])

</script>