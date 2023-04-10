import React, { useEffect,useState } from 'react'
import styles from './card.module.css'

function Card(props) {
    
    const [updatedTodo, setUpdatedTodo] = useState('')
    const [deleteTodo, setDeleteTodo] = useState(false)


    const handleDelete = (e) => {
        const {id} = e.target
        const newTodos = props.todos.filter((todo) => todo.id !== id)
        props.setTodos(newTodos)
    }
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
                            <input type="text" className={styles.input} value={todo.todo} onChange={(e) => setUpdatedTodo(e.target.value)} />
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