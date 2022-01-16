import React, { useState } from 'react';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

import { NavLink, useHistory } from 'react-router-dom';
import register from './../../../images/people-2.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, SetLoginData] = useState({});
    
    const history = useHistory();
    const { user, registerUser, isLoading, error } = useAuth();


    const handleOnBlur = e => {
        //field ar modda field ar name dhora hocca
        const field = e.target.name;
        //akana jai field ar name dhorca tar value dorca
        const value = e.target.value;

        //jai field ar name and value dhorca tara copy kora hocca ai line a... 
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        SetLoginData(newLoginData)
    }


    const handleLogin = e => {


        if (loginData.password !== loginData.password2) {
            alert('password not metched....!!!')
        }
        if (loginData.password === loginData.password2) {
            alert('are you sure to Register ?')
        }
        registerUser(loginData.email, loginData.password, loginData.name,  history)

        e.preventDefault();
    }



    return (
        <div>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                name="name"
                                type="text"
                                label="Your Name"
                                onBlur={handleOnBlur}
                                variant="standard" />


                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                name="email"
                                type="email"
                                label="Your Email"
                                onBlur={handleOnBlur}
                                variant="standard" />



                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Re-type Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '75%', m: 2, bgcolor: 'error.main' }} variant="contained">Register</Button>

                            <NavLink style={{ textDecoration: 'none' }} to="/login"> <Typography variant="h6" gutterBottom>
                                Already Registered ? Please Login.
                            </Typography></NavLink>


                        </form>}

                        {isLoading && <CircularProgress color="secondary" />
                        }
                        {user?.email && <Alert severity="success">Now you are a logedIn user, Congress...!!!</Alert>
                        }
                        {error && <Alert severity="error">You got a problem{error}</Alert>
                        }
                    </Grid>



                    <Grid item xs={12} md={6}>
                        <img src={register} style={{ width: '100%' }} alt="" />

                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Register;