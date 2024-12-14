import "../styles/Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// hash-based routing

let navArray = [
	{ id: "Home", link: "/" },
	{ id: "About", link: "/about" },
	{ id: "Projects", link: "/projects" },
];

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	// Toggle the mobile menu
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="nav-wrapper">
			{/* Button to toggle menu on small screens */}
			<button className="menu-toggle" onClick={toggleMenu}>
				MENU
			</button>
			{/* Small navigation (visible on mobile) */}

			<nav className={`nav-small ${menuOpen ? "open" : ""}`}>
				{navArray.map((item) => (
					<Link key={item.id} to={item.link} className="nav-link">
						{item.id}
					</Link>
				))}
			</nav>

			<nav className="nav-large">
				{navArray.map((item) => (
					<Link key={item.id} to={item.link} className="nav-link">
						{item.id}
					</Link>
				))}
			</nav>
		</div>
	);
}
