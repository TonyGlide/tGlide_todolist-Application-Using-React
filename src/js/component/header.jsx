import React from "react";
import "../../styles/header.css"


const Header = () => {
	return (
		<header className="header">
<h1>todos</h1>
<input
 className="task-input"
 type="text"
 placeholder="What needs to be done?" 
 />

 <button> Add Task</button>
	</header>
	
	);
};

export default Header;