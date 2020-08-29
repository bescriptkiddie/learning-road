<template>
  <div class="home">
    <section class="todoapp">

      <Pagination :total="20" :page="1" />

      <hr />

      <select></select>

			<header class="header">
        <!-- 在模板中 ref 的响应式数据不需要使用 value 属性去访问，因为vue内部会在模板解析的时候进行value的结构 -->
				<h1>{{title}} - <!--<button @click="changeN">{{n}}</button>--></h1>
				<input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keydown.enter="addNewTodo" v-model="newTodo">
			</header>

      

			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li class="todo" v-for="todo of todos" :key="todo.id">
						<div class="view">
							<input class="toggle" type="checkbox">
							<label>{{todo.title}}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" type="text" >
					</li>
				</ul>
			</section>
			<footer class="footer" >
				<span class="todo-count">
					<strong></strong> pluralize('item', remaining) left
				</span>
				<ul class="filters">
					<li><a href="#/all" class="selected">All</a></li>
					<li><a href="#/active"  class="selected">Active</a></li>
					<li><a href="#/completed"  class="selected">Completed</a></li>
				</ul>
				<button class="clear-completed">
					Clear completed
				</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Written by <a href="http://evanyou.me">Evan You</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
  </div>
</template>

<script>
/**
 * Vue2
 *  模板中使用的数据来源是有许多地方的
 *    data，computed，methods……
 * 
 * Vue3
 *  模板中使用的数据，需要通过 setup 函数的返回值进行提供
 */

import {
  // 定义对象
  reactive,
  // 定义简单值数据，因为简单值数据不是对象，所以没有办法proxy
  ref,
  toRefs,
  toRef
} from 'vue';
import Pagination from '@/components/Pagination';

export default {
  name: 'Home',

  components: {
    Pagination
  },
  
  setup() {
    // console.log('setup');
    // let n = 1;
    // let n = ref(1);
    // console.log('n', n);
    // console.log('n的值', n.value);

    // const changeN = function() {
    //   n.value++;
    //   console.log(n.value);
    // }

    let id = 3;

    let data = reactive({
      todos: [
        {id: 1, title: 'todo1'},
        {id: 2, title: 'todo2'}
      ],
      visibility: 'all',
      newTodo: ''
    });
    // data = toRefs(data);

    // console.log(data.visibility)

    const addNewTodo = () => {
      console.log('添加新的任务', data.newTodo);
      data.todos.unshift({
        id: id++,
        title: data.newTodo
      });
      data.newTodo = '';
    }

    return {
      title: 'ToDoList',
      // n,
      

      // changeN,

      // ...data,
      // todos: data.todos,
      // visibility: data.visibility

      ...toRefs(data),

      addNewTodo
    }
  }
}
</script>
