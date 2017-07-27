<template>
	<div class="project-wrapper">
		<ul class="project-list">
			<li v-for="item in items" :key="item">
				<img :src="item.img" class="project-image">
				<div class="project-content">
					<a class="project-title" :href="item.project" target="_blank">{{ item.title }}</a>
					<p class="project-desc">{{ item.desc }}</p>
					<a class="project-repo" :href="item.github" target="_blank">repository로 이동</a>
				</div>
			</li>
		</ul>
	</div>	
</template>

<script>
export default {
	data() {
		return { 
			items: [
				{ img: require('../../assets/folio.jpg'), title: 'Folio [click!]', desc: '반응형 웹 페이지 연습', project: 'https://jjh106.github.io/MiniProject/folio/index.html', github: 'https://github.com/jjh106/MiniProject/tree/gh-pages/folio' },
				{ img: require('../../assets/kardoc.jpg'), title: 'kardoc', desc: 'vue.js를 이용한 프로젝트', project: '', github: 'https://github.com/jjh106/team6_FDS' },
				{ img: require('../../assets/blokk.jpg'), title: 'blokk [click!]', desc: '레이아웃 연습', project: 'https://jjh106.github.io/MiniProject/wireframe/index.html', github: 'https://github.com/jjh106/MiniProject/tree/gh-pages/wireframe' },
				{ img: require('../../assets/variable.jpg'), title: 'javascript30', desc: '토요일 스터디모임에서 진행하는 공부자료', project: '', github: 'https://github.com/jjh106/saturdayJS' },
				{ img: require('../../assets/clock.jpg'), title: 'clock [click!]', desc: '자바스크립트로 구현한 전자시계', project: 'https://jjh106.github.io/MiniProject/clock/index.html', github: 'https://github.com/jjh106/MiniProject#clock' }
			]	 
	  }
	}
}	
</script>

<style scope>
	.project-wrapper {
		display: flex;
		justify-content: center;	
	}
	.project-list {
		list-style: none;
		width: 100%;
	}
	.project-list li {
		width: 80%;
		color: #2c3e50;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		line-height: 2;
		margin: 15px auto;
		box-shadow: 2px 2px 4px #bbb, 4px 4px 8px #bbb;
		border-radius: 10px;
	}
	.project-image {
		width: 22%;
		height: 150px;
		border-radius: 50%;
		margin: 10px 50px 10px 100px;
	}
	.project-title {
		font-weight: bold;
		font-size: 1.3rem;
	}
	.project-repo {
		font-weight: 600;
		color: #f0788c;
	}
</style>
