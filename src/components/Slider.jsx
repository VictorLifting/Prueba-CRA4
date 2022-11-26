import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'


export const Slider = ({ imagenes }) => {


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


    // Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};


  return (
    
    <Box>
<ThemeProvider theme={theme}>
        {imagenes.map((imagen, index) => {

            return (
                  

                <Box >

                    {imagenActual === index && (
                        <Box 
                        sx={{display: 'flex', justifyContent:"space-between", px:5, }}>
                        <Box 
                        sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', marginRight:2, width:"40%"}}>

                        <Typography variant="h4" sx={{mb:3, fontFamily:"Poppins", fontWeight:"600"}}>{imagen.title}</Typography>
                        <Typography sx={{mb:3, fontFamily:"Poppins"}}>{imagen.description}</Typography>

                        <Box>
                       
                        <Button 
                        color="white"
                        variant="contained"
                        onClick={anteriorImagen}>
                        Atras
                        </Button>
                        <Button
                        color="primary"
                        variant="contained"
                        onClick={siguienteImagen}
                        sx={{ml:5}}>
                        Siguiente
                        </Button>

                        </Box>

                        </Box>

                        <img key={index} src={imagen.img} alt="imagen" />

                        </Box>
                    )}

                </Box>
                            
               
                    
                
            );
        })}
       </ThemeProvider>
       </Box>
    
);

}
