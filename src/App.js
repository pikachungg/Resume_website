import React from 'react';
import me from './assets/images/resume.jpg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"></link>
		<div className="column1">
			<img src={me} alt="a picture of me"/>
			<div className="center">
				<h3>Hi, I'm Daniel Chung</h3>
				<p>A Web developer aiming to create beautiful and efficient websites and applications.</p>
			</div>
		</div>
		<div className="column2">

		</div>
    </div>
  );
}

export default App;
