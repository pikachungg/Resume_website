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
					<h3>Intro: </h3>
					<div className="div-content">
						<p>I'm a Web developer born and raised in Panama, I'm currently on my third year persuing a degree in Web and Mobile Computing at Rochester Institute of Technology.</p>
						<p>I enjoy making people's ideas into reality. Wether it is an application or a Website I love working with people to create something from start to fnish.</p>
						<p>I'm currently looking for a Summer Co-Op in 2020. Specifically in front-end or back-end.</p>
					</div>
				</div>

				<div className="introduction">
					<h3>Education: </h3>
					<div className="div-content">
						<p className="university">Rochester Institute of Technology</p>
						<p className="college-name">Golisano College of Computing and Information Sciences</p>
						<p><span className="major">Major:</span> Web and Mobile Computing</p>
						<p className="expected-graduation">Expected Graduation: Spring 2021</p>
					</div>
				</div>

				<div className="introduction">
					<h3>Tools: </h3>
					<div className="div-content">
						<p>LANGUAGES: Python, Java, C, MySQL, HTML5, CSS3, JavaScript, PHP</p>
						<p>FRAMEWORKS/LIBRARIES: Bootstrap, React</p>
						<p>DESIGN: Adobe Photoshop, Adobe XD</p>
					</div>
				</div>

				<div className="introduction">
					<h3>Work: </h3>
					<div className="div-content">
						<p>LANGUAGES: Python, Java, C, MySQL, HTML5, CSS3, JavaScript, PHP</p>
						<p>FRAMEWORKS/LIBRARIES: Bootstrap, React</p>
						<p>DESIGN: Adobe Photoshop, Adobe XD</p>
					</div>
				</div>

			</div>

		</div>
    </div>
  );
}

export default App;
