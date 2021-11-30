import { Button, Grid } from '@mui/material';
import React from 'react';

const ProjectDetails = ({project}) => {
    
    console.log(project)
    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            my: 5
        }} >
            <Grid item xs={12} md={6}  >
                <Button ><img src='' alt="Nitch website" width="100%"></img></Button>
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
            
        </Grid >
    );
};

export default ProjectDetails;