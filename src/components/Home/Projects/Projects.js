import { Grid, Typography } from '@mui/material';
import React from 'react';
import useProjects from '../../../hooks/useProjects';
import Project from './Project';



const Projects = () => {
    const [projects] = useProjects();
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