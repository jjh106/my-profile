<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="land-wrapper">
				<ul class="land-list">
					<li v-for="land in lands" :key="land">
						<img :src="land.img" class="land-image">
						<h3>{{ land.title }}</h3>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {
			lands: [
				{ id: 1, title: 'FIFA18', img: require('../../assets/fifa.jpg') },
				{ id: 2, title: 'Battle Ground', img: require('../../assets/battleground.jpg') },
				{ id: 3, title: 'OverWatch', img: require('../../assets/overwatch.jpg') },
				{ id: 4, title: 'League of Legends', img: require('../../assets/lol.jpg') }
			]
    }
	}
}
</script>

<style scoped>
	.modal-dim {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(32, 32, 32, 0.9);
	}
	.modal-window {
		width: 500px;
		height: 800px;
		padding: 15px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
		background: rgba(44, 62, 80, 0.9);
		color: #fff;
	}
	.modal-close-btn {
		position: absolute;
		right: -18px;
		top: -18px;
		display: inline-block;
		padding: 3px;
		cursor: pointer;
		outline: none;
	}
	.fa-times-circle {
		color: #ffb03b;
	}
	.land-wrapper {
		overflow: scroll;
		height: 750px;
		margin-top: 10px;
	}
	.land-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.land-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.land-image {
		width: 100%;
	}
</style>
