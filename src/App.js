import React from 'react';
import me from './assets/images/resume.jpg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"></link>
		<div className="container">

			<div className="left">
				<img src={me} alt="A picture of me"/>
			</div>

			<div className="right">
				<p>asdfasdfasdf</p>
				<p>asdfasdfasdfdfasdf</p>
			</div>

		</div>
    </div>
  );
}

export default App;
