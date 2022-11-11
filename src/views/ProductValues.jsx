import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { textAlign } from '@mui/system';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <>
     <Typography variant='h5' sx={{ my: 15, textAlign:'center' }}>
     ¿Por qué nosotros? 
      </Typography>

      <Container sx={{ mt: 5, mb: 15, display: 'flex', position: 'relative', alignItems:'center', textAlign:'center'}}>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="./imgs/volunteer_activism.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               Confianza
              </Typography>
              <Typography>
                {
                  'Nuestras campañas son revisadas y validadas por un excelente equipo, para así evitar estáfas.'
                }

              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="./imgs/lock.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Seguridad
              </Typography>
              <Typography>
                {
                  'Gracias a la tecnología blockchain las donaciones son mucho más seguras.'
                }

              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="./imgs/visibility.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Transparencia
              </Typography>
              <Typography >
                {'Al donar con criptomonedas aseguramos la transparencia entre donante y donado.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </>

  );
}

export default ProductValues;