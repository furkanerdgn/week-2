import React, { useEffect,useState } from 'react'
import styles from './card.module.css'

function Card(props) {
    
    const [updatedTodo, setUpdatedTodo] = useState('')
    const [deleteTodo, setDeleteTodo] = useState(false)

    // handle delete todo
    const handleDelete = (e) => {
        const {id} = e.target
        const newTodos = props.todos.filter((todo) => todo.id !== id)
        props.setTodos(newTodos)
    }
    // handle check todo
    const handleChange = (e) => {
        const {id} = e.target
        const newTodos = props.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        props.setTodos(newTodos)
    }
    // handle update todo
    const handleChangeTodo = (e) => {
        const {value} = e.target.value
        setUpdatedTodo(value)
    }

  return (
    <div className={styles.card}>
        <ul className={styles.list}>
            {
                props.todos.map((todo) => {
                    return(
                        <li key={todo.id} className={styles.listItem}>
                            <input type="checkbox" 
                            onChange={handleChange}
                            checked={todo.completed}
                            name="todo" id={todo.id} />
                            <label htmlFor="checkbox">
                                {todo.todo}
                            </label>
                            <button onClick={handleDelete} id={todo.id} className={styles.deleteBtn}>X</button>
                        </li>
                    )
                }
                )
            }
        </ul>
    </div>
  )
}

export default Card