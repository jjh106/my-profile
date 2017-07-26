<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="book-wrapper">
				<ul class="book-list">
					<li v-for="book in books" :key="book">
						<img :src="book.img" class="book-image">
						<h3>{{ book.title }}</h3>
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
			books: [
				{ id: 1, title: '나미야잡화점의 기적', img: require('../../assets/namiya.jpg') },
				{ id: 2, title: '삼국지', img: require('../../assets/sam.jpg') },
				{ id: 3, title: '유성의인연', img: require('../../assets/you.jpg') },
				{ id: 4, title: '백야행', img: require('../../assets/white.jpg') },
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
	.book-wrapper {
		overflow: scroll;
		height: 650px;
		margin-top: 10px;
	}
	.book-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.book-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.book-image {
		width: 100%;
	}
</style>
