import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

export const CardCampain = () => {
  return (

    <Box sx={{ 
        mt: 8,
        height:350,
        width: 280,
        borderRadius:4,
        boxShadow:2,
        marginLeft:4,
        }}>

    <Box sx={{ 
        height:"50%",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundImage: `url(./imgs/categories/animales.png)`,
        borderRadius:4,
        }}>
    </Box>

    <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                Salva a Roco
                <div className="imageMarked" />
              </Typography>

              <Typography
                component="h6"
                variant="inherit"
                color="inherit"
                className="imageTitle"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <div className="imageMarked" />
              </Typography>

              <ButtonBase>Ver mas {'>'} </ButtonBase>



               

    </Box>
  )
}
