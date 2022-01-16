import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;

    const { user } = useAuth();
    //akana kecu kaj korca .... from a jodi kaw data change kora ba na kora data input ta nawar jonno kora hoica...
    const initialInfo = { patientName: user.displayName, email: user.email, phone: ' ' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;

        setBookingInfo(newInfo);
    }



    const handlefrom = event => {
        window.alert('masud valo hoya jao ....!!!')



        //collect data 
        const appoinment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to the database
        // console.log(appoinment);
        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleClose();
              }
            })



        event.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography sx={{ mb: 2 }} id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handlefrom}>
                            <TextField sx={{ m: 1, width: '100%' }}
                                disabled
                                id="outlined-disabled"
                                label="Shedule"
                                defaultValue={time}
                            />

                            <TextField sx={{ m: 1, width: '100%' }}
                                disabled
                                id="outlined-disabled"
                                label="Date"
                                defaultValue={date.toDateString()}
                            />

                            <TextField sx={{ m: 1, width: '100%' }}

                                id="outlined-required"
                                label="Name"
                                name="patientName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                            />

                            <TextField sx={{ m: 1, width: '100%' }}

                                type="number"
                                name="phone"
                                onBlur={handleOnBlur}
                                id="outlined-number"
                                label="Phone Number"
                            />

                            <TextField sx={{ m: 1, width: '100%' }}
                                required
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                id="outlined-required"
                                label="Email"
                                defaultValue={user.email}
                            /> <br />

                            <Button type="submit" variant="contained" sx={{ bgcolor: 'secondary.main' }}> Confirm  Book</Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;