import React from "react";
import "../../styles/App.css";
import Header from "../component/header";
import Body from "../component/body";
import Footer from "../component/footer";



const App = () => {
	return (
		<div className="todo-wrapper">
		<div>
		<Header />
		<div />

		<div>
		<Body />
		</div>

		<div>
		<Footer />
		</div>
		
		</div>
		</div>
	);
};

export default App;