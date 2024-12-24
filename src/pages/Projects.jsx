import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/Projects.css";

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

export default function Projects() {
	// State to manage the active accordion item
	const [activeKey, setActiveKey] = useState(null); // null means no item is open initially
	console.log(activeKey); // Add this to see the active key in the console
	return (
		<div>
			<pre className="basic-text">
				Here are some of my projects from GitHub:
			</pre>
			<div>
				<Accordion activeKey={activeKey} onSelect={setActiveKey} flush>
					{projects.map((item) => (
						<Accordion.Item
							eventKey={item.id.toString()}
							key={item.id}
						>
							<Accordion.Header>
								{item.name} ({item.language})
								{activeKey === item.id.toString() ? (
									<FaChevronUp className="accordion-icon" />
								) : (
									<FaChevronDown className="accordion-icon" />
								)}
							</Accordion.Header>
							<Accordion.Collapse eventKey={item.id.toString()}>
								<Accordion.Body>
									<p>{item.description}</p>
								</Accordion.Body>
							</Accordion.Collapse>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</div>
	);
}
