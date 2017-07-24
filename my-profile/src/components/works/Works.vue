<template>
	<div class="works-wrapper">
		<intro :parentMsg="msg"></intro>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
export default {
  data () {
    return {
			msg: 'work text'
    }
	},
	components: {
		Intro
	}
}
</script>

<style scoped>
	.works-wrapper {
		 width: 100%; 
	}
</style>

