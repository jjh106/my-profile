<template>
	<div class="todo-wrapper">
		<intro></intro>
		<!-- <todo-list></todo-list> -->
		 <todos></todos> 
	</div>
</template>

<script>
import Intro from '../Intro.vue'
// import TodoList from './TodoList.vue'
import Todos from './Todos.vue'
export default {
  data () {
    return {
    }
	},
	components: {
		Intro,
		// TodoList
		Todos
	}
}
</script>

<style scoped>
	.todo-wrapper {
		width: 70%;
	}
</style>

