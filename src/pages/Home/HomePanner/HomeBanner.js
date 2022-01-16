import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from './../../../images/chair.png'
import bg from './../../../images/bg.png'


const bannerBackground = {
    background: `url(${bg}})`,
    padding: '20px',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const verticalCenter = {
    display: 'flex',
    alignItems : 'center'
} 


const HomeBanner = () => {
    return (
        <Container style={bannerBackground} container sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid sx={{
                    textAlign: 'left', ml: 'px'
                }} item xs={12} md={5}>
                    <Typography variant="h3" style={{ color: '#5CE7ED' }} >
                        Your new Smile <br />
                        Starts hare
                    </Typography>
                    <Typography variant="h6" style={{ color: 'gray' }} sx={{ mt: "2rem", fontSize: 20 }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor incidunt saepe molestiae aliquid doloribus dolorum provident quos consequatur, eius unde ipsum eligendi voluptate a sequi!
                    </Typography>

                    <Button variant="contained" >Get Appoinment</Button>
                </Grid>

                <Grid  style={verticalCenter} item xs={12} md={7}>
                    <img style={{ height: '300px', width: '70%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeBanner;