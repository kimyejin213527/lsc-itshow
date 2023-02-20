import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/MainPage';
import Condition from './components/pages/testPages/Condition';
import Body from './components/pages/testPages/Body';
import Medicine from './components/pages/infoPages/Medicine';
import Fitness from './components/pages/infoPages/Fitness';
import Menses from './components/pages/infoPages/Menses';
import Yoga from './components/pages/infoPages/Yoga';
import MyPage from './components/pages/MyPage';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/condition' component={Condition} />
		<Route path='/body' component={Body} />
		<Route path='/medicine' component={Medicine} />
		<Route path='/fitness' component={Fitness} />
		<Route path='/menses' component={Menses} />
		<Route path='/yoga' component={Yoga} />
		<Route path='/mypage' component={MyPage} />
	</Switch>
	</Router>
);
}

export default App;
