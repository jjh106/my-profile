<template>
	<div class="interest-wrapper">
		<h2 class="interest-heading">Interest</h2>
		<div class="image-wrapper">
			<div class="basketball-image" :style="{ backgroundImage: 'url(' + source1 + ')' }"></div>
			<div class="trip-image" :style="{ backgroundImage: 'url(' + source2 + ')' }" @click="showTmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<trip-modal v-if="isShowTmodal" @close="hideTmodal"></trip-modal>
			<div class="movie-image" :style="{ backgroundImage: 'url(' + source3 + ')' }" @click="showMmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<movie-modal v-if="isShowMmodal" @close="hideMmodal"></movie-modal>
			<div class="book-image" :style="{ backgroundImage: 'url(' + source4 + ')' }" @click="showBmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<book-modal v-if="isShowBmodal" @close="hideBmodal"></book-modal>
			<div class="game-image" :style="{ backgroundImage: 'url(' + source5 + ')' }" @click="showGmodal"><i class="fa fa-plus plus-plus fa-2x " aria-hidden="true"></i></div>
			<game-modal v-if="isShowGmodal" @close="hideGmodal"></game-modal>
			<div class="food-image" :style="{ backgroundImage: 'url(' + source6 + ')' }" @click="showFmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<food-modal v-if="isShowFmodal" @close="hideFmodal"></food-modal>
			<div class="soccer-image" :style="{ backgroundImage: 'url(' + source7 + ')' }"></div>
			<div class="web-image" :style="{ backgroundImage: 'url(' + source8 + ')' }" @click="showWmodal"><i class="fa fa-plus plus-plus fa-2x" aria-hidden="true"></i></div>
			<web-modal v-if="isShowWmodal" @close="hideWmodal"></web-modal>
		</div>
	</div>
</template>

<script>
import TripModal from './TripModal.vue'
import MovieModal from './MovieModal.vue'
import BookModal from './BookModal.vue'
import GameModal from './GameModal.vue'
import FoodModal from './FoodModal.vue'
import WebModal from './WebModal.vue'

export default {
  data () {
    return {
			isShowTmodal: false,
			isShowMmodal: false,
			isShowBmodal: false,
			isShowGmodal: false,
			isShowFmodal: false,
			isShowWmodal: false
    }
	},
	created() {
		this.source1 = require('../../assets/curry.jpg')
		this.source2 = require('../../assets/san.jpg')
		this.source3 = require('../../assets/cinema.jpg')
		this.source4 = require('../../assets/book.jpg')
		this.source5 = require('../../assets/game.jpg')
		this.source6 = require('../../assets/food2.jpg')
		this.source7 = require('../../assets/soccer.jpg')
		this.source8 = require('../../assets/frontend.jpg')
	},
	components: {
		TripModal,
		MovieModal,
		BookModal,
		GameModal,
		FoodModal,
		WebModal
	},
	methods: {
		showTmodal() {
			this.isShowTmodal = true;
		},
		hideTmodal() {
			this.isShowTmodal = false;
		},
		showMmodal() {
			this.isShowMmodal = true;
		},
		hideMmodal() {
			this.isShowMmodal = false;
		},
		showBmodal() {
			this.isShowBmodal = true;
		},
		hideBmodal() {
			this.isShowBmodal = false;
		},
		showGmodal() {
			this.isShowGmodal = true;
		},
		hideGmodal() {
			this.isShowGmodal = false;
		},
		showFmodal() {
			this.isShowFmodal = true;
		},
		hideFmodal() {
			this.isShowFmodal = false;
		},
		showWmodal() {
			this.isShowWmodal = true;
		},
		hideWmodal() {
			this.isShowWmodal = false;
		}
	}
}
</script>

<style scoped>
	.interest-heading {
		text-align: center;
		margin: 30px 0;
		color: #2c3e50;
		font-size: 2.3rem;
	}
	.image-wrapper {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		margin-bottom: 30px;
	}

	[class*="-image"] {
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 23%;
		padding-bottom: 18%;
		/* border-radius: 5px;  */
	}

	[class*="-image"]::after {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #000;
		font-size: 1.3rem;
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
		content: '농구';
	}
	.basketball-image {
		margin-bottom: 5px;
	}

	.trip-image::after {
		content: '여행';
	}
	.trip-image {
		margin: 0 5px 5px 5px;
		position: relative;
	}
	.plus-plus {
		position: absolute;
		top: 10px;
		right: 10px;
		color: #fff;
	}
	.movie-image::after {
		content: '영화';
	}
	.movie-image {
		margin: 0 5px 5px 0;
	}
	
	.book-image::after {
		content: '책';
	}
	.book-image {
		margin-bottom: 5px;
	}

	.game-image::after {
		content: '게임';
	}
	.game-image {
		margin-bottom: 5px;
	}

	.food-image::after {
		content: '맛집';
	}
	.food-image {
		margin: 0 5px 5px 5px;
	}

	.soccer-image::after {
		content: '축구';
	}
	.soccer-image {
		margin: 0 5px 5px 0;
	}

	.web-image::after {
		content: 'Front end';
	}
	.web-image {
		margin-bottom: 5px;
	}
</style>
