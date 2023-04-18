import React from "react";

import { useTodoStore } from "../context/todoContext";
import { Button, Box, Divider } from "@chakra-ui/react";
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
							{todoStore.todos.map((todo, index) => {
								if (!todo.completed) {
									return (
										<li key={todo.id} className='item remaining'>
											<Box display='flex' flexDirection='row' justifyContent='space-between'>
												<p>{todo.data}</p>
												<Button bg='red.500' onClick={() => todoStore.complete(todo)}>Complete</Button>
											</Box>
											{index < todoStore.todos.length - 1 && <Divider orientation='horizontal' borderColor='#3a5a40' />}
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