<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="trip-wrapper">
				<ul class="trip-list">
					<li v-for="trip in trips" :key="trip">
						<img :src="trip.img" class="trip-image">
						<h3>{{ trip.title }}</h3>
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
			trips: [
				{ id: 1, title: 'Germany', img: require('../../assets/germany.jpg') },
				{ id: 2, title: 'Japan', img: require('../../assets/japan.jpg') },
				{ id: 3, title: 'Switzerland', img: require('../../assets/switzerland.jpg') },
				{ id: 4, title: 'Austria', img: require('../../assets/austria.jpg') },
				{ id: 5, title: 'France', img: require('../../assets/france.jpg') }
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
	.trip-wrapper {
		overflow: scroll;
		height: 750px;
		margin-top: 10px;
	}
	.trip-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.trip-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.trip-image {
		width: 100%;
	}
</style>
