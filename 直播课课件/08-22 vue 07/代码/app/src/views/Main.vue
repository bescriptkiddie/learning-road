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
      <KPagination :page="page" :total="total" :prepage="prepage" @change="changePage" />
    </div>
  </div>
</template>

<script>
import {getItems} from '@/api';
import price from '@/filters/price';
import KPagination from '@/components/KPagination';

// let obj = {
//   'a-b': 1,
// }

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
        
        // console.log(this.$router);

        let isLogin = !!localStorage.getItem('token');

        // let isLogin = false; //?
        if (!isLogin) {
          this.$router.push({name: 'Login'});
        } else {
          await this.getItems();
        }
        
    },

    watch: {
      async $route() {
        console.log('变了');
        await this.getItems();
      }
    },

    methods: {
      async changePage(p) {
        // if (p !== this.page) {
          // console.log('重新发送请求');
          // await this.getItems();
        // }

        // 通过querystring来改变当前页面当url
        // 如果路由两次跳转使用当是同一个组件的时候，这个组件是不会销毁然后重建的，而是复用，created生命周期不会执行
        // $router: 实际上就是 new VueRouter 得到的对象，它代表来整个应用的路由信息，提供路由公用的配置信息和方法，比如 push
        // $route: 满足当前url而创建的一个对象，这个对表里面存储与当前url匹配的路由信息
        this.$router.push({
          name: 'Main',
          query: {
            page: p
          }
        });
      },

      async getItems() {
        this.page = Number(this.$route.query.page) || 1;
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