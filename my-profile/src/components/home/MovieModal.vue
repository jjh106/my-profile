<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="movie-wrapper">
				<ul class="movie-list">
					<li v-for="movie in movies" :key="movie">
						<img :src="movie.img" class="movie-image">
						<h3>{{ movie.title }}</h3>
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
			movies: [
				{ id: 1, title: '007', img: require('../../assets/007.jpg') },
				{ id: 2, title: 'Spider Man', img: require('../../assets/spiderman.jpg') },
				{ id: 3, title: 'Inception', img: require('../../assets/inception.jpg') },
				{ id: 4, title: 'Mission Impossible', img: require('../../assets/impossible.jpg') },
				{ id: 5, title: 'Intern', img: require('../../assets/intern.jpg') }
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
	.movie-wrapper {
		overflow: scroll;
		height: 650px;
		margin-top: 10px;
	}
	.movie-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.movie-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.movie-image {
		width: 100%;
	}
</style>
