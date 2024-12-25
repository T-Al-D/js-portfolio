import React from "react";
import "../styles/Projects.css";
import Accordion from "../components/Accordion";

let projects = [
	{
		id: 1,
		name: "Tkinter (Python)",
		description: "GUI with some functions.",
	},
	{
		id: 2,
		name: "MixedWpfApplication (C#)",
		description: "A collection of small programs in one. With Navigation.",
	},
	{
		id: 3,
		name: "Async Webserver (C++)",
		description:
			"A stand-alone async webserver, that can be controlled via webpage.",
	},
];

export default function Projects() {
	return (
		<div>
			<pre className="basic-text">
				Here are some of my projects from GitHub:
			</pre>
			<Accordion list={projects}></Accordion>
		</div>
	);
}
