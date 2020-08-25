<template>
  <div class="home">
    <h2>Home</h2>
    <div>
      仓库中的title：{{$store.state.title}}
    </div>

    <div>
      {{title}} - {{val}}
      <ul>
        <li>{{zMouse.name}}</li>
        <li>{{zMouse.gender}}</li>
      </ul>
      <p>{{user}}</p>

      <p>titleUser: {{titleUser}}</p>

      <h3>修改数据</h3>
      <button @click="editTitle">修改title</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Home',

  // data() {
  //   return {
  //     title: this.$store.state.title
  //   }
  // },

  // computed: {
  //   title() {
  //     return this.$store.state.title;
  //   },
  //   user() {
  //     return this.$store.state.user;
  //   }
  // },

  // computed: mapState(['title', 'user']),

  // computed: {
  //   val() {
  //     return 100
  //   },
  //   ...mapState(['title', 'user'])
  // },

  // computed: {
  //   val() {
  //     return 100
  //   },
  //   ...mapState({
  //     title: 'title',
  //     zMouse: 'user'
  //   })
  // },

  computed: {
    val() {
      return 100
    },
    ...mapState({
      title: 'title',
      zMouse: 'user',
      user(state) {
        // console.log(123);
        return state.user.name + '/' + state.user.gender;
      }
    }),
    titleUser() {
      return this.$store.getters.titleUser;
    }
  },

  methods: {
    // mapActions: ['editTitle'],
    async editTitle() {
      // 不要直接修改，不是没效果，而是这样会让数据比较乱
      // this.$store.state.title = '新的开课吧';

      // 类似组件的 $emit
      // await this.$store.commit('editTitle', '新的开课吧');
      
      // 提交了commit以后，组件中可能需要根据提交后的结果去做一些处理，比如显示修改信息（成功了，失败了，这个提示视图有关，那么这个逻辑代码就不方便放在store去做了, this.$message('修改成功')）

      // 如果修改的过程是同步的，那么这里也是可以直接去访问的
      // console.log(this.$store.state.title);


      // action => dispatch
      await this.$store.dispatch('editTitle', '新的开课吧');

      console.log(this.$store.state.title);
    }
  }
}


// function mapState(keys) {
//   return keys.map( key => {
//     return {
//       key,
//       val() {
//         return this.$store.state[key];
//       }
//     }
//   } ).reduce( (prev, current) => {
//     prev[current.key] = current.value;
//     return prev;
//   }, {} )
// }

// [
//   {
//     key: 'title',
//     val: function(){return this.$store.state.title}
//   },
//   {
//     key: 'user',
//     val: function(){return this.$store.state.user}
//   }
// ]

// {
//   title() {

//   },
//   user() {

//   }
// }
</script>
