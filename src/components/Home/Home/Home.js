import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';




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
                            i am a passionate web developer committed to delivering clean code, pixel-perfect design and user-friendly experience.
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '18px', fontFamily: 'poppins', letterSpacing: 3, mt: 5}} variant="subtitle1" gutterBottom component="div">
                            are you minding a project?
                        </Typography>
                        <Link sx={{ textDecoration: 'none' }} href="#contactMe"><Button variant="outlined" sx={{ color: '#ffb400', fontWeight: 700, fontSize: '18px', letterSpacing: 6, fontFamily: 'poppins', my: 2 , px: 10 }}>Let's Talk</Button></Link>

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
                            justifyContent: 'space-evenly',

                        }}>
                            <Link sx={{ textDecoration: 'none' }} href="#aboutMe"><Button variant="outlined" sx={{ color: "white", fontWeight: 300 }}>About Me</Button></Link>
                            <Link sx={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1AbI26CL02NCmr-JyC7HSTJS6lcdcAiYi/view?usp=sharing" target="_blank"><Button variant="outlined" sx={{ color: "white", fontWeight: 300 }}>Download resume</Button></Link>
                            <NavLink style={{ textDecoration: 'none' }} to="/myBlogs"><Button variant="outlined" sx={{ color: "white", fontWeight: 300 }}>My Blogs</Button></NavLink>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
            
        </Box >

    );
};

export default Home;