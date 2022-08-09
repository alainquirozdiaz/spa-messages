import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Messages from './Messages';
import Header from './Header';
import Footer from './Footer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
		<Header />
      		<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/messages" element={<Messages />} />
			</Routes>
		<Footer />
    	</BrowserRouter>
	</React.StrictMode>
);
