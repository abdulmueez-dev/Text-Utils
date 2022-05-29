import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

function App() {
	const [mode, setmode] = useState('light')
	const [alert, setalert] = useState(null)
	const showAlert = (message) => {
		setalert(
			message
		)
		setTimeout(() => {
			setalert(null);
		}, 1500);
	}
	const toggleMode = () => {
		if (mode === 'light') {
			setmode('dark')
			document.body.style.backgroundColor = 'rgb(31 31 32)'
			showAlert("Dark mode enabled!")
		}
		else {
			setmode('light')
			document.body.style.backgroundColor = 'white'
			showAlert("Dark mode disabled!")
		}
	}
	return (
		<>
			<Router>
				<Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
				<Alert Alert={alert} />
				{/* <Navbar/> (Renders default prototype) */}
				<Routes>
					<Route exact path="/About" element={<About mode={mode} />} />
					<Route exact path="/" element={
						<div className="container">
							<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
						</div>}
					/>
				</Routes>
			</Router>
		</>
	);
}
export default App;
