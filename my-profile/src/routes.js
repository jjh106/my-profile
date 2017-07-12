// Load Components
import Navigation from './components/Navigation.vue';
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
			gnb: Navigation,
			foot: Footer
		} 
	},
	{ 
		path: '/works',
	  components: {
		  default: Works,
			gnb: Navigation,
			foot: Footer
		} 
	},
	{
		path: '/music',
		components: {
			default: Music,
			gnb: Navigation,
			foot: Footer
		}
	},
	{
		path: '/todo',
		components: {
			default: Todo,
			gnb: Navigation,
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