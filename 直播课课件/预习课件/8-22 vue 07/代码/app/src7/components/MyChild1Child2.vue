<template>
    <div>
        MyChild1Child2
        <div>
            爷爷的name：{{pName}} - {{parentPname}}

            <button @click="saveDataToEventBus">eventBus</button>
        </div>
    </div>
</template>

<script>
import eventBus from '@/eventBus';

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
        saveDataToEventBus() {
            eventBus.$emit('bus', this.pName);
        }
    }
}
</script>