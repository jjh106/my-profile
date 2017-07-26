<template>
	<div class="works-wrapper">
		<intro :parentMsg="msg"></intro>
		<project></project>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import Project from './Project.vue'

export default {
  data () {
    return {
			msg: '개발을 공부하면서 간단하게 만들었던 것을 기록하는 페이지입니다.'
    }
	},
	components: {
		Intro,
		Project
	}
}
</script>

<style scoped>
	.works-wrapper {
		 width: 100%; 
	}
</style>

