import React from 'react';
import me from './assets/images/resume.jpg';
import './App.css';
import Content from './components/Content';
import Education from './components/Education';

function App() {
  return (
    <div className="wrapper">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"></link>
		<div className="container">

			<div className="left">
				<img src={me} alt="A picture of me"/>
				<div className="image-content">
					<h3>Hello, I'm Daniel Chung</h3>
					<p>A Web developer that aims to create impactful websites and applications with effective code.</p>
				</div>
			</div>
			
			{/* Introduction */}
			<div className="right">

				<Content title="Intro:" 
				paragraph1="I'm a Web developer born and raised in Panama. I'm currently on my third year pursuing a degree in Web and Mobile Computing at Rochester Institute of Technology." 
				paragraph2="I enjoy making people's ideas into reality. Whether it is an application or a Website I love working with people to create something from start to fnish."
				paragraph3="I'm currently looking for a Co-Op in Summer 2020. Most experience in front-end or back-end development."
				/>

				<Education title="Education:"
				university="Rochester Institute of Technology"
				collegeName="Golisano College of Computing and Information Sciences"
				titleMajor="Major: "
				titleMinor="Minor: "
				Major="Web and Mobile Computing"
				Minor="Computer Science"
				expected="Expected Graduation: Spring 2021"
				/>

				{/* TOOLS */}
				<div className="introduction">
					<h3>Tools: </h3>
					<div className="div-content">
						<p><span className="sub-title">LANGUAGES:</span> Python, Java, C, MySQL, HTML5, CSS3, JavaScript, PHP</p>
						<p><span className="sub-title">FRAMEWORKS/LIBRARIES:</span> Bootstrap, React</p>
						<p><span className="sub-title">DESIGN:</span> Adobe Photoshop, Adobe XD</p>
					</div>
				</div>
				{/* WORK */}
				<div className="introduction">
					<h3>Work: </h3>
					<div className="div-content">
						<p className="work">bbb Shoes & Boots/<span className="work-description">Social Media Intern</span></p>
						<p className="work-duration">Jan 2016 - Aug 2016</p>
						<p>Responsible for taking and editing pictures of the company’s products for use in displays and on social media. Edited with Photoshop.</p>
					</div>
				</div>
				{/* project */}
				<div className="introduction">
					<h3>Projects: </h3>
					<div className="div-content">
						<p className="work">Discordgg/<span className="work-description">Personal project</span></p>
						<p className="work-duration">In development</p>
						<p>Discord bot that retrieves information from the Riot Games’ League of Legends API and displays it on discord. Helps you keep track of player's stats and current game information. Developing with Python.</p>
					</div>
				</div>
				{/* Leadership */}
				<div className="introduction">
					<h3>Leadership: </h3>
					<div className="div-content">
						<p className="work">TECHO Panama/<span className="work-description">Squad Leader</span></p>
						<p className="work-duration">Aug 2015 - Present</p>
						<p>Developed leaderships skill through actively cooperating to society trying to diminish poverty in Panama by building houses in low access places. I've lead more than 9 teams in building houses.</p>
					</div>
				</div>

				{/* FOOTER */}

				<div className="introduction">
					<h3>Leadership: </h3>
					<div className="div-content">
						<p className="work">TECHO Panama/<span className="work-description">Squad Leader</span></p>
						<p className="work-duration">Aug 2015 - Present</p>
						<p>Developed leaderships skill through actively cooperating to society trying to diminish poverty in Panama by building houses in low access places. I've lead more than 9 teams in building houses.</p>
					</div>
				</div>

				<footer>
					<div className="footer">
						<p>Contact: pikachungg@gmail.com</p>
						<p>Developed by: Daniel Chung</p>
					</div>
				</footer>

			</div>
		</div>
    </div>
  );
}

export default App;
