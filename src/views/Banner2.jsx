import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink} from "react-router-dom";
import Typography from '../components/Typography';

export const Banner2 = () => {
  return (

    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        mt: 3,
        alignItems: 'center',
        backgroundColor:"#C58ADE",
       paddingLeft:5,
    }}>

    <Box> 
    <Typography variant="h3" color="#ffffff" sx={{ mb: 2 }} >¿Tienes en mente una campaña? </Typography>
    <Typography variant="h5" color="#ffffff">Hazla realidad con nosotros! </Typography>
    
    <p></p>
    <Box sx={{
    
    }
    }>

        <Link component={RouterLink} to="/create" underline="none" color="inherit" marginRight={5}>

        <Button 
        type="button"
        variant="contained"
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
        >
        Crear campaña
        </Button>
        </Link>
        <Button
        type="button"
        variant="outlined"
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
        >
          
        Cómo funciona
        </Button>


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



  )
}







