<template>
	<div class="music-wrapper">
		<intro></intro>
		 <playlist></playlist> 
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import Playlist from './Playlist.vue'
export default {
  data () {
    return {
    }
	},
	components: {
		Intro,
		Playlist
	}
}
</script>

<style scoped>
	.music-wrapper {
		 width: 100%; 
	}
</style>

