<template>
	<div class="modal-dim">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<div class="profile-wrapper">
				<div class="profile-image">
					<img :src="source" alt="증명사진">
				</div>
				<div class="profile-content">
					<span>이 &nbsp; 름 : 정재호 </span>
					<span>나 &nbsp; 이 : 27세 </span>
					<span>거주지 : 서울특별시 중랑구 상봉동 </span>
					<span>깃허브 : <a href="https://github.com/jjh106" target="_blank">http://github.com/jjh106</a></span>
					<span>이메일 : wjdwo0106@gmail.com</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {
			source: ''
    }
	},
	created() {
		this.source = require('../../assets/github.png')
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

	.profile-wrapper {
		display: flex;
		flex-flow: row nowrap;
	}

	.profile-image {
		width: 30%;
		margin: 0 0 0 20px;
	}

	.profile-image img {
		width: 100%;
		margin: 0 0 0 15px;
	}

	.profile-content {
		display: flex;
		width: 55%;
		line-height: 1.5;
		margin: 0 0 0 35px;
		flex-flow: column wrap;
	}

	.profile-content a {
		color: #f24c27;
	}
</style>
