import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import './fonts/fontFace.css';
import './styles/index.css';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />

				<Route path='/signUp' element={<SignUp />} />
				<Route path='/signIn' element={<SignIn />} />

				<Route path='/dashboard/*' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	</>
);