import './App.css';
import React from 'react';
import me from './assets/images/resume.jpg';
import instagram from './assets/images/instagram.png';
import github from './assets/images/github.png';
import website from './assets/images/website.png';
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
				<img className="main-image" src={me} alt="A picture of me"/>
				<div className="image-content">
					<h3>Hello, I'm Daniel Chung</h3>
					<p>A Web developer that aims to create impactful websites and applications with effective code.</p>
					<div className="links">
						<a href="https://github.com/pikachungg">
							<img className="image-links" src={github} alt="icon link for my: github"/>
						</a>
						<a href="https://www.instagram.com/pikachungg/">
							<img className="image-links" src={instagram} alt="icon link for my: instagram "/>
						</a>
						<a href="">
							<img className="image-links" src={website} alt="icon link for my: website"/>
						</a>
					</div>
				</div>
			</div>

			<div className="right">
				<div className="space"></div>
				{/* Introduction */}
				<Content title="Intro:"
				paragraph1="Hi! I'm a Web developer born and raised in Panama with Asian roots. I'm currently in my third year pursuing a degree in Web and Mobile Computing at Rochester Institute of Technology (RIT)."
				paragraph2="I specialize in building websites and applications with easy to use and modern user interfaces and back-ends. I enjoy developing both front-end and back-end for all my sites and apps."
				paragraph3="I'm currently looking for a Co-Op in summer 2020."
				/>
				<div className="space"></div>
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
				<div className="space"></div>
				{/* TOOLS */}
				<Tools title="Tools: "
				languages="LANGUAGES: "
				languagesAll="Python, Java, C, MySQL, HTML5, CSS3, JavaScript, PHP"
				frameworksLibraries="FRAMEOWRKS/LIBRARIES: "
				frameworksAll="React, Bootstrap"
				design="DESIGN: "
				designAll="Adobe Photoshop, Adobe XD"
				/>
				<div className="space"></div>
				{/* WORK */}
				<Work title="Work: "
				place="bbb Shoes & Boots"
				position="Social Media Intern"
				duration="Jan 2016 - Aug 2016"
				description="I photographed the company's products, edited the pictures, and introduced new creative ideas for social media posts. I used my pictures for the company's website and social media. I adapted and learned photoshop."
				/>
				
				<Work title=""
				place="The Commons"
				position="Line Cook"
				duration="Sep 2017 - Aug 2016"
				description="Worked efficiently under pressure during the rush hour shifts and implemented a faster way for closing and cleaning at the end of the day."
				/>	

				<Work title=""
				place="bbb Shoes and Boots"
				position="Software Developer"
				duration="May 2019 - Aug 2019"
				description="I built four useful applications for the company to facilitate the communication between the information in their database and the user's experience for fetching such information. I used HTML/CSS, JavaScript, and PHP."
				/>
				<div className="space"></div>
				{/* project */}
				<Work title="Projects:"
				place="Personal Project"
				position="Discordgg"
				duration="In development"
				description="A Discord bot that retrieves information from the Riot Games' League of Legends API and displays user requested information on discord. It helps you keep track of the player's stats and current game information, depending on what its asked. This bot is currently being developing with Python."
				/>

				<Work title=""
				place="Project"
				position="Swoop"
				duration="In development"
				description="Swoop is a game developed with mental health as our primary goal. We aimed to reduce stress and anxiety through a relaxing and engaging experience. This project developed using HTML/CSS, JavaScript, and ReactJS."
				/>	

				<Work title=""
				place="Personal Project"
				position="Resume Website"
				duration="Nov 2019 - Dec 2019"
				description="Personal website to display my resume. This project was to gain experience and develop more of my knowledge abour ReactJS. This project was developed with HTML/CSS and ReactJS."
				/>	
				
				{/* Leadership */}
				<div className="space"></div>
				<Work title="Leadership:"
				place="Squad Leader"
				position="TECHO Panama"
				duration="Aug 2015 - Present"
				description="Developed leaderships skill through actively cooperating to society, trying to diminish poverty in Panama by building houses in low access places. I've led more than 9 teams in building houses."
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
