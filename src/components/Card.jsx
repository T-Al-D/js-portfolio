import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

export default function Card({ cardInfo }) {
	return (
		<div className="card">
			<div className="card-inner-wrapper">
				<details>
					<summary className="card-title">
						<p className="card-text">{cardInfo.title}</p>
					</summary>
					<div className="card-body">
						<p className="card-text">{cardInfo.description}</p>
						<Link className="card-body-link" to={cardInfo.link}>
							<button className="card-body-link-button">
								Learn more!
							</button>
						</Link>
					</div>
				</details>
			</div>
		</div>
	);
}
