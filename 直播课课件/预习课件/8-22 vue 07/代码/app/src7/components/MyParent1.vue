<template>
    <div>
        MyParent1
        <MyChild1 :data="name" title="我是标题" content="我是内容" @f1="parentFn1" @f2="parentFn2" bgcolor="yellow" ref="p1"></MyChild1>
        <hr />
        <MyChild2></MyChild2>
    </div>
</template>

<script>
import MyChild1 from '@/components/MyChild1'
import MyChild2 from '@/components/MyChild2'

export default {
    name: 'MyParent1',

    provide() {
        return {
            pName: this.name
        }
    },

    data() {
        return {
            name: 'MyParent1-Name'
        }
    },

    components: {
        MyChild1,
        MyChild2
    },

    methods: {
        parentFn1() {
            console.log('parentFn1');
        },
        parentFn2() {
            console.log('parentFn2');
        }
    }
}
</script>