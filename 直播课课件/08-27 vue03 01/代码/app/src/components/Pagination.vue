<template>
    <div class="pagination">
        <a v-for="p of pages" :key="p" :class="{active: p == page}">
            {{p}}
        </a>
    </div>
</template>

<script>
import usePagnation from '@/uses/pagination';
import { toRef } from 'vue';

export default {
    name: 'Pagination',

    props: {
        total: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 1
        }
    },

    // computed: {
    //     pages() {
    //         return Math.ceil( this.total / 4 )
    //     }
    // },

    setup(props) {

        let pages = usePagnation(props);

        console.log('pages', pages);

        return {
            pages,
            props: toRef(props.page)
        }

    }
}
</script>

<style>
    .pagination {
        margin: 10px;
    }
    .pagination a {
        padding: 10px 20px;
        font-size: 30px;
        cursor: pointer;
    }
    .pagination a.active {
        color: red;
    }
</style>