<template>
    <div>
        MyChild2 
        <div>
            pName: {{pName}}
        </div>
    </div>
</template>

<script>
import eventBus from '@/eventBus';

export default {
    name: 'MyChild2',

    data() {
        return {
            pName: ''
        }
    },

   created() {
       eventBus.$on('bus', data => {
           this.pName = data;
       })
   }
}
</script>