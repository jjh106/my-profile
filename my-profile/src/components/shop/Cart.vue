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
import _ from 'lodash'

export default {
	data() {
		return {
			items: Stage.data.cart
		}
	},
	computed: {
		total() {
			return _.sumby(this.items, function(item) {
				return (item.price * item.qty)
			})
		}
	}
}
</script>

<style scope>
	.cart {
		margin-left: 1em;
	}
	.cart-title {
		margin: 0.5em 0 0 0;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		padding: 0.75em;
		background: #35495e;
		color: #fff;
	}
	.cart-empty {
		text-align: center;
		margin: 4em 0 0 0;
		min-height: 300px;
	}
	.cart-total {
		background: #f1f1f1;
		margin: 0;
		padding: 0.75em;
	}
	.items {
		min-height: 300px;
	}
</style>