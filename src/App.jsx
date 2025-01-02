import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routing from "./components/Routing";

function App() {
	return (
		<div className="app-wrapper">
			<div className="page-top">
				<Header />
				<Nav />
			</div>
			<div className="divide" />
			<div className="page-rest">
				<div className="main-content">
					<main>
						<Routing />
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
