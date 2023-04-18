import React, { Component } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logotipo from '../images/cabecalho.png';
import car from '../images/car.png';
import woman from '../images/woman.png';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            isLoading: false,
        };
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = () => {
        this.setState({ isLoading: true });

        setTimeout(() => {
            this.props.history.push({
                pathname: '/pieces',
                state: { name: this.state.name }
            });
        }, 2000);
    }


    handleValidation = () => {
        return this.state.name.length > 3;
    }

    render() {
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
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                        <img src={car} alt="Usuário" width="100px" height="100px" style={{ marginRight: '10px' }} />
                        <img src={woman} alt="Carro" width="100px" height="100px" style={{ marginLeft: '10px' }} />
                    </Box>
                    <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
                        Usuário encontrado
                    </Typography>
                    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Nome</TableCell>
                                    <TableCell>Ariela Sol</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Email</TableCell>
                                    <TableCell>ariela.sol@gmail.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">CPF</TableCell>
                                    <TableCell>123.456.789-00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Carro</TableCell>
                                    <TableCell>Toyota Corolla</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Ano</TableCell>
                                    <TableCell>2020</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            error={!this.handleValidation()}
                            helperText={
                                !this.handleValidation() &&
                                "Nome do profissional qualificado"
                            }
                        />
                        <Button
                            sx={{
                                width: '100%',
                                height: '60px',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                borderRadius: '10px',
                                textTransform: 'none',
                                marginTop: '40px',
                            }}
                            variant="contained"
                            color="primary"
                            disabled={!this.handleValidation()}
                            onClick={this.handleSubmit}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Prosseguir'}
                        </Button>
                    </form>
                </Box>
            </Container >
        );
    }
}

export default UserPage;