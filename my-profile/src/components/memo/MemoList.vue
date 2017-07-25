<template>
	<div class="memo-list-wrapper">
		<h2>Todo List</h2>
		<div class="memo-input">
			<input type="text" placeholder="할 일을 적어주세요." v-model="task" @keyup.enter="addItem">
			<button type="button" @click="addItem"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button>
		</div>
			<ul class="memo-list">
				<li v-for="(data,index) in tasklist" :key="data" v-if="data">
					<input type="checkbox" v-model="data.done">
					<span :class="{ taskDone: data.done }">{{ data.task }}</span>
					<button class="delete-btn" type="button" @click="deleteItem(index)"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>
				</li>
			</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
			task: '',
			done: false,
			tasklist: [],
			keylist: []
    }
	},
	created() {
		this.$http.get('https://profile-e00ba.firebaseio.com/todoList.json')
							.then( res => {
								this.tasklist = Object.values(res.body);
								this.keylist = Object.keys(res.body);
							})
							.catch( err => console.error(err.message) )
	},
	methods: {
		addItem() {
			const data = {
				task: this.task,
				done: this.done
			};
			this.$http.post('https://profile-e00ba.firebaseio.com/todoList.json', data)
								.then( res => this.keylist.push(res.body.name) )
								.catch( err => console.error(err.message) )
			this.tasklist.push(data);
			this.task = '';
		},
		deleteItem(index) {
			this.$http.delete(`https://profile-e00ba.firebaseio.com/todoList/${this.keylist[index]}.json`)
								.then( res => {
									this.tasklist.splice(index, 1);
									this.keylist.splice(index, 1);
								})
		}
	}
}
</script>

<style scoped>
	.memo-list-wrapper {
		text-align: center;
	}
	.memo-list-wrapper h2 {
		margin: 30px 0;
		color: #2c3e50;
		font-size: 2.3rem;
	}
	.memo-input {
		margin: 0 0 20px 30px;
	}
	.memo-input input {
		border: none;
		outline: none;
		border-bottom: 2px solid #ccc;
		width: 40%;
		padding: 10px;
		font-size: 1rem;
	}
	.memo-input button {
		vertical-align: middle;
	}
	.memo-list {
		margin: 0 auto 30px;
		width: 40%;
		height: 300px;
		overflow: auto;
		font-size: 1.2rem;
		color: #2c3e50;
		line-height: 1.7;
		padding: 0 10px;
	}
	.memo-list li {
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
		color: #f0788c;
		vertical-align: top;
	}
	.taskDone {
		text-decoration: line-through;
	}
	.memo-list {
		list-style: none;
	}
</style>

