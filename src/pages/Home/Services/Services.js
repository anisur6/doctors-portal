import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluride from './../../../images/fluoride.png'
import cavity from './../../../images/cavity.png'
import whitning from './../../../images/whitening.png'

const services = [
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fuga libero similique eum accusantium, distinctio quaerat, nam architecto at laudantium voluptas voluptate placeat aliquid quod. Molestias repellendus voluptates quos incidunt?',
        img: fluride
    },
    {
        name: 'Cavity Felling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fuga libero similique eum accusantium, distinctio quaerat, nam architecto at laudantium voluptas voluptate placeat aliquid quod. Molestias repellendus voluptates quos incidunt?',
        img: cavity
    },
    {
        name: 'Teeth Whitning',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fuga libero similique eum accusantium, distinctio quaerat, nam architecto at laudantium voluptas voluptate placeat aliquid quod. Molestias repellendus voluptates quos incidunt?',
        img: whitning
    },
]



function Services() {
    return (

        <Container>
            <Typography variant="body2" sx={{ fontWeight: 'bold', letterSpacing: 6, mt: "2rem", fontSize: 16, color: 'success.main' }} color="text.secondary">
                OUR SERVICES
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', my: '1rem', fontSize: 30 }} color="text.secondary">
                Services We Provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        key={service.name}
                        service={service}></Service>)}
                </Grid>
            </Box>
        </Container>

    );
}

export default Services;