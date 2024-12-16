import "../styles/Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// hash-based routing
let navArray = [
	{ id: "Home", link: "/" },
	{ id: "About", link: "/about" },
	{ id: "Projects", link: "/projects" },
];
export function DropDown({ setMenuOpen }) {
	return (
		<div className="dropdown">
			<ul className="dropdown-list">
				{navArray.map((item) => (
					<Link
						className="nav-link"
						key={item.id}
						to={item.link}
						onClick={() => setMenuOpen(false)}
					>
						{item.id}
					</Link>
				))}
			</ul>
		</div>
	);
}

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="nav-wrapper">
			{/* Button to toggle menu on small screens */}
			<button
				className="menu-toggle"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				≡ MENU
			</button>
			{/* Small navigation (visible on mobile) */}

			<nav className="nav-small">
				{/* only open navigation if button toggled */}
				{menuOpen && <DropDown setMenuOpen={setMenuOpen} />}
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
