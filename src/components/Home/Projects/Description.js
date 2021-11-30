import { Typography } from '@mui/material';
import React from 'react';

const Description = ({ desc }) => {
    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '18px', letterSpacing: 1, fontFamily: 'poppins', pl: 5, pr: 3, my: 5 }} variant="h4" component="div" gutterBottom>
                {desc}
            </Typography>
        </div>
    );
};

export default Description;