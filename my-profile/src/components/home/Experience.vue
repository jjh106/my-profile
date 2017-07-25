<template>
	<div class="experience-wrapper">
		<h2 class="experience-heading">Experience</h2>
		<div class="image-wrapper">
			<div class="major-image" :style="{ backgroundImage: 'url(' + source1 + ')' }" @click="showLmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<land-modal v-if="isShowLmodal" @close="hideLmodal"></land-modal>
			<div class="intern-image" :style="{ backgroundImage: 'url(' + source2 + ')' }" @click="showImodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<intern-modal v-if="isShowImodal" @close="hideImodal"></intern-modal>
			<div class="fds-image" :style="{ backgroundImage: 'url(' + source3 + ')' }"></div>
		</div>
	</div>
</template>

<script>
import LandModal from './LandModal.vue'
import InternModal from './InternModal.vue'

export default {
  data () {
    return {
			isShowLmodal: false,
			isShowImodal: false
    }
	},
	created() {
		this.source1 = require('../../assets/land.jpg')
		this.source2 = require('../../assets/coffee.jpg')
		this.source3 = require('../../assets/fds.jpg')
	},
	components: {
		LandModal,
		InternModal
	},
	methods: {
		showLmodal() {
			this.isShowLmodal = true;
		},
		hideLmodal() {
			this.isShowLmodal = false;
		},
		showImodal() {
			this.isShowImodal = true;
		},
		hideImodal() {
			this.isShowImodal = false;
		}
	}
}
</script>

<style scoped>
	.experience-wrapper {
		border-bottom: 1px solid #ccc;
	}
	.experience-heading {
		text-align: center;
		margin: 30px 0;
		color: #2c3e50;
		font-size: 2.3rem;
	}
	.image-wrapper {
		display: flex;
		justify-content: center;
		flex-flow: row nowrap;
		margin-bottom: 30px;
	}

	[class*="-image"] {
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 30%;
		padding-bottom: 25%;
		 border-radius: 5px; 
	}

	[class*="-image"]::after {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #000;
		font-size: 1.6rem;
		color: #fff;
		opacity: 0; 
		 border-radius: 5px; 
		cursor: pointer;
	}

	[class*="-image"]:hover::after {
		opacity: 0.8;
		transition: all .4s ease-in-out;
	}

	.major-image::after {
		content: '조경학과 졸업';
		font-size: 1.2rem;
	}

	.intern-image::after {
		content: '아르바이트 & 인턴';
		font-size: 1.2rem;
	}

	.fds-image::after {
		content: '패스트캠퍼스 프론트엔드스쿨3기 수료';
		font-size: 1.2rem;
	}

	.intern-image {
		margin: 0 30px;
		position: relative;
	}
	.plus-plus {
		position: absolute;
		top: 10px;
		right: 10px;
		color: #fff;
	}
</style>
