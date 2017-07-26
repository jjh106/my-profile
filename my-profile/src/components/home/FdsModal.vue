<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="fds-wrapper">
				<ul class="fds-list">
					<li v-for="fds in fdss" :key="fds">
						<img :src="fds.img" class="fds-image">
						<h3>{{ fds.title }}</h3>
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
			fdss: [
				{ id: 1, title: '네트워킹 세션', img: require('../../assets/fds1.jpg') },
				{ id: 2, title: '팀 프로젝트 MVP 계획', img: require('../../assets/fds2.jpg') },
				{ id: 3, title: 'ios,안드로이드,백엔드,프론트엔드 팀 미팅', img: require('../../assets/fds3.jpg') }
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
	.fds-wrapper {
		overflow: scroll;
		height: 650px;
		margin-top: 10px;
	}
	.fds-list {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	.fds-list h3 {
		margin-bottom: 10px;
	}
	.fds-list img {
		margin-bottom: 10px;
	}
	.fds-list li {
		width: 100%;
		overflow: auto;
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.fds-image {
		width: 100%;
	}
</style>
