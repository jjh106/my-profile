<template>
  <div id="app">
		<div class="app-wrapper">
			<router-view name="head"></router-view>
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>
			<router-view name="foot"></router-view>		
		</div>
	</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
  *,
  *::before,
  *::after {
		box-sizing: border-box;
	}
	
	html {
		font-size: 16px;
	}

	html,body,div,header,nav,section,aside,article,footer,figure,figcaption,
	ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,fieldset {
		margin:0;
		padding:0;
	}

	 a {
  	text-decoration: none;
		color: #2c3e50;
	} 

	button {
  	background: none;
  	border: 0;
  	cursor: pointer;
  	padding: 0;
  	margin: 0;
		outline: none;
	}

	#app {
		background: #6dacbd;
		display: flex;
		justify-content: center;
		padding-top: 30px;
	}

	.app-wrapper {
		width: 70%;
		/* min-height: 100vh; */
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		background: #f8f8f8;
		padding: 0 70px;
		box-shadow: 2px 2px 4px #3e454c, 2px 2px 30px #3e454c;
		overflow: hidden;
	}

	/* slide animation */
	.slide-enter {
		opacity: 0;
	}
	.slide-enter-active {
		animation: slide-in 0.4s;
	}
	.slide-leave {
		opacity: 1;
	}
	.slide-leave-active {
		animation: slide-out 0.4s;
	}

/* slide-in setting */
	@keyframes slide-in {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	
/* slide-out setting */
	@keyframes slide-out {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
			opacity: 1;
		}
	}

	.current-page {
		color: #ffb03b; 
	}
	
	.gnb li {
	 	list-style: none;
		display: inline-block;
	}
</style>
