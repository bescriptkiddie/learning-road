<template>
    <div>
        MyChild1Child2
        <div>
            爷爷的name：{{pName}} - {{parentPname}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyChild1Child2',
    
    props: ['data'],

    // inject: ['pName'],
    inject: {
        parentPname: {
            from: 'pName'
        }
    },

    data() {
        return {
            pName: '我是组件自己的pName'
        }
    }
}
</script>