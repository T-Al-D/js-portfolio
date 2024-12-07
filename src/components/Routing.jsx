import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

let routesArray = [
	{ id: "home", url: "/", element: <Home /> },
	{ id: "about", url: "/about", element: <About /> },
	{ id: "projects", url: "/projects", element: <Projects /> },
];

export default function Routing() {
	return (
		<Routes>
			{routesArray.map((item) => (
				<Route key={item.id} path={item.url} element={item.element} />
			))}
		</Routes>
	);
}
