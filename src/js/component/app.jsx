import React from "react";
import "../../styles/App.css";
import Header from "../component/header";
import Body from "../component/body";
import Footer from "../component/footer";



const TASKS=[
//{id: 0, task:"wash car"},
//{id: 1, task:"Do homework"},
//{id: 2, task:"Mow the lawn"},
]


const App = () => {
	return (
		<div className="todo-wrapper">
		<div>
		<Header />
		<div />

		<div>
		<Body todos={TASKS}/>
		</div>

		<div>
		<Footer todos={TASKS}/>
		</div>
		
		</div>
		</div>
	);
};

export default App;