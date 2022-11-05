import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import zIndex from '@mui/material/styles/zIndex';

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
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
}));

const images = [
  {
    url: "./imgs/helpCenter/faqs.png",
    title: 'FAQs',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/donar.png",
    title: '¿Cómo donar?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/crear.png",
    title: '¿Cómo crear una campaña?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/retirar.png",
    title: '¿Cómo retirar el dinero de una campaña?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/trackear.png",
    title: '¿Cómo trackear el dinero de una campaña?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/valora.png"  ,
    title: '¿Cómo crear una cuenta en Valora?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/valora.png"  ,
    title: '¿Cómo recargar Valora?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/valora.png"  ,
    title: '¿Cómo crear una campaña?',
    width: '30%',
  },
  {
    url: "./imgs/helpCenter/valora.png"  ,
    title: '¿Cómo crear una cuenta de Coinbase?',
    width: '30%',
  },
];

export default function HelpCenter() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              marginLeft:15,
              marginBottom:15,
              
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "#F7F1FC",
                borderRadius:5,
                zIndex:-1,
              }}
            />
            
            <Box  
            >
            <img src={image.url} alt="" />
            </Box>

              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
         
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}