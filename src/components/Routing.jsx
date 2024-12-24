import React from "react";
import "../styles/Routing.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "motion/react";
import AnimationPageWrapper from "./AnimationPageWrapper";

let routesArray = [
	{ id: "home", url: "/", element: <Home /> },
	{ id: "about", url: "/about", element: <About /> },
	{ id: "projects", url: "/projects", element: <Projects /> },
	{ id: "notFound", url: "*", element: <NotFound /> },
];

export default function Routing() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			{/* Ensure previous page is fully exited */}
			<div className="routing-wrapper">
				<Routes location={location} key={location.pathname}>
					{routesArray.map((item) => (
						<Route
							key={item.id}
							path={item.url}
							element={
								<AnimationPageWrapper>
									{item.element}
								</AnimationPageWrapper>
							}
						/>
					))}
				</Routes>
			</div>
		</AnimatePresence>
	);
}
