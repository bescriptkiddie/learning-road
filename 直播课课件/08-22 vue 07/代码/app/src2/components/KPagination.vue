<template>
    <div class="pagination">
        <a href="" class="prev">上一页</a>
        <a v-for="p of pages" :key="p" href="" @click.prevent="changePage(p)" :class="{current:p == page}">{{p}}</a>
        <a href="" class="next">下一页</a>
    </div>
</template>

<script>
export default {
    name: 'KPagination',
    props: {
        page: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        prepage: {
            type: Number,
            default: 1
        }
    },
    // data() {
    //     // data函数只会在组件初始化当时候执行一次
    //     let pages = Math.ceil(this.total / this.prepage); 
    //     return {
    //         pages 
    //     }
    // },
    computed: {
        pages() {
            return Math.ceil(this.total / this.prepage);
        }
    },
    methods: {
        changePage(p) {
            this.$emit('update:page', p);
            this.page !== p && this.$emit('change', p);
        }
    }
}
</script>