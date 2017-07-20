<template>
	<div class="">
		<div class="">
			<div class="">
				<product v-for="product in products" :product="product"></product>
			</div>
		</div>
		<div class="shopping-cart">
			<cart></cart>
		</div>
	</div>
</template>

<script>
import Cart from './Cart.vue'
import Product from './Product.vue'

export default {
	data() {
		return {
			products: []
		}
	},
	components: {
		Cart,
		Product
	},
	created() {
		// fetch data from server
		var dummy = [
			{ id: 1, title: 'Name of Product 1', price: 40, image: 'product.jpg' },
			{ id: 2, title: 'Name of Product 2', price: 90, image: 'product.jpg' },
			{ id: 3, title: 'Name of Product 3', price: 10, image: 'product.jpg' },
			{ id: 4, title: 'Name of Product 4', price: 20, image: 'product.jpg' },
		];

		this.$set('products', dummy)
	}
}
</script>

<style scope>

</style>