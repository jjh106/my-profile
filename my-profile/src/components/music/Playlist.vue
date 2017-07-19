<template>
	<div class="list-warpper">
		<div class="music">
			<img class="music-cover" src="" alt="">
			<audio src="../../assets/ShapeOfYou.mp3" controls></audio> 
			<div class="music-progress">
				<input type="range"></input>
			</div>
			<div class="music-button">
				<button type="button" class="play-btn">play</button>
				<button type="button" class="pause-btn">pause</button>
				<button type="button" class="stop-btn">stop</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
			// song: ''
    }
	},
	// created() {
	// 	this.song = require('../../assets/ShapeOfYou.mp3')
	// }
}
</script>

<style scoped>
	
</style>
