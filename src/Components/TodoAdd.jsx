import { useContext, useState } from "react";
import {BiMessageAdd} from 'react-icons/bi';
import { TodoItemsContext } from "../store/todo-items-store";

function TodoAdd() {

    const {addNewItem} = useContext(TodoItemsContext);
    const [todoName, setTodoName] = useState("");
    const [DueDate, setDueDate] = useState("");

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }
    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        addNewItem(todoName, DueDate);
        setTodoName("");
        setDueDate("");
    }

    return (
        <div className="container text-center" onSubmit={handleAddButtonClicked}>
            <form className="row margin">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
                </div>

                <div className="col-4">
                    <input type="date" value={DueDate} onChange={handleDateChange}/>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-success urs-btn"><BiMessageAdd /></button>
                </div>
            </form>
        </div>
    )
}

export default TodoAdd;