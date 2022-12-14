import { Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';

//celo
import { useCelo } from '@celo/react-celo';

//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  ConnectWaModal = (props) => {

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

  const handleClick=()=>{

    connect()

    props.cerrar()

  }

  //use celo hook must always be inside the Celoprovider tree

  const { connect, address, destroy, performActions } = useCelo();


  const { getConnectedKit } = useCelo();



  return (


    <>
 <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.backWhite",
          borderRadius: "1rem",
          p: "4rem",
          zIndex:-10,
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box component="h2" sx={{color:"#C58ADE", mb:5}}>
          Conecta tu billetera
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box component="p" sx={{ mb:3}}>Si ya tienes una wallet y posees celo dólar (CUSD) en ella te invitamos a conectar tu billetera para realizar la donación.
                  De lo contrario te recomendamos descargar Valora. 
                  En nuestra sección de recursos podrás encontrar varios tutoriales que te pueden ser útiles.
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        <Link component={RouterLink} to={`/helpcenter`} underline="none" color="inherit" target={"_blank"} sx={{
          mr:2,
        }}>
        <Button
            type="submit"
            fullWidth
            color="white"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          > 
            Ver tutoriales
            
      </Button>
      </Link>
      
      <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleClick}
            sx={{ mt: 3, mb: 2 }}
          >
            Conectar
      </Button>
  
      </Box>
      </Box>
      </ThemeProvider>

      </>
  );
};

