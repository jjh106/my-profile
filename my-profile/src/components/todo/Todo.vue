<template>
	<div class="todo-wrapper">
		<intro></intro>
		<todo-list></todo-list>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import TodoList from './TodoList.vue'
export default {
  data () {
    return {
    }
	},
	components: {
		Intro,
		TodoList
	}
}
</script>

<style scoped>
	.todo-wrapper {
		width: 70%;
	}
</style>

