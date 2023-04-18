import React from "react";

import { useTodoStore } from "../context/todoContext";
import { Button } from "@chakra-ui/react";
import { Observer } from "mobx-react";

const IncompletedTodo = () => {
	const todoStore = useTodoStore();

	return (
		<Observer>
			{() => {
				return (
					<div className="incompleted-todo">
						<h2>Incompleted Todos</h2>
						<ul>
							{todoStore.todos.map((todo) => {
								if (!todo.completed) {
									return (
										<li key={todo.id} className="item remaining">
											<p>{todo.data}</p>
											<Button bg='#a7c957' onClick={() => todoStore.complete(todo)}>
												Complete
											</Button>
										</li>
									);
								} else {
									return null;
								}
							})}
						</ul>
					</div>
				);
			}}
		</Observer>
	);
}

export default IncompletedTodo;