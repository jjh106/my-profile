<template>
	<div class="intro">
		<p>{{ message }}</p>
		<p class="parent-msg">{{ parentMsg }}</p>
	</div> 
</template>

<script>
export default {
	props: ['parentMsg'],
  data() {
    return {
			message: "나를 소개하는 장소"
    }
	}
}
</script>

<style scoped>
	.intro {
		font-size: 2rem;
		padding: 90px 300px 200px 80px;
		font-weight: bold;
		color: #2c3e50;
		border-bottom: 1px solid #ccc; 
	}
	.parent-msg {
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 10px;
	}
</style>
