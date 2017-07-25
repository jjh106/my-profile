<template>
	<div class="shop-wrapper">
		<intro :parentMsg="msg"></intro>
		<shopping-cart></shopping-cart>
	</div>
</template>

<script>
import Intro from '../Intro.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
	data() {
		return {
			msg: '평소에 관심 있는 아이템을 저장해 놓는 장바구니 페이지입니다.'
		}
	},
	components: {
		Intro,
		ShoppingCart
	}
}
</script>

<style scope>
	.shop-wrapper {
		width: 100%;
	}
</style>