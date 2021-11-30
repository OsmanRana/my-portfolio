import { Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>about_</span><br />
                me:
            </Typography>
        </div>
    );
};

export default AboutMe;