<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="land-wrapper">
				<ul class="land-list">
					<li v-for="land in lands" :key="land">
						<h3>{{ land.title }}</h3>
						<img :src="land.img1" class="land-image">
						<img :src="land.img2" class="land-image">
						<img :src="land.img3" class="land-image">
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
				{ id: 1, title: '중국답사', img1: require('../../assets/china1.jpg'), img2: require('../../assets/china2.jpg'), img3: require('../../assets/china3.jpg') },
				{ id: 2, title: '조경박람회', img1: require('../../assets/land1.jpg'), img2: require('../../assets/land2.jpg'), img3: require('../../assets/land3.jpg') },
				{ id: 3, title: '꽃 박람회', img1: require('../../assets/land4.jpg'), img2: require('../../assets/land5.jpg'), img3: require('../../assets/land6.jpg') }
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
		height: 700px;
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
		height: 650px;
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
	.land-list h3 {
		margin-bottom: 10px;
	}
	.land-list img {
		margin-bottom: 10px;
	}
	.land-image {
		width: 100%;
	}
</style>
