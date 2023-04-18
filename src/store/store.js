import { nanoid } from "nanoid";

export const createTodoStore = () => {
	return {
		todos : [],

		addTodo(data) {
			const todo = {
				id: nanoid(),
				data,
				completed: false
			}

			this.todos.push(todo);
		},

		complete(todo ) {
			this.todos = this.todos.filter (el => {
				if (el.id === todo.id)
					el.completed = true;
				return el;
			})
		},

		incomplete(todo) {
			this.todos = this.todos.filter(el => {
				if (el.id === todo.id)
					el.completed = false;
				return el;
			})
		},

		remove(todo) {
			this.todos = this.todos.filter(el => el.id !== todo.id);
		},
	}
}