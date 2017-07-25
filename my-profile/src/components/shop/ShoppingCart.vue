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
							<button class="inc-btn" @click="inc(item, index)"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
							<button class="dec-btn" @click="dec(item, index)"><i class="fa fa-minus fa-lg" aria-hidden="true"></i></button>
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
				{ id: 1, title: 'classes', price: 50, img: require('../../assets/grafik.jpg') },
				{ id: 2, title: 'basketball', price: 60, img: require('../../assets/ball.jpg') },
				{ id: 3, title: 'Ear Phones', price: 20.99, img: require('../../assets/earphone.jpg') },
				{ id: 4, title: 'HandCream', price: 10.89, img: require('../../assets/handcream.jpg') },
				{ id: 5, title: 'JavaScript', price: 15, img: require('../../assets/javascript-patterns.png') },
				{ id: 6, title: 'macbook', price: 200, img: require('../../assets/macbook.png') },
				{ id: 7, title: 'mug cup', price: 15.89, img: require('../../assets/mug.jpg') },
				{ id: 8, title: 'React', price: 25, img: require('../../assets/react.jpg') }
			],
			cart: [],
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
	.shop-container {
		margin-bottom: 30px;
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
		height: 500px;
	}
	.products {
		width: 60%;
		overflow: auto;
		display: flex;
		flex-flow: row wrap;
	}
	.product {
		width: 49%;
		padding: 20px 20px 10px 20px;
		margin: 0 auto;
		border: 2px solid #2c3e50;
		margin-bottom: 8px;
	}
	.product-flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100px;	
	}
	.product-image {
		width: 100px;
		height: 90px;
		margin-right: 10px;
	}
	.product-text {
		width: 55%;
		text-align: center;
	}
	.product-text h3 {
		font-size: 1.4rem;
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
		padding: 5px 0;
		margin-top: 15px;
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
		width: 40%;
		overflow: auto;
	}
	.total-price {
		position: fixed;
		bottom: 400px;
		right: 1px;
		background: #fff;
		font-size: 1.2rem;
		font-weight: bold;
		color: #2c3e50;
		padding: 30px;
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
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: center;
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
		/* margin: 10px 20px 10px 20px; */
	}
	.item-btn {
		  /* margin: 17px 0 0 0;  */
	}
	.inc-btn {
		border: 2px solid #000;
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