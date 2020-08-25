<template>
    <div>
        MyChild2 
        <div>
            <button @click="getLocalStorageData">获取localStorage中的值</button>
            pName: {{pName}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyChild2',

    data() {
        return {
            pName: ''
        }
    },

    methods: {
        getLocalStorageData() {
            this.pName = localStorage.getItem('pName');
        }
    }
}
</script>