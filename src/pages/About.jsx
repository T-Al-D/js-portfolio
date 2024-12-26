import React from "react";
import "../styles/About.css";
import Card from "../components/Card";

let certList = [
	{
		id: 1,
		title: "Ignition Core 8.1",
		description:
			"From Inductive Automation: For automation of industrial processes.",
	},
	{
		id: 2,
		title: "Linux Essentials",
		description:
			"From LPI: Essential knowledge about Linux and it´s usage.",
	},
	{
		id: 3,
		title: "Tulip",
		description:
			"From Tulip University: No-Code development for workstations.",
	},
];

export default function About() {
	return (
		<div>
			<pre className="basic-text">
				I am currently in training (apprenticeship) to become an
				application developer.
			</pre>
			<pre className="basic-text">
				I started programming in 2019 and have since tried out a few
				tried a few programming/markup languages. Most of the time I am
				programming with Python (in Igntion).
			</pre>
			<pre className="basic-text">My current certifications are:</pre>
			<div className="cert-wrapper">
				{certList.map((item) => (
					<Card key={item.id} cardInfo={item} />
				))}
			</div>
			<pre className="basic-text">
				For the future I´m curious to see how the virtual worlds will
				develop.
			</pre>
		</div>
	);
}
