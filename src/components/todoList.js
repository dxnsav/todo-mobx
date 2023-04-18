import React from 'react'
import { useObserver } from 'mobx-react'

import { useTodoStore } from '../context/todoContext';

export default function TodoList() {
	const todoStore = useTodoStore();

	return useObserver(() => {
		return (
			<div className='TodoList'>
				<h2>Todo List</h2>
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
		)
	})
}