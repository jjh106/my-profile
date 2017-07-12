<template>
	<div class="intro">
		<p>{{message1}}</p>
		<p>{{message2}}</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
			message1: "프론트엔드 개발자를 꿈꾸는 정재호의 프로필입니다.",
			message2: "이 페이지에서는 간단한 이력, 정보, 취미에 대해 소개합니다."
    }
	}
}
</script>

<style scoped>
	.intro {
		font-size: 2rem;
		padding: 200px 300px 200px 0px;
		font-weight: bold;
		color: #2c3e50;
		border-bottom: 2px solid #eee;
	}
</style>
