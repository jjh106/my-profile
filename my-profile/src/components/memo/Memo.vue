<template>
	<div class="memo-wrapper">
		<intro :msg="parentMsg"></intro>
		 <todo-list></todo-list> 
		 <!-- <memo-list></memo-list>  -->
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import TodoList from './TodoList.vue'
// import MemoList from './MemoList.vue'
export default {
  data () {
    return {
			parentMsg: 'memo text'
    }
	},
	components: {
		Intro,
		TodoList
		// MemoList
	}
}
</script>

<style scoped>
	.memo-wrapper {
		 width: 100%; 
	}
</style>

