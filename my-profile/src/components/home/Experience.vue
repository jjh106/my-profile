<template>
	<div>
		<h2 class="experience-heading">Experience</h2>
		<div class="image-wrapper">
			<div class="image-box">
				<div class="image-img">
					<img :src="source1" alt="">
				</div>
				<div class="image-content">
					<p class="image-text">이미지 설명</p>
				</div>
			</div>
			<div class="image-box">
				<div class="image-img">
					<img :src="source2" alt="">
				</div>
				<div class="image-content">
					<p class="image-text">이미지 설명</p>
				</div>
			</div>
			<div class="image-box">
				<div class="image-img">
					<img :src="source3" alt="">
				</div>
				<div class="image-content">
					<p class="image-text">이미지 설명</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {
			source1: '',
			source2: '',
			source3: ''
    }
	},
	created() {
		this.source1 = require('../../assets/github.png')
		this.source2 = require('../../assets/github.png')
		this.source3 = require('../../assets/github.png')
	}
}
</script>

<style scoped>
	.experience-heading {
		text-align: center;
		margin: 30px 0;
		color: #2c3e50;
		font-size: 1.8rem;
	}
	.image-wrapper {
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
		margin: 20px 0 50px 0;
	}
	.image-box {
		position: relative;
		width: 30%;
		margin: 0 20px;
	}
	.image-box img {
		width: 100%;
		padding-top: 25px;
	}
	.image-img {
		width: 100%;
		height: auto;
		transition: all .7s ease-in-out;
	}
	.image-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		background: #000;
		opacity: 0;
		transition: all .7s ease-in-out;
	}
	.image-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-weight: 200;
		color: #fff;
	}
	.image-box:hover .image-content {
		opacity: 0.8;
	}
</style>
