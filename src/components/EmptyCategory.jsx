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

export const EmptyCategory = () => {
  return (
    <ThemeProvider theme={theme}>
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    }}>


    <Box component={'img'} sx={{ mb:5}} src="../imgs/none.png" alt="img" />

    <Typography sx={{fontFamily:"Poppins"}}>
    Aún no se han creado campañas en esta categoría. Te invitamos a explorar las otras categorías.
    </Typography>
    <Box sx={{display:'flex' }}>
    <Link component={RouterLink} to="/categories" underline="none" color="inherit"> 
    <Button 
              onClick={{}}
              type="button"
              variant="outlined"
              color="primary"
              sx={{ mt: 3, mb: 2,mr:5 }}
            >
              Volver a categorías
    </Button>
    </Link>

    </Box>
    </Box>
    </ThemeProvider>
  )
}
