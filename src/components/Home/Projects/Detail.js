import { Grid, Typography } from '@mui/material';
import React from 'react';
import Description from './Description';
import Tech from './Tech';

const Detail = ({ project, projectDetailId }) => {
    const projectIdNumber = parseInt(projectDetailId)
    const { name, snap1, snap2, snap3, snap4, description, technology } = project;
console.log(description)
    return (
        <div>
            {
                project?.id === projectIdNumber && <div>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                        <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>{name}_</span><br />
                    </Typography>
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        my: 5
                    }} >
                        <Grid item xs={12} md={6}  >
                            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                             description_
                            </Typography>
                            {
                                description?.map(desc=> <Description
                                desc={desc}
                                ></Description>)
                            }
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                                technologies_
                            </Typography>
                            {
                                technology?.map(tech => <Tech
                                    key={tech}
                                    tech={tech}
                                ></Tech>)
                            }
                        </Grid>
                    </Grid >
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        my: 5
                    }} >
                        <Grid item xs={12} md={6}  >
                            <img src={snap1} alt="Nitch website" width="100%"></img>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={snap2} alt="Nitch website" width="100%"></img>
                            <img src={snap3} alt="Nitch website" width="100%"></img>
                            <img src={snap4} alt="Nitch website" width="100%"></img>
                        </Grid>
                    </Grid >
                </div>
            }

        </div>
    );
};

export default Detail;