import "../styles/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

// hash-based routing

let navArray = [
	{ id: "Home", link: "/" },
	{ id: "About", link: "/about" },
	{ id: "Projects", link: "/projects" },
];

export default function Nav() {
	return (
		<nav>
			{navArray.map((item) => (
				<Link key={item.id} to={item.link} className="nav-link">
					{item.id}
				</Link>
			))}
		</nav>
	);
}
