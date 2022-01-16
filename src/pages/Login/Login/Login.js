import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import sideimg from './../../../images/login.png'




const Login = () => {

    const [loginData, SetLoginData] = useState({});

    const { user, loginUser, isLoading, error, signInwithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        //akanta buji nai
        const field = e.target.name;
        const value = e.target.value;

        //agola to motao buji nai....
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        SetLoginData(newLoginData)
    }

    const handleGoogleSignIn = () => {
        signInwithGoogle(location, history);
    }


    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('are you sure to login ?')
        e.preventDefault();
    }

    return (
        <div>
            <h2>this is login page</h2>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Login
                        </Typography>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                name="email"
                                label="Your Email"
                                onChange={handleOnChange}
                                variant="standard" />



                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '75%', m: 2, bgcolor: 'error.main' }} variant="contained">Login</Button>

                            <NavLink style={{ textDecoration: 'none' }} to="/register"> <Typography variant="h6" gutterBottom>
                                New User? please Register.
                            </Typography></NavLink>


                        </form>}

                        {isLoading && <CircularProgress color="secondary" />
                        }
                        {user?.email && <Alert severity="success">Now you are a logedIn user, Congress...!!!</Alert>
                        }
                        {error && <Alert severity="error">You got a problem{error}</Alert>
                        }

                        <Button onClick={handleGoogleSignIn} variant="contained">Sign In with Google</Button>



                    </Grid>



                    <Grid item xs={12} md={6}>
                        <img src={sideimg} style={{ width: '100%' }} alt="" />

                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Login;