import React, { useState } from "react";
import "../styles/Accordion.css";
import { HiOutlineChevronLeft, HiOutlineChevronDown } from "react-icons/hi";

export default function Accordion({ list }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const toggleAccordion = (id) => {
		// If the clicked item is already active, close it; otherwise, open the clicked item
		setActiveIndex(activeIndex === id ? null : id);
	};
	return (
		<div className="accordion">
			{list.map((item) => (
				<div key={item.id} className="accordion-item">
					<div
						className="accordion-item-header"
						onClick={() => toggleAccordion(item.id)}
					>
						<pre className="accordion-text">{item.name}</pre>
						<span className="accordion-item-header-icon">
							{activeIndex == item.id ? (
								<HiOutlineChevronDown />
							) : (
								<HiOutlineChevronLeft />
							)}
						</span>
					</div>
					{/*only show the body, if the current index has been selected! */}
					{activeIndex == item.id && (
						<div className="accordion-item-body">
							<pre className="accordion-text">
								{item.description}
							</pre>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
