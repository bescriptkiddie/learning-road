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
      <div class="pagination">
        <a href class="prev">上一页</a>
        <a href>1</a>
        <a href>2</a>
        <a href>3</a>
        <a href class="current">4</a>
        <a href>5</a>
        <a href>6</a>
        <a href>7</a>
        <a href>8</a>
        <a href class="next">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import {getItems} from '@/api';
import price from '@/filters/price';

export default {
    name: 'Main',
    data() {
        return {
            items: []
        }
    },
    filters: {
        price
    },
    async created() {
        // 登陆了吗？

        let isLogin = !!localStorage.getItem('token');

        // let isLogin = false; //?
        if (!isLogin) {
          this.$router.push({name: 'Login'});
        } else {
          let {data: {items, page, prepage, total}} = await getItems();

          // console.log('items', items);

          this.items = items;
        }
        
    }
}
</script>