import { Box, Button, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
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

export const Empty = () => {
  return (
    <ThemeProvider theme={theme}>
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    }}>


    <Box component={'img'} sx={{width: '25%', mb:5}} src="./imgs/none.png" alt="img" />

    <Typography sx={{fontFamily:"Poppins"}}>
    Aún no has creado ninguna campaña. ¿Qué estás esperando?  Haz click en el bóton de abajo.
    </Typography>
    <Button 
              onClick={{}}
              type="button"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear campaña
    </Button>
    </Box>
    </ThemeProvider>
  )
}
