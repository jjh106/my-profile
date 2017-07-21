<template>
	<div class="shop-wrapper">
		<intro></intro>
		<div class="shop-container">
			<h2 class="shop-heading">Shopping Cart</h2>
			<div class="shopping">
				<div class="products">
					<div class="product" v-for="(item, index) in items">
						<div class="product-flex">
							<img class="product-image" :src="item.img">
							<div class="product-text">
								<h3 class="product-title">{{ item.title }}</h3>
								<span>{{ item.price | currency }}</span>
							</div>
						</div>
						<button @click="addItem(index)" class="go-cart">Add to cart</button>
					</div>
				</div>
				<div class="cart">
					<h2>Cart</h2>
					<ul>
						<li class="cart-item" v-for="(item, index) in cart">
							<img class="item-image" :src="item.img">
							<div class="item-text">
								<div class="item-title">{{ item.title }}</div>
								<p class="item-qty">{{ item.price | currency }} x {{ item.qty }}</p>
								<button class="inc-btn" @click="inc(item, index)">+</button>
								<button class="dec-btn" @click="dec(item, index)">-</button>
							</div>
						</li>
					</ul>
					<div v-if="cart.length">
						<div>Total: {{ total | currency }}</div>
					</div>
					<div v-else class="empty-cart">
						"No items in the cart!"
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Intro from '../Intro.vue'

// const PRICE = 100;

export default {
	data() {
		return {
			total: 0,
			items: [
				{ id: 1, title: 'Item 1', price: 15, img: require('../../assets/github.png') },
				{ id: 2, title: 'Item 2', price: 9.99, img: require('../../assets/github.png') },
				{ id: 3, title: 'Item 3', price: 19.89, img: require('../../assets/github.png') },
				{ id: 4, title: 'Item 4', price: 9.99, img: require('../../assets/github.png') },
				{ id: 5, title: 'Item 5', price: 50, img: require('../../assets/github.png') },
				{ id: 6, title: 'Item 6', price: 45, img: require('../../assets/github.png') },
				{ id: 7, title: 'Item 7', price: 30, img: require('../../assets/github.png') },
				{ id: 8, title: 'Item 8', price: 20, img: require('../../assets/github.png') }
			],
			cart: [],
			search: ''
		}
	},
	components: {
		Intro
	},
	methods: {
		addItem(index) {
			var item = this.items[index];
			var found = false;
			this.total += item.price;

			for( var i=0; i<this.cart.length; i++ ) {
				if( this.cart[i].id === item.id ) {
					found = true;
					this.cart[i].qty++;
					break;
				}
			}

			if( !found ) {
				this.cart.push({
					id: item.id,
					title: item.title,
					qty: 1,
					price: item.price,
					img: item.img
				}); 
			}
		},
		inc(item, index) {
			item.qty++;
			this.total += this.cart[index].price;
		},
		// - 버튼을 누르다 0이 되는 순간 cart 배열에서 삭제시킨다. 어렵네;;
		dec(item, index) {
			item.qty--;
			this.total -= this.cart[index].price;
			if( item.qty <= 0 ) {
				for( var i=0; i<this.cart.length; i++ ) {
					if( this.cart[i].id === item.id ) {
						this.cart.splice(i, 1); 
						break;
					}
				}
			}
		}
	},
	filters: {
		currency(price) {
			return '$'.concat(price.toFixed(2));
		}
	}
}
</script>

<style scope>
	.shop-wrapper {
		width: 100%;
	}
	.shop-heading {
		text-align: center;	
		margin: 30px 0;
		color: #2c3e50;
		font-size: 2.3rem;
	}
	.shopping {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		overflow: scroll;
		height: 750px;
	}
	.products {
		width: 50%;
		/* background: pink; */
		display: flex;
		flex-flow: row wrap;
		border-right: 2px solid #ddd;
	}
	.product {
		width: 49%;
		padding: 0 20px;
		margin: 0 auto;
		/* background: yellow; */
		margin-bottom: 15px;
	}
	.product-flex {
		display: flex;
		width: 100%;
		height: 100px;	
	}
	.product-image {
		width: 50%;
	}
	.product-text {
		width: 50%;
		padding: 20px 0 0 0;
		text-align: center;
	}
	.product-text h3 {
		font-size: 1.7rem;
	}
	.product-text span {
		font-size: 1.1rem;
	}
	.go-cart {
		width: 100%;
		background: blue;
		padding: 15px 0;
		margin-top: 10px;
		font-size: 1.3rem;
	}
	.cart {
		text-align: center;
		background: skyblue; 
		width: 50%;
	}
	.cart h2 {
		color: #2c3e50;
		margin-bottom: 30px;
	}
	.cart-item {
		list-style: none;
		border-bottom: 1px solid #ddd;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.item-image {
		width: 80px;
		height: 65px;
		background: red;
	}
	.item-title {

	}
	.item-text {
		background: yellow;
		margin-left: 20px;
	}
</style>