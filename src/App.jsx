import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div>
			<div className="page-top">
				<Header></Header>
				<Nav></Nav>
			</div>

			<Footer></Footer>
		</div>
	);
}

export default App;
