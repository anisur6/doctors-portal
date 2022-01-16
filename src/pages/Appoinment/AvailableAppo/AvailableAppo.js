import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: '1',
        name: 'Oral Surgery',
        price: 75,
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: '2',
        name: 'Cosmatic Density',
        price: 65,
        time: '10.30 PM - 11.00 PM',
        space: 33,
    },
    {
        id: '3',
        name: 'Teeth Checking',
        price: 25,
        time: '02.00 AM - 03.00 aM',
        space: 15,
    },
    {
        id: '4',
        name: 'Oral Surgery',
        price: 65,
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: '5',
        name: 'Cosmatic Density',
        price: 55,
        time: '10.30 PM - 11.00 PM',
        space: 33,
    },
    {
        id: '6',
        name: 'Teeth Checking',
        price: 45,
        time: '02.00 AM - 03.00 aM',
        space: 15,
    }
]

const AvailableAppo = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <>
            <Container>

                <Typography sx={{
                    color: 'secondary.main', fontWeight: 'bold', py: 5
                }} variant="h4" gutterBottom component="div">
                    Available appoinment on {date.toDateString()}
                </Typography>
                {bookingSuccess && <Alert security="success"> Apoinment SuccessFul</Alert>}

                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            setBookingSuccess={setBookingSuccess}
                            booking={booking}
                            date={date}></Booking>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default AvailableAppo;