import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardCampain } from '../components/CardCampain';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';



const campains = [
    {
      url: "./imgs/categories/educacion.png",
      title: 'Educación',
      width: '30%',
    },
    {
      url: "./imgs/categories/salud.png",
      title: 'Salud',
      width: '30%',
    },
    {
      url: "./imgs/categories/animales.png",
      title: 'Animales',
      width: '30%',
    },
    {
      url: "./imgs/categories/familiar.png",
      title: 'Familiar',
      width: '30%',
    },
    {
      url: "./imgs/categories/medioA.png",
      title: 'Medio ambiente',
      width: '30%',
    },
    {
      url: "./imgs/categories/social.png"  ,
      title: 'Social',
      width: '30%',
    },
  ];


export const Campains = () => {
  return (

    <Container component="section" sx={{ mt: 8, mb: 10}}>
    <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
    {campains.map((campain) => (

        
        
          <Link component={RouterLink} to={`/infoCampain`} underline="none" color="inherit">
            <CardCampain>
          </CardCampain>
          </Link>

    ))}
    
    </Box>
    </Container>
  )
}
