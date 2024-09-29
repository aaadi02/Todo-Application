import { useContext } from 'react';
import styles from './WelcomeMessage.Module.css';
import { TodoItemsContext } from '../store/todo-items-store';

function WelcomeMessage() {
    const {todoItems} = useContext(TodoItemsContext);
    return (todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day ...</p>)
}

export default WelcomeMessage;