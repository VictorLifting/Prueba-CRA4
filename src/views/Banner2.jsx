import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink} from "react-router-dom";
import Typography from '../components/Typography';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

export const Banner2 = () => {


  const theme = createTheme({
    palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#C58ADE',
      // dark: will be calculated from palette.primary.main,
       contrastText: "#fff"
    },

    white:{
      main: '#FFFFFF',
      contrastText:'#C58ADE'
    }
  }
  });

  return (
<ThemeProvider theme={theme}>
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        mt: 3,
        alignItems: 'center',
        backgroundColor:"#C58ADE",
       paddingLeft:5,
    }}>

    <Box> 
    <Typography variant="h3" color="#ffffff" sx={{ mb: 2, fontFamily:"Poppins", fontWeight:"600" }} >¿Tienes en mente una campaña? </Typography>
    <Typography variant="h5" color="#ffffff" sx={{fontFamily:"Poppins"}}>Hazla realidad con nosotros! </Typography>
    
    <p></p>
    <Box sx={{
    
    }
    }>

        <Link component={RouterLink} to="/create" underline="none" color="inherit" marginRight={5}>

        <Button 
        type="button"
        variant="contained"
        color="white"
        sx={{ mt: 3, mb: 2 }}
        >
        Crear campaña
        </Button>
        </Link>
        <Link component={RouterLink} to="/about" underline="none" color="inherit">
        <Button
        type="button"
        variant="outlined"
        color="white"
        sx={{ mt: 3, mb: 2 }}
        >
          
        Cómo funciona
        </Button>
        </Link>


</Box>
</Box>
            <Box
                component="img"
                src="./imgs/banner2.png"
                alt="suitcase"
                sx={{ 
                        marginRight: 0,
                    }}
              />

</Box>

</ThemeProvider>

  )
}







