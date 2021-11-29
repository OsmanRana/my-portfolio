import { Typography } from '@mui/material';
import React from 'react';

const Projects = () => {
    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins' }} variant="h4" component="div" gutterBottom>
                <span style={{fontWeight: 200, fontSize: '36px', color:'#ffb400'}}>my_</span><br/>
                works:
            </Typography>
        </div>
    );
};

export default Projects;