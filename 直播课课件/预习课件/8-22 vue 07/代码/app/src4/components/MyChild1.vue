<template>
    <div>
        MyChild1
        <button @click="getParentData">我想要父级的数据</button>
        <div>我接收来自父级传入的数据：{{data}} -- {{parentData}}</div>
    </div>
</template>

<script>
export default {
    name: 'MyChild1',

    props: ['data'],

    data() {
        return {
            name: 'MyChild1-name',
            parentData: ''
        }
    },

    methods: {
        getParentData() {
            this.parentData = this.$parent.name;
        }
    }
}
</script>