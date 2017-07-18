<template>
	<div class="interest-wrapper">
		<h2 class="interest-heading">Interest</h2>
		<div class="image-wrapper">
			<div class="basketball-image" :style="{ backgroundImage: 'url(' + source1 + ')' }" @click="showPmodal"></div>
			<profile-modal v-if="isShowPmodal" @close="hidePmodal"></profile-modal>
			<div class="trip-image" :style="{ backgroundImage: 'url(' + source2 + ')' }" @click="showSmodal"></div>
			<story-modal v-if="isShowSmodal" @close="hideSmodal"></story-modal>
			<div class="movie-image" :style="{ backgroundImage: 'url(' + source3 + ')' }"></div>
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
	/* .interest-wrapper {
		border-bottom: 1px solid #ccc;
	} */
	.interest-heading {
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

	.basketball-image::after {
		content: 'Click!! My Profile';
	}

	.trip-image::after {
		content: 'Click!! My Story';
	}

	.movie-image::after {
		content: 'Mountain';
	}

	.trip-image {
		 margin: 0 30px; 
	}
</style>
