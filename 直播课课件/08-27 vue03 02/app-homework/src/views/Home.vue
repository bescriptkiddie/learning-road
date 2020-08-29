<template>
  <div class="home">
    <section class="todoapp">

			<header class="header">
				<h1>{{title}}</h1>
				<input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keydown.enter="addNewTodo" v-model="newTodo">
			</header>

      

			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li class="todo" v-for="todo of filteredTodos" :key="todo.id" :class="{completed: todo.completed}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label>{{todo.title}}</label>
							<button class="destroy" @click="removeTodo(todo)"></button>
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
					<li><a @click="changeVisibility('all')" :class="{selected: visibility == 'all'}">All</a></li>
					<li><a @click="changeVisibility('active')" :class="{selected: visibility == 'active'}">Active</a></li>
					<li><a @click="changeVisibility('completed')" :class="{selected: visibility == 'completed'}">Completed</a></li>
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
import useTodoList from '@/uses/TodoList'

export default {
  name: 'Home',
  
  setup() {

    let {
	  todos,
	  visibility,

      allDone,

      filteredTodos,

      newTodo,
	  addNewTodo,
	  changeVisibility,
	  removeTodo
    } = useTodoList();
    
    return {
	  title: 'ToDoList',
	  visibility,

      todos,
      allDone,
      filteredTodos,

      newTodo,
	  addNewTodo,
	  changeVisibility,
	  removeTodo
    }
  }
}
</script>
