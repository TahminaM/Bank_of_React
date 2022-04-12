// src/App.js

import './App.css';
import Clock from './components/Clock';
import logo from './logo.png';
import Content from './components/Content';
import Greeting from './components/Greeting';
import AccountBalance from './components/AccountBalance';

function App() {
  	return (
		<div className="App">
			<br />
			<br />
			<div className='container'>
				<img src={logo} alt='logo' className='logo' />
				<Greeting />
				<Clock />
				<AccountBalance />
			</div>
			<Content />
		</div>
  );
}

export default App;

