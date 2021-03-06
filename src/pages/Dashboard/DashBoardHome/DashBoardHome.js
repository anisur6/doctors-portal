import { Grid } from '@mui/material';
import * as React from 'react';
import Calander from '../../Shared/Calander/Calander';
import Apoinments from '../Apointments/Apoinments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (

             <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Calander
                                date={date}
                                setDate={setDate}></Calander>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Apoinments date={date}></Apoinments>
                        </Grid>

                    </Grid>
     
    );
};

export default DashBoardHome;