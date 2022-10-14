import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';

//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  QrModal = ({ onFin }) => {
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
          width: "18.125rem",
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box component="h2">Haz tu donación
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box component="p">Si ya tienes una wallet y posees celo dólar (cUSD) en ella escanea el QR o copia la dirección y envía tu donación.
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box
          component="img"
          width="250px"
        //   borderRadius={onFin === qrc ? "1rem" : 0}
          src={"../imgs/Qr/image-qr-code.png"}
          alt="qrCode-result"
        ></Box>

        <Box component="p" sx={{ color: "text.pColor" }}>Si aún no posees una wallet, te enseñamos como hacerlo.
          {/* {onFin === qrc
            ? "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
            : "Scan the QR Code to use what you entered!"} */}
        </Box>

        <Link component={RouterLink} to={`/instructions`} underline="none" color="inherit">
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          > 
          
            Ver paso a paso
            
      </Button>
      </Link>
      
      <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Hecho
      </Button>
      

      </Box>


      </>
  );
};

