import { Typography } from '@mui/material';
import React from 'react';

const Tech = ({ tech }) => {
    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '18px', fontFamily: 'poppins', pl: 5, pr: 3, my: 5 }} variant="caption" display="inline" gutterBottom>
            {tech}
            </Typography>
            
        </div>
    );
};

export default Tech;