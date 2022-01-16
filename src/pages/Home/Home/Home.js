import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import HomeBanner from '../HomePanner/HomeBanner';
import Services from '../Services/Services';
import treatment from './../../../images/treatment.png'






const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>



            <Services></Services>


            <AppoinmentBanner></AppoinmentBanner>




            <br />
            <Container  container sx={{ flexGrow: 1, my: 5 }}>
                <Grid container spacing={4}>
                    <Grid sx={{
                        textAlign: 'left', ml: 'px'
                    }} item xs={12} md={6}>
                        <img style={{ height: '400px', width: '70%' }} src={treatment} alt="" />

                    </Grid>

                    <Grid sx={{textAlign: 'left'}} item xs={12} md={6}>
                        <Typography sx={{fontWidth : 'bold'}} variant="h3" style={{ color: '#5CE7ED' }} >
                            Your new Smile <br />
                            Starts hare
                        </Typography>
                        <Typography variant="h6" style={{ color: 'gray' }} sx={{ my: "2rem", fontSize: 20 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor incidunt saepe molestiae aliquid doloribus dolorum provident quos consequatur, eius unde ipsum eligendi voluptate a sequi!
                        </Typography>

                        <Button type="submit" variant="contained" sx={{ bgcolor: 'secondary.main' }}> Confirm  Book</Button>
                    </Grid>
                </Grid>
            </Container>


        </div>
    );
};

export default Home;