import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3  text-decoration-none ">
			<Link className="text-decoration-none " to="/">
				<span className="navbar-brand mb-0 h1 text-dark ">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary bg-primary">Create Contact </button>
				</Link>
			</div>
		</nav>
	);
};
