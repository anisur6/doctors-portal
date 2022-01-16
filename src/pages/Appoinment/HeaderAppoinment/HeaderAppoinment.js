import { Container, Grid } from '@mui/material';
import React from 'react';
import Calander from '../../Shared/Calander/Calander';
import chair from './../../../images/chair.png'

const HeaderAppoinment = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calander date={date} setDate={setDate}></Calander>
                </Grid>


                <Grid item xs={12} md={6}>
                    <img src={chair} style={{width: '300px'}} alt=""  />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderAppoinment;