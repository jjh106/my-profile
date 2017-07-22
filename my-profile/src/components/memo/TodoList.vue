<template>
	<div>
		<h3>TodoList</h3>
		<div class="todo-add">
			<input type="text" v-model="task" @keyup.enter="addItem">
			<button type="button" @click="addItem">추가</button>
		</div>
		<ul class="todo-list">
			<li v-for="(data, index) in tasklist" :key="data">
					<label>
						<input type="checkbox" v-model="data.done">
					  <span :class="{ taskDone: data.done }">{{ data.task }}</span>
					</label>
					<button type="button" @click="removeItem(index)">삭제</button> 
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
			task: '',
			tasklist: [],
			keylist: []
    }
	},
	created() {
		this.$http.get('https://profile-e00ba.firebaseio.com/todoList.json')
							.then( response => {
								console.log(Object.keys(response.body));
								this.keylist = Object.keys(response.body);
								this.tasklist = Object.values(response.body);
							})
							.catch( error => console.error(error.message) )
	},
	methods: {
		addItem() {
			const data = {
				task: this.task,
				done: false
			};
			this.$http.post('https://profile-e00ba.firebaseio.com/todoList.json', data)
								.then( response => this.keylist.push(response.body.name) )
								.catch( error => console.error(error.message) )
			this.tasklist.push(data);
			this.task = '';
		},
		removeItem(index) {
			this.$http.delete(`https://profile-e00ba.firebaseio.com/todoList/${this.keylist[index]}.json`)
								.then( response => {
									this.keylist.splice(index, 1);
									this.tasklist.splice(index, 1);
								})
		}
	}
}
</script>

<style scoped>
	h3 {
		font-size: 1.5rem;
		margin: 30px;
		background: yellow;
	}
	.taskDone {
		text-decoration: line-through;
	}
	.todo-list {
		margin: 30px auto;
		list-style: none;
		width: 500px;
		height: 500px;
		background: pink;
	}
	.todo-add {
		text-align: center;
		background: blue;
	}
	.todo-add input {
		width: 300px;
		padding: 5px;
		outline: none;
		 border: none; 
		border-bottom: 1px solid #2c3e50;
	}
	.todo-add button{
		background: red;
		padding: 5px;
	}
</style>

