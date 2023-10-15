/*
 * @Author: yutaiqi
 * @Date: 2023-06-26 23:33:01
 * @LastEditTime: 2023-07-02 16:02:18
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /vue3-demo/src/views/testTsx.tsx
 */
import { ref } from 'vue'
// v-model使用
// let v = ref<string>('')
// const renderDom = () => {
//     return (
//         <>
//             <input type="text" v-model={v.value} />
//             <div>{v.value}</div>
//         </>
//     )
// }

// v-show v-if v-bind v-if
// let flag = ref<boolean>(false)
// const renderDom = () => {
//     return (
//         <>
//             <div v-show={flag.value}>这里是v-show的true</div>
//             <div v-show={!flag.value}>这里是v-show的false</div>

//             <div>{flag.value ? <div >这里是v-if的true</div> : <div >这里是v-if的false</div>}</div>
//             <div v-if={flag.value}>test</div>
//             <button onClick={() => { flag.value = !flag.value }}>button</button>
//         </>
//     )
// }

// v-for
// let arr = [1, 2, 3, 4, 5]
// const renderDom = () => {
//     return (
//         <>
//             {
//                 arr.map(item => {
//                     return <div >{item}</div>
//                 })
//             }
//         </>
//     )
// }

const A = (_: any, slots: any) => (
    <>
        {slots.default ? slots.default() : '默认插槽'}
        {slots.fnn?.()}
    </>
)

type Props = {
    title: string
}

const renderDom = (props: Props, content: any) => {
    const slot = {
        default: (<div>这是一个插槽</div>),
        fnn: (<h1>fnn函数</h1>)
    }
    return (
        <>
            <A v-slots={slot}></A>
            <div>{props.title}</div>
            <button onClick={clickTap.bind(this, content)}>点击</button>
        </>
    )
}

const clickTap = (ctx: any) => {
    console.log(ctx);

    ctx.emit('on-click', 1)
}

export default renderDom