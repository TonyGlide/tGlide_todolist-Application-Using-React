import React, { useState } from "react";
import "../../styles/App.css";
import Header from "../component/header";
import Body from "../component/body";
import Footer from "../component/footer";






const App = () => {
const [todos, setTodos] = useState([]);


	return (
		<div className="todo-wrapper">
		<div>
		<Header todos={todos} setTodos={setTodos}/>
		<div />

		<div>
		<Body todos={todos}	setTodos={setTodos}/>
		</div>

		<div>
		<Footer todos={todos}/>
		</div>
		
		</div>
		</div>
	);
};

export default App;