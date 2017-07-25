<template>
	<div class="home-wrapper">
		<intro :parentMsg="msg"></intro>
		<introduction></introduction>
		<experience></experience>
		<interest></interest>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import Introduction from './Introduction.vue'
import Experience from './Experience.vue'
import Interest from './Interest.vue'
export default {
  data () {
    return {
			msg: '간단한 자기소개와 경험, 관심사에 관한 페이지입니다.'
    }
	},
	components: {
		Intro,
		Introduction,
		Experience,
		Interest
	}
}
</script>

<style scoped>
	.home-wrapper {
		width: 100%;
	}
</style>
