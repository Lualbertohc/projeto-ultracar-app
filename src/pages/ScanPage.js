import React, { Component } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  CircularProgress
} from '@mui/material';
import qrcode from '../images/qrcode.png';
import logotipo from '../images/cabecalho.png';

class ScanPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  handleClick = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.props.history.push('/user');
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <AppBar position="static">
          <Toolbar>
            <img src={logotipo} alt="logotipo da empresa" width="50" height="50" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ultracar
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            marginTop: '20%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Escanear qrcode
          </Typography>
          <img
            src={qrcode}
            alt='QR Code ilustrativo'
            width='50%'
            maxWidth='300'
            height='auto'
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            sx={{
              width: '80%',
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
            {isLoading ? <CircularProgress size={24} /> : 'Escanear'}
          </Button>
        </Box>
      </Container >
    );
  }
}

export default ScanPage;
