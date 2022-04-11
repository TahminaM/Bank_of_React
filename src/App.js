// src/App.js

import './App.css';
import Clock from './components/Clock';
import logo from './logo.png';

function App() {
  	return (
		<div className="App">
			<br />
			<br />
			<div className='container'>
				<img src={logo} alt='logo' className='logo' />
				<Greeting />
				<Clock />
			</div>
			<Content />
		</div>
  );
}

export default App;

