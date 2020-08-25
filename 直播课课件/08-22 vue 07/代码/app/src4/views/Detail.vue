<template>
    <div id="main">
            
        <div v-if="isError">
            <h3>获取商品失败</h3>
        </div>
        <div v-else>
            <div v-if="item">
                <h1 class="title">{{item.name}}</h1>
                <div class="detail" v-html="item.detail.detail"></div>
            </div>
            <div v-else>
                <p>数据加载中……</p>
            </div>
        </div>
        

    </div>
</template>

<script>
/**
 * 当一个组件即可以作为路由组件去访问，同时又可以作为可复用组件在其它组件中通过import导入使用，还有该组件会接受外部传入的数据
 *  
 */
import {getItem} from '@/api';

export default {
    name: 'Detail',

    props: ['id'],

    data() {
        return {
            item: null,
            isError: false
        }
    },

    async created() {
        try {
            // let id = this.id ? this.id : this.$route.params.id;
            let {data} = await getItem(this.id);
            this.item = data;
        } catch(e) {
            this.isError = true;
        }
    }
}
</script>