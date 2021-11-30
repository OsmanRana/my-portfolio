import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import './Project.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '100vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    
};



const Project = ({ project }) => {
    const {id,name, link, description, image, snap, technology } = project;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(technology)
    return (
        <>
        <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            my: 5
        }} >
            <Grid item xs={12} md={6}  >
                <Button onClick={handleOpen}><img src={snap} alt="Nitch website" width="100%"></img></Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ml: 1, borderLeft: 2, borderColor: '#ffb400', pl: 5,}}>
                    <Typography sx={{ fontWeight: 200, fontSize: '36px', color: '#ffb400', fontFamily: 'poppins' }} variant="h4" component="div" gutterBottom>
                        {name}_
                    </Typography>
                    <Link to={`/projectDetails/${id}`} style={{textDecoration: 'none'}}><Button variant="outlined" sx={{ color: "white", fontWeight: 300 }}>Details</Button></Link>
                    <a href={link} rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}><Button variant="outlined" sx={{ color: "white", fontWeight: 300, ml: 5 }}>Visit Me</Button></a>
                </Box>
            </Grid>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Button onClick={handleClose} variant="outlined"  size="small" sx={{ my: 1, transform: 'translate(260%)', color: 'error' }}>Close</Button>
                        <img src={image} alt=" Website Snap Shot" width="100%" height="100%"></img>
                    </Box>
                </Modal>
            </div>
        </Grid >
        
        </>
    );
};

export default Project;