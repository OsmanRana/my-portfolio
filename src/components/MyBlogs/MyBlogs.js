import { Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MyBlogs = () => {
    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>my_</span><br />
                blogs:
            </Typography>
            <Typography sx={{ color: 'white', fontFamily: 'poppins', py: 1 }} variant="caption" display="inline" gutterBottom>
                this page is under construction, will be available soon ...
            </Typography>
            <br/>
            <NavLink style={{ textDecoration: 'none' }} to="/"><Button variant="outlined" sx={{ color: "white", fontWeight: 300, my:5 }}>Back to Home</Button></NavLink>
        </div>
    );
};

export default MyBlogs;