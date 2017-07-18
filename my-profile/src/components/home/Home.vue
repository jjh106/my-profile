<template>
	<div class="home-wrapper">
		<intro></intro>
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
