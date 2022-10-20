import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';

//celo
import { useCelo } from '@celo/react-celo';

//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  ConnectWaModal = ({ onFin }) => {

  //use celo hook must always be inside the Celoprovider tree

  const { connect, address, destroy, performActions } = useCelo();


  const { getConnectedKit } = useCelo();



  return (
    <>

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.backWhite",
          borderRadius: "1rem",
          p: "5rem",
          zIndex:-10,
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box component="h2">Conecta tu billetera
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box component="p">Si ya tienes una wallet y posees celo dólar (CUSD) en ella te invitamos a conectar tu billetera para realizar la donación.
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
        <Link component={RouterLink} to={`/instructions`} underline="none" color="inherit" sx={{
          mr:2,
        }}>
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          > 
          
            Ver tutoriales
            
      </Button>
      </Link>
      
      <Button
            type="submit"
            
            variant="contained"
            onClick={()=> address ? destroy () : connect()}
            sx={{ mt: 3, mb: 2 }}
          >
            Conectar
      </Button>
  
      </Box>
      </Box>


      </>
  );
};

