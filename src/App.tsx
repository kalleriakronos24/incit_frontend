import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './page/home';

function App() {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
	);
}

export default App;
