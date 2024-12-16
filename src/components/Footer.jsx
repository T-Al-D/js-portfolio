import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<span>
				<Link
					className="footer-link"
					to="https://github.com/T-Al-D/js-portfolio"
				>
					＜＞ page-code
				</Link>
			</span>
		</footer>
	);
}
