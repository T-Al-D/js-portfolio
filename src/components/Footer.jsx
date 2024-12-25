import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaCode } from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
			<span>
				<Link
					className="footer-link"
					to="https://github.com/T-Al-D/js-portfolio"
				>
					<FaCode className="footer-icon" />
				</Link>
				<Link className="footer-link" to="https://github.com/T-Al-D">
					<FaGithub className="footer-icon" />
				</Link>
			</span>
		</footer>
	);
}
