import { useState } from "react";
import React from "react";
import "../../styles/header.css"


const Header = ({todos, setTodos}) => {
	const [newTask, setNewTask] = useState("")
    const [idCounter, setidCounter] = useState(0)

	const checkTextVox = () => {
		let texBox = document.querySelector(".task-input");
if (texBox.value === "") {
	alert("Please add a task.")
} else {
	addTask();
	setNewTask("");

}
	}
	
	const addTask = () => {
	let newTodoObject = {
		id: idCounter,
		title: newTask,
		
	};

	setTodos([...todos, newTodoObject]);
	setidCounter(idCounter + 1);
}



	return (
		<header className="header">
<h1>To-do-s</h1>
<input
  className="task-input"
 type="text"
 placeholder="What needs to be done?" 
 value={newTask}
 onChange={event => setNewTask(event.target.value)}
 
 />

 <button
 onClick={checkTextVox}
 > Add Task</button>

	</header>
	
	
	);
};

export default Header;