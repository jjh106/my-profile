// Load Components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/home/Home.vue';
import Works from './components/works/Works.vue';
import Shop from './components/shop/Shop.vue';
import Memo from './components/memo/Memo.vue';

// Route Setting
export const routes = [
	{
		path: '/', name: "home",
		components: {
		  default: Home,
			head: Header,
			foot: Footer
		} 
	},
	{ 
		path: '/works',
	  components: {
		  default: Works,
			head: Header,
			foot: Footer
		} 
	},
	{
		path: '/shop',
		components: {
			default: Shop,
			head: Header,
			foot: Footer
		}
	},
	{
		path: '/memo',
		components: {
			default: Memo,
			head: Header,
			foot: Footer
		}
	},
	// 입력되지 않은 모든 페이지는 home으로 이동
	{
		path: '*',
		redirect: {
			name: 'home'
		}
	}
];