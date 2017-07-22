<template>
	<div class="intro">
		<p>{{ message }}</p>
		<p>{{ msg }}</p>
	</div> 
</template>

<script>
export default {
	props: ['msg'],
  data() {
    return {
			message: "text area1"
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
</style>
