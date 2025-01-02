import React from "react";
import "../styles/Home.css";
import programmingBackground from "../assets/images/background/programming.jpg";
import foregroundCoding from "../assets/images/foreground/codeing.jpg";

export default function Home() {
	return (
		<div>
			<pre className="basic-text"> Hello, I´m T-Al-D ! </pre>
			<div className="animated-background">
				<img src={programmingBackground} alt=""></img>
				<img
					src={foregroundCoding}
					alt=""
					className="floating-image"
				></img>
			</div>
		</div>
	);
}
