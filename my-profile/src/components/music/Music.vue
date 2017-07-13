<template>
	<div class="music-wrapper">
		<intro></intro>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
export default {
  data () {
    return {
    }
	},
	components: {
		Intro
	}
}
</script>

<style scoped>
	.music-wrapper {
		width: 70%;
	}
</style>

