import React, { Component } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logotipo from '../images/cabecalho.png';
import motor from '../images/motor.png';
import tires from '../images/tires.png';
import headlight from '../images/headlight.png';

import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Paper,
    Typography
} from '@mui/material';

class PiecesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pieces: [
                {
                    name: 'Motor',
                    price: 100,
                    image: motor,
                },
                {
                    name: 'Pneu',
                    price: 150,
                    image: tires
                },
                {
                    name: 'Farol',
                    price: 200,
                    image: headlight
                }
            ],
            isLoading: false
        };
    }

    handleClick = () => {
        this.setState({ isLoading: true });

        setTimeout(() => {
            this.props.history.push('/service');
        }, 2000);
    }

    render() {
        const { name } = this.props.location.state;
        const { isLoading } = this.state;

        return (
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logotipo} alt="logotipo da empresa" width="50px" height="50px" />
                        <Typography variant="h6">Ultracar</Typography>
                    </Box>
                    <Button startIcon={<ArrowBackIcon />} onClick={() => window.history.back()} variant="outlined">Voltar</Button>
                </Box>
                <Box sx={{ marginTop: 8 }}>
                    <Typography component='h1' variant='h5' sx={{ mt: 2 }}>
                        {`Seja bem vindo(a) ${name}:`}
                    </Typography>
                    <Typography component='h1' variant='h5' sx={{ mt: 2 }}>
                        Peças:
                    </Typography>
                    <Grid container spacing={2}>
                        {this.state.pieces.map(piece => (
                            <Grid item xs={12} sm={6} md={4} key={piece.name}>
                                <Paper elevation={3}>
                                    <Box sx={{ p: 2 }}>
                                        <img src={piece.image} alt={piece.name} width="100%" />
                                        <Typography variant="h6" sx={{ mt: 2 }}>{piece.name}</Typography>
                                        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>{`R$ ${piece.price.toFixed(2)}`}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: '100%',
                            height: '60px',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            borderRadius: '10px',
                            textTransform: 'none',
                            marginTop: '40px',
                        }}
                        disabled={isLoading}
                        onClick={this.handleClick}
                    >
                        {isLoading ? <CircularProgress size={24} /> : 'Iniciar serviço'}
                    </Button>
                </Box>
            </Container>
        );
    }
}

export default PiecesPage;
