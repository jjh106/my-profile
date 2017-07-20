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
			<div class="clearfix" v-else>
				<button class="inc" @click="inc">+</button>
				<button class="dec" @click="dec">-</button>
			</div>
		</div>
	</div>
</template>

<script>
import _ from 'lodash'
import Stage from '../../CartStage.js'

export default {
	props: ['product'],
	data() {
		return {
			shared: Stage.data
		}
	},
	methods: {
		addToCart() {
			Stage.add(this.product)
		},
		inc() {
			Stage.inc(this.product)
		},
		dec() {
			Stage.dec(this.product)
		}
	},
	computed: {
		qtyInCart() {
			var found = _.find(this.shared.cart, ['id', this.product.id])
			if( found ) {
				return found.qty
			} else {
				return 0
			}
		}	
	}
}
</script>

<style scope>
	.product {
		float: left;
		width: 25%;
		padding: 0.5em 0.5em;
		max-block-size: 1em;
	}
	.image {

	}
</style>