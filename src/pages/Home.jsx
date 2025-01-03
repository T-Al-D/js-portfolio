import React from "react";
import "../styles/Home.css";
import programmingBackground from "../assets/images/background/programming.jpg";
import foregroundCoding from "../assets/images/foreground/codeing.jpg";
import computer from "../assets/images/foreground/computer.jpg";
import analysis from "../assets/images/foreground/analysis.jpg";

export default function Home() {
	return (
		<div>
			<pre className="basic-text"> Hello, I´m T-Al-D ! </pre>
			<div className="animated-background">
				<img src={programmingBackground} alt=""></img>
				<img
					src={foregroundCoding}
					alt=""
					className="floating-image foregroundCoding"
				></img>
				<img
					src={analysis}
					alt=""
					className="floating-image analysis"
				></img>
				<img
					src={computer}
					alt=""
					className="floating-image computer"
				></img>
			</div>
		</div>
	);
}
