import React from 'react';
import me from './assets/images/resume.jpg';
import './App.css';
import Content from './components/Content';
import Education from './components/Education';
import Tools from './components/Tools';
import Work from './components/Work';

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

			<div className="right">
				{/* Introduction */}
				<Content title="Intro:"
				paragraph1="I'm a Web developer born and raised in Panama. I'm currently on my third year pursuing a degree in Web and Mobile Computing at Rochester Institute of Technology."
				paragraph2="I enjoy making people's ideas into reality. Whether it is an application or a Website I love working with people to create something from start to fnish."
				paragraph3="I'm currently looking for a Co-Op in Summer 2020. Most experience in front-end or back-end development."
				/>
				{/* Education */}
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
				<Tools title="Tools: "
				languages="LANGUAGES: "
				languagesAll="Python, Java, C, MySQL, HTML5, CSS3, JavaScript, PHP"
				frameworksLibraries="FRAMEOWRKS/LIBRARIES: "
				frameworksAll="React, Bootstrap"
				design="DESIGN: "
				designAll="Adobe Photoshop, Adobe XD"
				/>

				{/* WORK */}
				<Work title="Work: "
				place="bbb Shoes & Boots"
				position="Social Media Intern"
				duration="Jan 2016 - Aug 2016"
				description="Responsible for taking and editing pictures of the company’s products for use in displays and on social media. Edited with Photoshop."
				/>

				<Work title=""
				place="The Commons"
				position="Line Cook"
				duration="Sep 2017 - Aug 2016"
				description="Worked efficiently under pressure during rush hour shifts. Implemented a faster way to close and clean at the end of the day."
				/>	

				<Work title=""
				place="bbb Shoes and Boots"
				position="Software Developer"
				duration="May 2019 - Aug 2019"
				description="Developed four web applications that helped improve the company's storage system. Using MySQL, PHP, HTML/CSS."
				/>

				{/* project */}
				<Work title="Projects:"
				place="Personal Project"
				position="Discordgg"
				duration="In development"
				description="Discord bot that retrieves information from the Riot Games’ League of Legends API and displays it on discord. Helps you keep track of player's stats and current game information. Developing with Python."
				/>

				<Work title=""
				place="Project"
				position="Swoop"
				duration="In development"
				description="Game developed aimed to reduce stress and for mental health. This game was developed using HTML/CSS, javascript and implemented ReactJS."
				/>	

				<Work title=""
				place="Personal Project"
				position="Resume Website"
				duration="Nov 2019 - Dec 2019"
				description="Personal website to display my resume. This project was to gain experience and develop more of my knowledge abour ReactJS. This project was developed with HTML/CSS and ReactJS."
				/>	
				
				{/* Leadership */}

				<Work title="Leadership:"
				place="Squad Leader"
				position="TECHO Panama"
				duration="Aug 2015 - Present"
				description="Developed leaderships skill through actively cooperating to society trying to diminish poverty in Panama by building houses in low access places. I've lead more than 9 teams in building houses."
				/>

				{/* FOOTER */}

				<footer>
					<div className="footer">
						<p>Developed by: Daniel Chung</p>
						<p>Contact: pikachungg@gmail.com</p>
					</div>
				</footer>

			</div>
		</div>
    </div>
  );
}

export default App;
