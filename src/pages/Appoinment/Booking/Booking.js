import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <Typography sx={{
                        color: 'secondary.main', fontWeight: 'bold'
                    }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {space} Space Available
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                      Fee : $ {price} 
                    </Typography>

                    <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: 'secondary.main' }} >Book Appoinment</Button>

                </Paper>
            </Grid>

            <BookingModal
                booking={booking}
                date={date}
                open={open}
                setBookingSuccess={setBookingSuccess}
                handleClose={handleClose}
            ></BookingModal>
        </>
    );
};

export default Booking;