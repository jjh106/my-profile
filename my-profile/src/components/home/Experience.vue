<template>
	<div class="experience-wrapper">
		<h2 class="experience-heading">Experience</h2>
		<div class="image-wrapper">
			<div class="major-image" :style="{ backgroundImage: 'url(' + source1 + ')' }"></div>
			<div class="intern-image" :style="{ backgroundImage: 'url(' + source2 + ')' }"></div>
			<div class="fds-image" :style="{ backgroundImage: 'url(' + source3 + ')' }"></div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
	},
	created() {
		this.source1 = require('../../assets/land.jpg')
		this.source2 = require('../../assets/coffee.jpg')
		this.source3 = require('../../assets/fds.jpg')
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
		content: '아르바이트';
		font-size: 1.2rem;
	}

	.fds-image::after {
		content: '패스트캠퍼스 프론트엔드스쿨';
		font-size: 1.2rem;
	}

	.intern-image {
		margin: 0 30px;
	}
</style>
