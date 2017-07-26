<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="intern-wrapper">
				<ul class="intern-list">
					<li v-for="intern in interns" :key="intern">
						<h3>{{ intern.title }}</h3>
						<img :src="intern.img1" class="intern-image">
						<img :src="intern.img2" class="intern-image">
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
			interns: [
				{ id: 1, title: '조경 디자인*시공회사 인턴', img1: require('../../assets/in1.jpg'), img2: require('../../assets/in2.jpg') },
				{ id: 2, title: '카페 아르바이트', img1: require('../../assets/brunch.jpg'), img2:require('../../assets/coffee.jpg') },
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
	.intern-wrapper {
		overflow: scroll;
		height: 650px;
		margin-top: 10px;
	}
	.intern-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.intern-list h3 {
		margin-bottom: 10px;
	}
	.intern-list img {
		margin-bottom: 10px;
	}
	.intern-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.intern-image {
		width: 100%;
	}
</style>
