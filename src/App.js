import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBarComponent } from './component/NavBarComponent';
import { FooterComponent } from './component/FooterComponent';
import NoPage from './Pages/NoPage';
import { SignInPage } from './Pages/SignInPage';
import { Config } from './Pages/Configuration';
import { UserManagment } from './Pages/UserManagment';
import { Blog } from './Pages/Blog';
import { Email } from './Pages/Email';

function getToken() {
	/* const tokenString = sessionStorage.getItem('signInData');
	const userToken = JSON.parse(tokenString);
	return userToken?.token */

	const resultData = sessionStorage.getItem('signInData');
	let parsedData;
	if (!resultData) {
		parsedData = JSON.parse(resultData);
		return parsedData?.token;
	}
	return resultData;
}


function App() {

	const token = getToken();

	if (!token) {
		console.log(token);
		return <SignInPage />
	}

	return (
		<div className="App">
			<NavBarComponent />
			<Routes>
				<Route exact path="/*" element={<NoPage />} />
				<Route path='/' element={<Config />} />
				<Route path='/configuration' element={<Config />} />
				<Route path='/users' element={<UserManagment />} />
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/email' element={<Email />} />
			</Routes>
			<FooterComponent />
		</div>
	);
}

export default App;
