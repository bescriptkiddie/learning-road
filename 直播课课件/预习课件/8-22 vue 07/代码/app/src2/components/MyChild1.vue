<template>
    <div>
        MyChild1
        <div>我接收来自父级传入的数据：{{data}}</div>
        <button @click="sendDataToParent">把数据传递给父级</button>
    </div>
</template>

<script>
export default {
    name: 'MyChild1',

    props: ['data'],

    data() {
        return {
            name: 'MyChild1-name'
        }
    },

    methods: {
        sendDataToParent() {
            this.$emit('senddata', this.name);
        }
    }
}
</script>