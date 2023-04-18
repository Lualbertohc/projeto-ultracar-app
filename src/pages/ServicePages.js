import React, { Component } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AddCircleOutline } from '@mui/icons-material';
import cabecalho from '../images/cabecalho.png';
import {
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Typography
} from '@mui/material';

class ServicePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startedServices: [
                {
                    id: 1,
                    user: {
                        avatar: 'https://c0.klipartz.com/pngpicture/827/360/gratis-png-mecanico-hombre-ilustracion-auto-hyundai-motor-company-mecanico-de-automoviles-taller-de-reparacion-de-automoviles-mecanico.png'
                    },
                    startTime: new Date(),
                    status: 'started'
                }
            ]
        };
    }

    finishService = (id) => {
        const { startedServices } = this.state;
        const updatedServices = startedServices.map(service => {
            if (service.id === id) {
                return {
                    ...service,
                    endTime: new Date(),
                    status: 'finished'
                };
            }
            return service;
        });
        this.setState({ startedServices: updatedServices });
    }

    render() {
        const { startedServices } = this.state;
        return (
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={cabecalho} alt="Logo" width="50px" height="50px" />
                        <Typography variant="h6">Ultracar</Typography>
                    </Box>
                    <Button startIcon={<ArrowBackIcon />} onClick={() => window.history.back()} variant="outlined">Voltar</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                    {startedServices.map(service => (
                        <Box key={service.id} sx={{ width: '100%', maxWidth: 500, mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src={service.user.avatar} alt={service.user.name} />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6">{service.user.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">{`Iniciado em ${service.startTime.toLocaleString()}`}</Typography>
                                    {service.endTime && (
                                        <Typography variant="body2" color="textSecondary">{`Finalizado em ${service.endTime.toLocaleString()}`}</Typography>
                                    )}
                                </Box>
                                <Box sx={{ ml: 'auto' }}>
                                    <Typography variant="h6" color="success">{service.status === 'started' ? 'Iniciado' : 'Finalizado'}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                                {service.status === 'started' && (
                                    <Button variant="contained" color="success" onClick={() => this.finishService(service.id)}>Finalizar serviço</Button>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <IconButton color="primary" aria-label="Iniciar novo serviço">
                        <AddCircleOutline sx={{ fontSize: 48 }} />
                    </IconButton>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>Novo serviço</Typography>
                </Box>
            </Container>);
    }
}

export default ServicePage;
