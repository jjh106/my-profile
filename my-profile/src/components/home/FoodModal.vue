<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="food-wrapper">
				<ul class="food-list">
					<li v-for="food in foods" :key="food">
						<img :src="food.img" class="food-image">
						<h3>{{ food.title }}</h3>
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
			foods: [
				{ id: 1, title: '홍탄', img: require('../../assets/hong.jpg') },
				{ id: 2, title: '부다스 밸리', img: require('../../assets/budas.jpg') },
				{ id: 3, title: '이태원 버뮤다', img: require('../../assets/muda.jpg') },
				{ id: 4, title: '마오', img: require('../../assets/mao.jpg') },
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
	.food-wrapper {
		overflow: scroll;
		height: 650px;
		margin-top: 10px;
	}
	.food-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.food-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.food-image {
		width: 100%;
	}
</style>
