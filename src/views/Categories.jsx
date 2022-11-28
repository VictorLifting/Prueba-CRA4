import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import { fontWeight } from '@mui/system';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  borderRadius:18,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
 
const images = [
  {
    url: "./imgs/categories/educacion.png",
    title: 'Educación',
    width: '30%',
    to: "Campains",
  },
  {
    url: "./imgs/categories/salud.png",
    title: 'Salud',
    width: '30%',
    to: "Campains",
  },
  {
    url: "./imgs/categories/animales.png",
    title: 'Animales',
    width: '30%',
    to: "Campains",
  },
  {
    url: "./imgs/categories/familiar.png",
    title: 'Familiar',
    width: '30%',
    to: "Campains",
  },
  {
    url: "./imgs/categories/medioA.png",
    title: 'Medio ambiente',
    width: '30%',
    to: "Campains",
  },
  {
    url: "./imgs/categories/social.png"  ,
    title: 'Social',
    width: '30%',
    to: "Campains",
  },
];

export default function Categories() {
  return (
    <Container component="section" sx={{ mt: 5, mb: 4 }}>
      
    <Typography variant={"h5"} sx={{fontFamily:"Poppins", fontWeight:"600", color:"#C58ADE"}}> 
      Categorias
    </Typography>

      <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              marginLeft:15,
              marginBottom:15,
              
            }}
          >
            <Link component={RouterLink} to={`/${image.to}`} underline="none" color="inherit">
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
                borderRadius:5,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
                
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
            </Link>
          </ImageIconButton>
          
        ))}
      </Box>
    </Container>
  );
}