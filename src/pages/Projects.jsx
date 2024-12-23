import React from "react";
S;

let projects = [
	{
		id: 1,
		name: "Tkinter",
		language: "Python",
		description: "GUI with some functions.",
	},
	{
		id: 2,
		name: "MixedWpfApplication",
		language: "C#",
		description: "A collection of small programs in one. With Navigation",
	},
	{
		id: 3,
		name: "Async Webserver",
		language: "C++",
		description:
			"A stand-alone async webserver, that can be controlled via webpage.",
	},
];

/* <Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>...</Accordion.Body>
					</Accordion.Item>
				</Accordion> */

export default function Projects() {
	return (
		<div>
			"
			<pre className="basic-text">
				Here are some of my projects from GitHub:
			</pre>
			<div>
				{projects.map((item) => {
					return <div key={item.id}>{item.name}</div>;
				})}
			</div>
		</div>
	);
}
