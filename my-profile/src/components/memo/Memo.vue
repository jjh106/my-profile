<template>
	<div class="memo-wrapper">
		<intro :parentMsg="msg"></intro>
		  <memo-list></memo-list>  
	</div>
</template>

<script>
import Intro from '../Intro.vue'

import MemoList from './MemoList.vue'
export default {
  data () {
    return {
			msg: '해야 할 일을 메모하는 페이지입니다.'
    }
	},
	components: {
		Intro,
		MemoList
	}
}
</script>

<style scoped>
	.memo-wrapper {
		 width: 100%; 
	}
</style>

