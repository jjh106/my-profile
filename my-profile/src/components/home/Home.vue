<template>
	<div class="home-wrapper">
		<intro></intro>
		<experience></experience>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import Experience from './Experience.vue'
export default {
  data () {
    return {

    }
	},
	components: {
		Intro,
		Experience
	}
}
</script>

<style scoped>
	.home-wrapper {
		width: 70%;
	}
</style>
