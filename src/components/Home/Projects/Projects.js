import { Grid, Typography } from '@mui/material';
import React from 'react';
import Project from './Project';
const projects = [
    {
    id: 1,
    name: 'nitch product',
    description: '',
    image: '/image/nitch.png',
    snap: '/image/nitchSnap.png',
    technology: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'REACT', 'React Router', 'React Bootstrap', 'Material UI', 'Firebase Authentication', 'Firebase Deployment', 'Node Js', 'Express Js', 'MongoDB Atlas', 'Heroku Deployment', 'API']
},
    {
    id: 2,
    name: 'travel around',
    description: '',
    image: '/image/travel.png',
    snap: '/image/travelSnap.png',
    technology: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'REACT', 'React Router', 'React Bootstrap', 'Material UI', 'Firebase Authentication', 'Firebase Deployment', 'Node Js', 'Express Js', 'MongoDB Atlas', 'Heroku Deployment', 'API']
},
    {
    id: 3,
    name: 'educational',
    description: '',
    image: '/image/education.png',
    snap: '/image/educationSnap.png',
    technology: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'REACT', 'React Router', 'React Bootstrap', 'Material UI', 'Firebase Authentication', 'Firebase Deployment', 'Node Js', 'Express Js', 'MongoDB Atlas', 'Heroku Deployment', 'API']
},
    {
    id: 4,
    name: 'hospital website',
    description: '',
    image: '/image/hospital.png',
    snap: '/image/hospitalSnap.png',
    technology: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'REACT', 'React Router', 'React Bootstrap', 'Material UI', 'Firebase Authentication', 'Firebase Deployment', 'Node Js', 'Express Js', 'MongoDB Atlas', 'Heroku Deployment', 'API']
}
];


const Projects = () => {
    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5}} variant="h4"  component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>my_</span><br />
                works:
            </Typography>
            
            <Grid sx={{ my: 5 }} container spacing={2}>
                {
                    projects?.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }

            </Grid>
            
        </div>
    );
};

export default Projects;