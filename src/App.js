import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/MainPage';
import Test from './components/pages/testPages/Condition';
import Info from './components/pages/infoPages/FitnessInfo';
import MyPage from './components/pages/MyPage';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/test' component={Test} />
		<Route path='/info' component={Info} />
		<Route path='/mypage' component={MyPage} />
	</Switch>
	</Router>
);
}

export default App;
