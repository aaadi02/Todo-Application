import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

function TodoItems({onDeleteClick}) {
    const {todoItems} = useContext(TodoItemsContext);

    return (
        <div className={styles.todoItems}>
          {todoItems.map((item) => (
            <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} />
            ))}
        </div>
    );
};

export default TodoItems;