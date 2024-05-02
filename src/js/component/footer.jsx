import React from "react";
//display how many task are listed, from 0 to infinity

const Footer = ({todos}) => {
	return (
		
		<footer className="footer">
{todos.length !== 1 ? `${todos.length} items left.` : `${todos.length} items left.` }

		</footer >
		
	);
};

export default Footer;