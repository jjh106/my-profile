<template>
	<div class="works-wrapper">
		<intro :msg="parentMsg"></intro>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
export default {
  data () {
    return {
			parentMsg: 'work text'
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

