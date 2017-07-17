<template>
	<div class="modal-dim" @click="$emit('close')">
		<div class="modal-window">
			<button class="modal-close-btn" type="button" @click="$emit('close')"><i class="fa fa-times-circle fa-3x" aria-hidden="true"></i></button>
			<p>fdsfadsfsdfadsfsadfasfasfasfasdfsadfsdfsadfdsfaas
				fsadfsadfsdafsadfsdffsdfsdafsdafsdafasdfdsfsafsadf
				afsdfsdafsdfsdfsdafsadfsadfsadfsdfsdfsdfdsfsdfdsfsa
				fsadfsdfsdfsadfsadfsfsafsfsfsfsafsdafsfsdfsafsdfsdfsa
				fsdfsdfsfsdfsdfsdafdsfsdfsdfsafsdafsdfsdfsfsdfsdafsdfas
				fsdfsdafsdafsdfsdfsdafsdafsdfsadfsadfsadfsafsafsadfs
				fsdafafsdafasfd
			</p>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {

    }
	}
}
</script>

<style scoped>
	.modal-dim {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(32, 32, 32, 0.9);
		cursor: pointer;
	}
	.modal-window {
		width: 500px;
		padding: 30px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
		background: rgba(44, 62, 80, 0.9);
	}
	.modal-window p {
		color: #fff;
	}
	.modal-close-btn {
		position: absolute;
		right: -18px;
		top: -18px;
		display: inline-block;
		padding: 3px;
		color: #fff;
		cursor: pointer;
		outline: none;
	}
	.fa-times-circle {
		color: pink;
	}
</style>
