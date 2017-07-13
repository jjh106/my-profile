<template>
	<div>
		<div class="todo-add">
			<input type="text" v-model="todoinput.task" @keyup.enter="addItem">
			<button type="button" @click="addItem">추가</button>
		</div>
		<div class="todo-fetch">
			<div class="list">
				<h3>Todo List</h3>
				 <!-- <button type="button" @click="fetch">불러오기</button>  -->
			</div>
			<ul class="todo-list">
				<li v-for="data in tasklist">
					 <label>
						 <input type="checkbox" v-model="data.done">
					   <span :class="{ taskDone: data.done }">{{ data.task }}</span>
					 </label>
					 <button type="button" @click="removeItem">삭제</button> 
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
			todoinput: {
				task: '',
				done: false
			},
			tasklist: []
    }
	},
	mounted() {
		this.$http.get('')
								.then( response => {
									return response.json();
								})
								.then( data => {
									this.tasklist = Object.values(data); 
								})
								.catch( error => console.error(error.message) )
	},

	methods: {
		addItem() {
			this.$http.post('', this.todoinput)
								.then( response => console.log(response) )
								.catch( error => console.error(error.message) )

			this.$http.get('')
								.then( response => {
									return response.json();
								})
								.then( data => {
									this.tasklist = Object.values(data); 
								})
								.catch( error => console.error(error.message) )
			
			this.todoinput.task = '';
		},
		removeItem(index) {
			this.$http.delete('', this.todoinput)
								.then( response => console.log(response) )
			this.tasklist.splice(index, 1)
		}
	}
}
</script>

<style scoped>
	.taskDone {
		text-decoration: line-through;
	}
	.todo-list {
		list-style: none;
	}
</style>

