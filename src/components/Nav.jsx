import React from "react";
import "../styles/Nav.css";

let navArray = [
	{ id: "home", link: "/" },
	{ id: "about", link: "/about" },
	{ id: "projects", link: "/projects" },
];

export default function Nav() {
	return (
		<nav>
			{navArray.map((item) => (
				<button href={item.link} className="nav-button">
					{" "}
					{item.id}
				</button>
			))}
		</nav>
	);
}
