import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, Link } from '@mui/material';



const Home = () => {
    return (
        <Box sx={{ height: '800px', display: 'flex' }} >
            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Grid item xs={12} md={6} >
                    <Box>
                        <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '36px', fontFamily: 'poppins', mb: -2 }} variant="subtitle1" component="div" gutterBottom>
                            i am
                        </Typography>
                        <Typography sx={{ color: '#ffb400', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', my: 0 }} variant="h4" component="div" gutterBottom>
                            OSMAN FAROOQUE
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '36px', fontFamily: 'poppins', mt: 0 }} variant="h4" component="div" gutterBottom>
                            web developer
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 200, fontSize: '18px', fontFamily: 'poppins' }} variant="subtitle1" gutterBottom component="div">
                            I am a passionate web developer committed to delivering clean code, pixel-perfect design and user-friendly experience.
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '18px', fontFamily: 'poppins', mt: 5}} variant="subtitle1" gutterBottom component="div">
                            Are you minding a project ?
                        </Typography>
                        <Button variant="outlined" sx={{ color: '#ffb400', fontWeight: 700, fontSize: '18px', fontFamily: 'poppins', my: 2 , px: 10 }}>Let's Talk</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        mb: 5
                    }}>
                        <Link href="https://www.linkedin.com/in/osmanrana/" target="_blank"><img src="/icon/linked.png" alt="LinkedIn"></img></Link>
                        <Link href="https://github.com/OsmanRana" target="_blank"><img src="/icon/github.png" alt="Github"></img></Link>
                        <Link href="https://www.fiverr.com/osmanrana?up_rollout=true" target="_blank"><img src="/icon/fiverr.png" alt="Fiverr"></img></Link>

                    </Box>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                            <Link sx={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1AbI26CL02NCmr-JyC7HSTJS6lcdcAiYi/view?usp=sharing" target="_blank"><Button variant="contained" sx={{ bgcolor: "#ffb400" }}>Download resume</Button></Link>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >

    );
};

export default Home;