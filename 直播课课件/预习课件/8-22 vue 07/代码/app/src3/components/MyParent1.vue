<template>
    <div>
        MyParent1
        <MyChild1 :data="name" ref="myChild"></MyChild1>
        <button @click="getChildData">我想要子级的数据</button>
        <div>
            我接收到了子级的数据：{{childData}}
        </div>
    </div>
</template>

<script>
import MyChild1 from '@/components/MyChild1'

export default {
    name: 'MyParent1',

    data() {
        return {
            name: 'MyParent1-Name',
            childData: ''
        }
    },

    components: {
        MyChild1
    },

    methods: {
        getChildData() {
            console.log(this.$refs.myChild);

            this.childData = this.$refs.myChild.name;
        }
    }
}
</script>