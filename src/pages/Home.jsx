import React from "react";
import "../styles/Home.css";
import programmingBackground from "../assets/images/background/programming.jpg";

export default function Home() {
	return (
		<div>
			<pre className="basic-text"> Hello, I´m T-Al-D ! </pre>
			<div className="programming-background">
				<img src={programmingBackground} alt=""></img>
			</div>
		</div>
	);
}
