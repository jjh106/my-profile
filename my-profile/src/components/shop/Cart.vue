<template>
	<div clas="cart">
		<p class="cart-tile">Shopping Cart</p>
		<p class="cart-empty" v-if="totla === 0">Your Shopping Cart is Empty!</p>
		<div class="items" v-else>
			<div class="item" v-for="item in items">
				<img :src="'../../assets/' + item.image" class="item-image">
				<div class="item-details">
					<p class="item-title">{{ item.title }}</p>
					<p class="item-price">
						<span>x{{item.qty}}</span>
						<span>￦ {{ item.qty * item.price }}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="cart-total">
			<span>Total</span>
			<span>￦ {{ total }}</span>
		</div>
	</div>
</template>

<script>
import Stage from '../../CartStage.js'
export default {
	data() {
		return {
			item: Stage.data.cart
		}
	},
	computed: {
		total() {
			return 0
		}
	}
}
</script>

<style scope>

</style>