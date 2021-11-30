import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import useProjects from '../../../hooks/useProjects';
import Detail from './Detail';

const ProjectDetails = () => {
    const { projectDetailId } = useParams();
    const [projects] = useProjects();

    return (
        <div>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', borderLeft: 5, borderColor: '#ffb400', pl: 5, my: 5 }} variant="h4" component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>project_</span><br />
                details:
            </Typography>

            <Grid sx={{ my: 5 }} container spacing={2}>
                {
                    projects?.map(project => <Detail
                        key={project.id}
                        project={project}
                        projectDetailId={ projectDetailId}
                    ></Detail>)
                }

            </Grid>
        </div>

    );
};

export default ProjectDetails;