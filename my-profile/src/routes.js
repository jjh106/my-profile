// Load Components
import Navigation from './components/navigation.vue';
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
			gnb: Navigation
		} 
	},
	{ 
		path: '/works',
	  components: {
		  default: Works,
			gnb: Navigation
		} 
	},
	{
		path: '/music',
		components: {
			default: Music,
			gnb: Navigation
		}
	},
	{
		path: '/todo',
		components: {
			default: Todo,
			gnb: Navigation
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