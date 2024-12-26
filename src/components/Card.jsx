import React from "react";
import "../styles/Card.css";

export default function Card({ cardInfo }) {
	return (
		<div className="card">
			<div className="card-inner-wrapper">
				<details>
					<summary>
						<div className="card-title">
							<p className="card-text">{cardInfo.title}</p>
						</div>
					</summary>
					<div className="card-body">
						<p className="card-text">{cardInfo.description}</p>
					</div>
				</details>
			</div>
		</div>
	);
}
