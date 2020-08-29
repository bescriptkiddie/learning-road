<template>
  <div id="main">
    <ul class="items-list">

      <!-- <router-link :to="'/detail/'+item.id" tag="li" class="panel" v-for="item of items" :key="item.id"> -->
      <router-link :to="{
          name: 'Detail',
          params: {
              id: item.id
            }
        }" tag="li" class="panel" v-for="item of items" :key="item.id">
        <img :src="item.cover" alt class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="price">{{item.price|price}}</div>
      </router-link>

    </ul>

    <div class="pagination-container">
      <KPagination :page.sync="page" :total="total" :prepage="prepage" @change="changePage" />
    </div>
  </div>
</template>

<script>
import {getItems} from '@/api';
import price from '@/filters/price';
import KPagination from '@/components/KPagination';

export default {
    name: 'Main',
    data() {
        return {
            items: [],
            page: 1,
            total: 0,
            prepage: 8
        }
    },
    filters: {
        price
    },
    components: {
      KPagination
    },
    async created() {
        // 登陆了吗？

        let isLogin = !!localStorage.getItem('token');

        // let isLogin = false; //?
        if (!isLogin) {
          this.$router.push({name: 'Login'});
        } else {
          await this.getItems();
        }
        
    },

    methods: {
      async changePage(p) {
        // if (p !== this.page) {
          console.log('重新发送请求');
          await this.getItems();
        // }
      },

      async getItems() {
        // 请求完成之前，Main组件实际已经渲染了
          let {data: {items, page, prepage, total}} = await getItems({
              page: this.page,
              prepage: this.prepage
          });

          // 当数据发生改变以后，Main.vue 又会渲染一次
          this.items = items;
          this.page = page;
          this.total = total;
          this.prepage = prepage;
      }
    }
}
</script>