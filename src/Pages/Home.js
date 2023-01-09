import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import "../Styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2> Hi, My Name is Firoz</h2>
                <div className="prompt">
                    <p>I'm a MERN stack developer with a passion for learning and creating.</p>
                    <a href='https://www.linkedin.com/in/shaik-firoz-ahmad-b0b77b242/' target="_blank">
                        <LinkedInIcon />
                    </a>
                    <EmailIcon />
                    <a href='https://github.com/FirozSkAhmad' target="_blank">
                        <GithubIcon />
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, ExpressJS, MongoDB, AWS S3, Redies
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript</span>
                    </li>
                </ol>
            </div>
        </div >
    )
}

export default Home
