<template>
    <!-- <div :style="{background: $attrs.bgcolor}"> -->
    <!-- <div ref="div"> -->
    <div>
        MyChild1 - {{data}}
        <!-- <button @click="$refs.div.style.backgroundColor = $attrs.bgcolor">设置背景色</button> -->
        <button @click="$el.style.backgroundColor = $attrs.bgcolor">设置背景色</button>
        <button @click="getAttrs">获取非props属性</button>
        <button @click="getListeners">获取非Listeners属性</button>

        <MyChild1Child2 :data="data"></MyChild1Child2>
    </div>
</template>

<script>
import MyChild1Child2 from '@/components/MyChild1Child2'

export default {
    name: 'MyChild1',

    components: {
        MyChild1Child2
    },

    props: ['data'],

    data() {
        return {
            name: 'MyChild1-name'
        }
    },

    methods: {
        getAttrs() {
            console.log(this.$attrs);
        },
        getListeners() {
            console.log(this.$listeners);
        }
    }
}
</script>