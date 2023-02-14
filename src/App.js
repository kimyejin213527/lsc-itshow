import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/MainPage';
import Test from './components/pages/testPages/Condition';
import Info from './components/pages/infoPages/FitnessInfo';
import MyPage from './components/pages/MyPage';  
import Nav from './components/ui/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
		{/* <Routes>
			<Route exact path="/" component={<Home/>}></Route>
			<Route path="/test" component={<Test/>}></Route>
			<Route path="/info" component={<Info/>}></Route>
			<Route path="/mypage" component={<MyPage/>}></Route>
		</Routes> */}
      </div>
    )
  }
}

export default App;