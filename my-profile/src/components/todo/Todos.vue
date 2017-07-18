<template>
	<div class="todos-wrapper">
		<h2>Todo List</h2>
		<div class="todo-input">
			<input type="text" placeholder="할일을 적어주세요." v-model="tasks.name" @keyup.enter="addItem">
			<button type="button" @click="addItem"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button>
		</div>
			<ul class="todo-list">
				<li v-for="task in tasks" v-if="task.name">
					<input type="checkbox" v-model="task.done">
					<span :class="{ taskDone: task.done }">{{ task.name }}</span>
					<button class="delete-btn" type="button" @click="deleteItem(task)"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>
				</li>
			</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
			tasks: [
				{ name: '', done: false }
			]
    }
	},
	methods: {
		addItem(e) {
			this.tasks.push({
				name: this.tasks.name,
				done: false
			})
			this.tasks.name = '';
		},
		deleteItem(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
}
</script>

<style scoped>
	.todos-wrapper {
		text-align: center;
	}
	.todos-wrapper h2 {
		margin: 30px 0;
		color: #2c3e50;
		font-size: 2.3rem;
	}
	.todo-input {
		margin: 0 0 20px 30px;
	}
	.todo-input input {
		border: none;
		outline: none;
		border-bottom: 2px solid #ccc;
		width: 40%;
		padding: 10px;
		font-size: 1rem;
	}
	.todo-input button {
		vertical-align: middle;
	}
	.todo-list {
		margin: 0 auto 30px;
		width: 40%;
		height: 300px;
		overflow: auto;
		font-size: 1.2rem;
		color: #2c3e50;
		line-height: 1.7;
		padding: 0 10px;
	}
	.todo-list li {
		margin: 10px 0;
		border-radius: 30px;
		padding: 5px 0;
		box-shadow: 2px 2px 4px #bbb, 4px 4px 8px #bbb;
	}
	.delete-btn {
		line-height: 1.5;
	}
	.fa-plus {
		color: #ffb03b;
	}
	.fa-trash-o {
		color: #f24c27;
		vertical-align: top;
	}
	.taskDone {
		text-decoration: line-through;
	}
	.todo-list {
		list-style: none;
	}
</style>

