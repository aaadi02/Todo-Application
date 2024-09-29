// Ub6Sdu

import { useState } from 'react';
import './App.css'
import TodoAdd from './Components/TodoAdd'
import TodoHeading from './Components/TodoHeading'
import TodoItems from './Components/TodoItems'
import WelcomeMessage from './Components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';
function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems)
  }


  return (
    <TodoItemsContext.Provider value={{todoItems, addNewItem, deleteItem}}>
      <center className="todo-container">
        <TodoHeading />
        <TodoAdd />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  )
}

export default App
