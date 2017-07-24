<template>
	<div class="shop-container">
		<h2 class="shop-heading">Shopping Cart</h2>
		<div class="shopping">
			<div class="products">
				<div class="product" v-for="(item, index) in items" :key="item">
					<div class="product-flex">
						<img class="product-image" :src="item.img">
						<div class="product-text">
							<h3 class="product-title">{{ item.title }}</h3>
							<span>{{ item.price | currency }}</span>
						</div>
					</div>
					<button @click="addItem(index)" class="go-cart"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></button>
				</div>
			</div>
			<div class="cart">
				<h2>Cart</h2>
				<ul>
					<li class="cart-item" v-for="(item, index) in cart" :key="item">
						<img class="item-image" :src="item.img">
						<div class="item-text">
							<div class="item-title">{{ item.title }}</div>
							<p class="item-qty">{{ item.price | currency }} x {{ item.qty }}</p>
						</div>
						<div class="item-btn">
							<button class="inc-btn" @click="inc(item, index)"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button>
							<button class="dec-btn" @click="dec(item, index)"><i class="fa fa-minus fa-2x" aria-hidden="true"></i></button>
						</div>
					</li>
				</ul>
				<div v-if="cart.length" class="total-price">
					<div>Total: {{ total | currency }}</div>
				</div>
				<p v-else class="empty-cart">
					No items in the cart!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			total: 0,
			items: [
				{ id: 1, title: 'Item 1', price: 15, img: require('../../assets/github.png') },
				{ id: 2, title: 'Item 2', price: 10.99, img: require('../../assets/github.png') },
				{ id: 3, title: 'Item 3', price: 19.89, img: require('../../assets/github.png') },
				{ id: 4, title: 'Item 4', price: 99.99, img: require('../../assets/github.png') },
				{ id: 5, title: 'Item 5', price: 50, img: require('../../assets/github.png') },
				{ id: 6, title: 'Item 6', price: 45, img: require('../../assets/github.png') },
				{ id: 7, title: 'Item 7', price: 30, img: require('../../assets/github.png') },
				{ id: 8, title: 'Item 8', price: 20, img: require('../../assets/github.png') }
			],
			cart: [],
			search: ''
		}
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
		// -버튼을 누르다 0이 되는 순간 cart 배열에서 삭제시킨다. 어렵네;;
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
		height: 500px;
	}
	.products {
		width: 50%;
		/* background: pink; */
		overflow: auto;
		display: flex;
		flex-flow: row wrap;
		/* border-right: 2px solid #ddd; */
	}
	.product {
		width: 47%;
		padding: 20px;
		margin: 0 auto;
		border: 1px solid #2c3e50;
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
		color: #2c3e50;
	}
	.product-text span {
		font-size: 1.1rem;
		color: #f0788c;
		font-weight: 600;
	}
	.go-cart {
		width: 100%;
		border: 2px solid #2c3e50;
		padding: 10px 0;
		margin-top: 10px;
		font-size: 1rem;
		border-radius: 10px; 
	}
	.fa-cart-plus {
		color: #2c3e50;
	}
	.go-cart:hover {
		background: #2c3e50;
		transition: all .3s;
	}
	.go-cart:hover .fa-cart-plus {
		color: #f0788c;
		transition: all .3s;
	}
	.cart {
		text-align: center;
		height: auto;
		width: 50%;
		overflow: auto;
	}
	.total-price {
		position: fixed;
		bottom: 400px;
		right: 32px;
		background: #fff;
		font-size: 1.2rem;
		font-weight: bold;
		color: #2c3e50;
		padding: 50px;
		border-radius: 5px;
	}
	.cart h2 {
		color: #2c3e50;
		margin-bottom: 10px;
		font-size: 1.7rem;
	}
	.empty-cart {
		margin-top: 150px;
		font-size: 1.5rem;
	}
	.cart-item {
		list-style: none;
		background: #fff;
		margin: 10px auto;
		border-radius: 10px;
		padding: 10px;
		box-shadow: 2px 2px 4px #bbb, 4px 4px 8px #bbb;
		width: 75%;
		display: flex;
		justify-content: center;
	}
	.item-image {
		width: 80px;
		height: 65px;
	}
	.item-title {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.item-qty {
		color: #f0788c;
		font-weight: 600;
	}
	.item-text {
		margin: 10px 20px 10px 20px;
	}
	.item-btn {
		 padding: 17px 10px 0 10px;
	}
	.inc-btn {
		border: 2px solid #000;
		margin-right: 5px;
		padding: 3px 5px;
		border-radius: 5px;
	}
	.dec-btn {
		border: 2px solid #000;
		padding: 3px 5px;
		border-radius: 5px;
	}
	.inc-btn:focus {
		background: #f0788c;
	}
	.dec-btn:focus {
		background: #f0788c;
	}
</style>