<template>
    <div>
        MyChild1Child2
        <div>
            爷爷的name：{{pName}} - {{parentPname}}

            <button @click="saveDataToLocalStorage">存储数据到localStorage中</button>
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
    },

    methods: {
        saveDataToLocalStorage() {
            localStorage.setItem('pName', this.pName);
        }
    }
}
</script>