import { Box, Button, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import Typography from './Typography'


const theme = createTheme({
  palette: {
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#C58ADE',
    // dark: will be calculated from palette.primary.main,
     contrastText: "#fff"
  },
}
});

export const EmptyCreate = () => {
  return (
    <ThemeProvider theme={theme}>
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    }}>


    <Box component={'img'} sx={{width: '25%', mb:5}} src="./imgs/none.png" alt="img" />

    <Typography sx={{fontFamily:"Poppins"}}>
    Para crear una campaña debes tener una cuenta de dreamUp.
    Inicia sesión para continuar o de lo contrario has click en registrarme para crear una cuenta.
    </Typography>
    <Box sx={{display:'flex' }}>
    <Link component={RouterLink} to="/register" underline="none" color="inherit"> 
    <Button 
              onClick={{}}
              type="button"
              variant="outlined"
              color="primary"
              sx={{ mt: 3, mb: 2,mr:5 }}
            >
              Registrarme
    </Button>
    </Link>
    <Link component={RouterLink} to="/login" underline="none" color="inherit"> 
    <Button 
              onClick={{}}
              type="button"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
    </Button>
    </Link>
    </Box>
    </Box>
    </ThemeProvider>
  )
}
