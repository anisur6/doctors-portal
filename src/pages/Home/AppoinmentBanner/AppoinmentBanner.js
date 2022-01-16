import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import background from './../../../images/appointment-bg.png'
import doctor from './../../../images/doctor.png'







const appoinmentbg = {
    background: `url(${background})`,
    marginTop: 176,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity'
}


const AppoinmentBanner = () => {
    return (
        <div>
            <Box style={appoinmentbg}
                sx={{
                    flexGrow: 1
                }}
            >

                <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: -120 }} src={doctor} alt="" />
                    </Grid>
                    <Grid sx={{
                        textAlign: 'left'
                    }} item xs={12} md={6}>
                        <Typography style={{color: '#5CE7ED'}} variant="h2" sx={{ fontWeight: 'bold', letterSpacing: 6, mt: "2rem", fontSize: 20 }} >
                           <h2> APPOINMENT</h2>
                        </Typography>
                        <Typography style={{color: 'white'}} variant="h6" sx={{ mt: "2rem", fontSize: 20, color: 'primanry.main' }} color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, asperiores sint quis vitae cum quo ab iusto, facilis laborum, et tenetur! Nulla corporis fugiat incidunt odio quis error dolor modi!
                        </Typography>
                    <br />
                        <Button variant="contained" >Book Now</Button>
                    </Grid>

                </Grid>

            </Box>

        </div>
    );
};

export default AppoinmentBanner;