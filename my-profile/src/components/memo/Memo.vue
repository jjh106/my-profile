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
			msg: 'memo text'
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

