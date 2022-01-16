import React from 'react';
import AvailableAppo from '../AvailableAppo/AvailableAppo';
import HeaderAppoinment from '../HeaderAppoinment/HeaderAppoinment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    
    return (
        <div>
            <HeaderAppoinment date={date} setDate={setDate}></HeaderAppoinment>


            <AvailableAppo date={date}></AvailableAppo>
        </div>
    );
};

export default Appoinment;