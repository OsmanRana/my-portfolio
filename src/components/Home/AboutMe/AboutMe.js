import { Button, Link, Typography } from '@mui/material';
import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins',textAlign: 'justify', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>about_</span><br />
                me:
            </Typography>
            <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '18px',letterSpacing: 1, fontFamily: 'poppins',  pl: 5, pr: 3, my: 5 }} variant="h4" component="div" gutterBottom>
                It is my great pleasure that you took the time to visit my portfolio.<br/><br/> Let me introduce myself first.<br/> I am <strong className="highlight">Md Osman Farooque</strong> an experienced freelance graphic designer looking forward to starting my new career as a web developer.<br/><br/>
                I have a strong understanding of the latest web technologies. I am a confident user of<br/><br/>
                <span className="highlight">Front End:</span> HTML5, CSS3, Bootstrap, JavaScript, ES6, REACT, React Router, React Bootstrap, Material UI, Firebase Authentication, Firebase Deployment.<br/>
                <span className="highlight">Back End:</span> Node Js, Express Js, MongoDB Atlas, Heroku Deployment, API.<br/><br/>
                I am aware of technologies such as Tailwind CSS, Redux, React Native, Typescript, SASS, Styled Component etc., and am ready to explore them whenever needed.<br/><br/>
                I hope you liked my projects.<br/>
                Thank you very much for your time.
            </Typography>
            <Link sx={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1AbI26CL02NCmr-JyC7HSTJS6lcdcAiYi/view?usp=sharing" target="_blank"><Button variant="outlined" sx={{ color: "white", fontWeight: 300, ml: 5, mb: 5 }}>Download resume</Button></Link>
        </div>
    );
};

export default AboutMe;