import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutFrom from './CheckOutFrom';




const stripePromise = loadStripe('pk_test_51Jw74hGxwz43oJsrgYYSuj1kZIvZ0w9Fm2AgZyrXRj0tXQ38GHZwH4EE312OEtYa46AiUclXd6cilS0UdEJ0AGwQ00Dz2oUK2T');




const Payment = () => {
    const { appoinmentId } = useParams();
    const [appoinment, setAppoinment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appoinments/${appoinmentId}`)
            .then(res => res.json())
            .then(data => setAppoinment(data));
    }, [appoinmentId])
    return (
        <div>
            <h2>Payment for Id : {appoinmentId}</h2>
            <h3>Patient Name: {appoinment.patientName}</h3>
            <h4>pay: ${appoinment.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckOutFrom
                appoinment={appoinment}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;