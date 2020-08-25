<template>
    <div>
        MyChild1
        <div>我接收来自父级传入的数据：{{data}}</div>
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
    }
}
</script>