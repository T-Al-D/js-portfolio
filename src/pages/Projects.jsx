import React from "react";
import "../styles/Projects.css";
import Accordion from "../components/Accordion";

let projects = [
	{
		id: 1,
		title: "Tkinter (Python)",
		link: "https://github.com/T-Al-D/TkinterMixedApplication",
		description: "GUI with a few functions.",
	},
	{
		id: 2,
		title: "MixedWpfApplication (C#)",
		link: "https://github.com/T-Al-D/MixedWPFApplication",
		description: "A collection of small programs in one. With Navigation.",
	},
	{
		id: 3,
		title: "Async Webserver (C++)",
		link: "https://github.com/T-Al-D/Asynchronous-ESP32-Webserver",
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
