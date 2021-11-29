import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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
const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const Project = ({ project }) => {
    const { name, description, image, snap, technology } = project;
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    console.log(project)
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
                    <Button onClick={handleOpen2} variant="outlined" sx={{ color: "white", fontWeight: 300 }}>Details</Button>
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
            <div>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style2}>
                    <Button onClick={handleClose2} variant="outlined"  size="small" sx={{ my: 1}}>Close</Button>
                    <Typography sx={{ fontWeight: 200, fontSize: '18px', color: '#ffb400', fontFamily: 'poppins' }} variant="h4" component="div" gutterBottom>
                        details comming soon_
                    </Typography>
                    </Box>
                </Modal>
            </div>
            
        </Grid >
        </>
    );
};

export default Project;