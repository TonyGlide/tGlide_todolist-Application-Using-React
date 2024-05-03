import { useState } from "react";
import React from "react";
import "../../styles/header.css"


const Header = ({todos, setTodos}) => {
	const [newTask, setNewTask] = useState("")


	const checkTextVox = () => {
		let texBox = document.querySelector(".task-input");
if (texBox.value === "") {
	alert("Please add a task.")
} else {
	addTask();
}
	}
	const addTask = () => {
	let newTodoObject = {
		id: 0,
		title: newTask,
	};

	setTodos([...todos, newTodoObject]);

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