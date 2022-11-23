import { Box, Button } from '@mui/material'
import React from 'react'
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import Typography from './Typography'

export const EmptyCreate = () => {
  return (
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    }}>


    <Box component={'img'} sx={{width: '25%', mb:5}} src="./imgs/none.png" alt="img" />

    <Typography>
    Para crear una campaña debes tener una cuenta de dreamUp.
    Inicia sesión para continuar o de lo contrario has click en registrarme para crear una cuenta.
    </Typography>
    <Box sx={{display:'flex' }}>
    <Link component={RouterLink} to="/register" underline="none" color="inherit"> 
    <Button 
              onClick={{}}
              type="button"
              variant="outlined"
              color="secondary"
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
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
    </Button>
    </Link>
    </Box>
    </Box>
  )
}
