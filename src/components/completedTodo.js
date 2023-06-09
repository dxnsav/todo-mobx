import React from 'react'
import { useTodoStore } from '../context/todoContext'

import { Button, Box } from '@chakra-ui/react'
import { Observer } from 'mobx-react'

const CompletedTodo = () => {
	const todoStore = useTodoStore();

	return (
		<Observer>
			{() => {
				return (
					<div className='completed-todo'>
						<h2>Completed Todo</h2>
						<ul>
							{todoStore.todos.map((todo) => {
								if (todo.completed) {
									return (
										<li key={todo.id} className='item done'>
											<Box display='flex' flexDirection='row' justifyContent='space-between'>
												<p>{todo.data}</p>
												<Button bg='red.500' onClick={() => todoStore.incomplete(todo)}>Incomplete</Button>
											</Box>
										</li>
									)
								} else {
									return null
								}
							})}
						</ul>
					</div>
				);
			}}
		</Observer>
	)
}

export default CompletedTodo;