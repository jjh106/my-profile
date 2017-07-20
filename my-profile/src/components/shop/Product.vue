<template>
	<div class="product">
		<img :src="'../../assets' + product.image" class="image">
		<p class="title">{{ product.title }}</p>
		<p class="price">
			<span>￦ {{ product.price }}</span>
			<span class="qty" v-if="qtyInCart > 0">x{{qtyInCart}}</span>
		</p>
		<div class="controls">
			<button class="add-btn" @click="addToCart" v-if="qtyInCart === 0">ADD TO CART</button>
			<div v-else>
				<button class="inc" @click="inc">+</button>
				<button class="dec" @click="dec">-</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['product'],
	data() {
		return {
			
		}
	},
	methods: {
		addToCart() {

		},
		inc() {

		},
		dec() {

		}
	},
	computed: {
		qtyInCart() {
			return 0
		}	
	}
}
</script>

<style scope>

</style>