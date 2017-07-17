<template>
	<div class="introduction-wrapper">
		<h2 class="introduction-heading">Introduction</h2>
		<div class="image-wrapper">
			<div class="image-box" @click="showPmodal">
				<div class="image-img">
					<img :src="source1" alt="">
				</div>
				<div class="image-content">
					<p class="image-text">my profile</p>
				</div>
			</div>
			<profile-modal v-if="isShowPmodal" @close="hidePmodal"></profile-modal>
			<div class="image-box" @click="showSmodal">
				<div class="image-img">
					<img :src="source2" alt="">
				</div>
				<div class="image-content">
					<p class="image-text">이미지 설명</p>
				</div>
			</div>
			<story-modal v-if="isShowSmodal" @close="hideSmodal"></story-modal>
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
import ProfileModal from './ProfileModal.vue'
import StoryModal from './StoryModal.vue'
export default {
	components: {
		ProfileModal,
		StoryModal
	},
  data () {
    return {
			source1: '',
			source2: '',
			source3: '',
			isShowPmodal: false,
			isShowSmodal: false
    }
	},
	created() {
		this.source1 = require('../../assets/paris.jpg')
		this.source2 = require('../../assets/rio.jpg')
		this.source3 = require('../../assets/san.jpg')
	},
	methods: {
		showPmodal() {
			this.isShowPmodal = true;
		},
		hidePmodal() {
			this.isShowPmodal = false;
		},
		showSmodal() {
			this.isShowSmodal = true;
		},
		hideSmodal() {
			this.isShowSmodal = false;
		}
	}
}
</script>

<style scoped>
	.introduction-wrapper {
		border-bottom: 2px solid #eee;
	}
	.introduction-heading {
		text-align: center;
		margin: 30px 0;
		color: #2c3e50;
		font-size: 1.8rem;
	}
	.image-wrapper {
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
		margin: 20px 80px 50px 80px;
	}
	.image-box {
		position: relative;
		width: 30%;
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
		cursor: pointer;
	}
</style>
