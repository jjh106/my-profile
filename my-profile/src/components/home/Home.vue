<template>
	<div class="home-wrapper">
		<intro></intro>
		<introduction></introduction>
		<experience></experience>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import Introduction from './Introduction.vue'
import Experience from './Experience.vue'
export default {
  data () {
    return {

    }
	},
	components: {
		Intro,
		Introduction,
		Experience
	}
}
</script>

<style scoped>
	.home-wrapper {
		width: 70%;
	}
</style>
