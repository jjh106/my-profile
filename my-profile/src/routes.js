// Load Components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/home/Home.vue';
import Works from './components/works/Works.vue';
import Music from './components/music/Music.vue';
import Todo from './components/todo/Todo.vue';

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
		path: '/music',
		components: {
			default: Music,
			head: Header,
			foot: Footer
		}
	},
	{
		path: '/todo',
		components: {
			default: Todo,
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