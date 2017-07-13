<template>
	<div class="intro">
		<p>{{message1}}</p>
		<p>{{message2}}</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
			message1: "text area1",
			message2: "text area2"
    }
	}
}
</script>

<style scoped>
	.intro {
		font-size: 2rem;
		padding: 200px 300px 200px 0px;
		font-weight: bold;
		color: #2c3e50;
		border-bottom: 2px solid #eee; 
	}
</style>
