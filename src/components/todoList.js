import React from 'react'
import { useObserver } from 'mobx-react'

import { useTodoStore } from '../context/todoContext';

import { Tabs, Tab, Box } from '@chakra-ui/react'

export default function TodoList() {
	const todoStore = useTodoStore();

	return useObserver(() => {
		return (
			<Box className='TodoList'>
				<Tabs>
					<Tab>
						Todo List
					</Tab>
				</Tabs>
				<div className="todo-box">
				<div>
					<h3>Remaining</h3>

					<ul>
						{todoStore.todos.map((todo) => {
							if (!todo.completed) {
								return (
									<li key={todo.id} className='item remaining'>
										<p>{todo.data}</p>
									</li>
								)
							} else {
								return null
							}
						})}
					</ul>
				</div>
				<div>
					<h3>Done</h3>
					<ul>
						{todoStore.todos.map((todo) => {
							if (todo.completed) {
								return (
									<li key={todo.id} className='item done'>
										<p>{todo.data}</p>
									</li>
								)
							} else {
								return null
							}
						})}
					</ul>
				</div>
				</div>
			</Box>
		)
	})
}