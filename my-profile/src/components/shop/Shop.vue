<template>
	<div class="shop-wrapper">
		<intro></intro>
		<div class="shop-container">
			<!-- <form class="searchbar" @submit.prevent="onSubmit">
				<input v-model="search" placeholder="Search for images">
				<input type="submit" value="Search" class="search-btn">
			</form> -->
			<div class="shopping">
				<div class="products">
					<div class="product" v-for="(item, index) in items">
						<h3 class="product-title">{{ item.title }}</h3>
						<img class="product-image" :src="item.img">
						<button @click="addItem(index)" class="go-cart">Add to cart</button>
					</div>
				</div>
				<div class="cart">
					<h2>Shopping Cart</h2>
					<ul>
						<li class="cart-item" v-for="(item, index) in cart">
							<img class="item-image" :src="item.img">
							<div class="item-title">{{ item.title }}</div>
							<span class="item-qty">{{ item.price | currency }} x {{ item.qty }}</span>
							<button class="inc-btn" @click="inc(item, index)">+</button>
							<button class="dec-btn" @click="dec(item, index)">-</button>
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
				{ id: 3, title: 'Item 3', price: 19.89, img: require('../../assets/github.png') }
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
	.shopping {
		display: flex;
		justify-content: space-between;
	}
	.products {
		background: pink;
		width: 70%;
	}
	.product {
		width: 15%;
		background: yellow;
	}
	.product-image {
		width: 100%;
	}
	.cart {
		text-align: center;
		background: skyblue; 
		width: 30%;
	}
	.cart-item {
		list-style: none;
		border-bottom: 1px solid #ddd;
		width: 100%;
	}
	.item-image {
		width: 20%;
	}
</style>