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
				<div className="image-content">
					<h3>I'm Daniel Chung</h3>
					<p>Web developer that aims to create impactful websites and applications with effective code.</p>
				</div>
			</div>

			<div className="right">
				<div className="introduction">
					<h3>Introduction: </h3>
					<div className="div-content">
						<p>I'm a Web developer born and raised in Panama, I'm persuing a degree in Web and Mobile Computing at Rochester Institute of Technology.</p>
						<p>I'm currently looking for a Summer Co-Op in 2020. Specifically in front-end or back-end.</p>
					</div>
				</div>
			</div>

		</div>
    </div>
  );
}

export default App;
