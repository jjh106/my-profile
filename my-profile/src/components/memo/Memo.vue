<template>
	<div class="memo-wrapper">
		<intro></intro>
		<!-- <todo-list></todo-list> -->
		 <memo-list></memo-list> 
	</div>
</template>

<script>
import Intro from '../Intro.vue'
// import TodoList from './TodoList.vue'
import MemoList from './MemoList.vue'
export default {
  data () {
    return {
    }
	},
	components: {
		Intro,
		// TodoList
		MemoList
	}
}
</script>

<style scoped>
	.memo-wrapper {
		 width: 100%; 
	}
</style>

