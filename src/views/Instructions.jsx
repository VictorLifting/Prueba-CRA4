import {Box} from "@mui/material"
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 10,
          m: 1,
          textAlign: 'center',
          borderRadius: 2,
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  }


export const Instructions = () => {
  return (
<div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Item>
        <img src="./imgs/instructions/1.png" alt="instruction" srcset="" /> 
        <h2>Descarga Valora </h2>    
        <p> Ingresa a la AppStore o la PlayStore y descarga  la aplicación de Valora. </p> 
        <img src="./imgs/instructions/step1.png" alt="instruction" srcset="" />
        </Item>
        <Item>
        <img src="./imgs/instructions/1.png" alt="instruction" srcset="" />
        <h2>Agrega fondos a valora</h2> 

        <p> Haz click en el menú y selecciona “agregar y retirar”.
        Luego haz click en “agregar fondos” y escoge Celo Dollar.
        Por último escoge el monto y paga con tu método de pago preferido. </p> 

        <img src="./imgs/instructions/step2.png" alt="instruction" srcset="" />

        </Item>
        <Item>
        <img src="./imgs/instructions/3.png" alt="instruction" srcset="" />
        <h2> Escanea el QR </h2>
        <p>Presiona el icono      en Valora y escanea el QR que te proporciona dreamUp.
        Escoge la cantidad de cUSD que quieres donar y presiona enviar. </p> 
        <img src="./imgs/instructions/step3.png" alt="instruction" srcset="" />
        </Item>
      </Box>
    </div>
  )
}
