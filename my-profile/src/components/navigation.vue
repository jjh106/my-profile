<template>
	<div class="header">
		<h1>
			<router-link to="/">jjh's profile</router-link>
		</h1>
		<nav class="gnb">
			<ul>
				<li><router-link to="/" active-class="current-page" exact>HOME</router-link></li>
				<li><router-link to="/works" active-class="current-page">WORKS</router-link></li>
				<li><router-link to="/music" active-class="current-page">MUSIC</router-link></li>
				<li><router-link to="/todo" active-class="current-page">TODO</router-link></li>
			</ul>	
		</nav>
	</div>	
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 100px;
		border-bottom: 2px solid #eee;
	}
</style>
