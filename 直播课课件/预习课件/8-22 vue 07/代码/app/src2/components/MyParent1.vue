<template>
    <div>
        MyParent1
        <MyChild1 :data="name" @senddata="getChildData"></MyChild1>
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
        getChildData(data) {
            console.log('我接收到了子级传递给我的数据', data);
            this.childData = data;
        }
    }
}
</script>