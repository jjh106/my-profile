<template>
	<div class="header">
		<h1>
			<router-link to="/">JAEHO JEONG</router-link>
		</h1>
		<nav class="gnb">
			<ul>
				<li><router-link to="/" active-class="current-page" exact>HOME</router-link></li>
				<li><router-link to="/works" active-class="current-page">WORKS</router-link></li>
				<li><router-link to="/music" active-class="current-page">MUSIC</router-link></li>
				<li><router-link to="/memo" active-class="current-page">MEMO</router-link></li>
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
		margin: 30px 0 30px 0;
		 width: 100%; 
		border-bottom: 1px solid #ccc;
		font-weight: 700;
		font-size: 1.1rem;
		padding-bottom: 15px;
	}
	
	.gnb li {
		margin-left: 25px;
	}
</style>
