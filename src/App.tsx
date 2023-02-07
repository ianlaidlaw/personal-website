import React from 'react';
import './App.css';
import {
	Routes,
	Route,
} from "react-router-dom";
import { Header } from './components/header';
import Home from './views/home/Home';
import SlippiReplays from './views/slippi-replays/SlippiReplays';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/slippi-replays" element={<SlippiReplays />} />
			</Routes>
		</div>
	);
}

export default App;
