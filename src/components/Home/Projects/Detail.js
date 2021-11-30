import { Grid, Typography } from '@mui/material';
import React from 'react';

const Detail = ({ project, projectDetailId }) => {
    const projectIdNumber = parseInt(projectDetailId)
    const { name, snap1, snap2, snap3, snap4 } = project;
    console.log (snap1)

    return (
        <div>
            {
                project?.id === projectIdNumber && <div>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                        <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>{name}_</span><br />
                    </Typography>
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        my: 5
                    }} >
                        <Grid item xs={12} md={6}  >
                            <img src={snap1} alt="Nitch website" width="100%"></img>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            
                        </Grid>
                    </Grid >
                </div>
            }

        </div>
    );
};

export default Detail;