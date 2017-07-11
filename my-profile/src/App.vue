<template>
  <div id="app">
		<router-view name="gnb"></router-view>
		<transition name="slide" mode="out-in">
			<router-view></router-view>
		</transition>		
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
	
	a:link, a:visited{
  	text-decoration: none;
		color: black;
	}

	button {
  	background: none;
  	border: 0;
  	cursor: pointer;
  	padding: 0;
  	margin: 0;
		outline: none;
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
			transform: translateX(-100%);
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
			transform: translateX(100%);
			opacity: 1;
		}
	}

	.current-page {
		color: #56c9e2; 
	}

	.gnb li {
	 	list-style: none;
		 display: inline-block;
  }
</style>
