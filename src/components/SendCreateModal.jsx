import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';

//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  SendCreateModal = ({ onFin }) => {
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
          p: "4rem",
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box component="h2" sx={{color:"#C58ADE", mb:2}}>Ya casí terminas!
          {/* {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"} */}
        </Box>

        <Box
          component="img"
          width="250px"
        //   borderRadius={onFin === qrc ? "1rem" : 0}
          src={"../imgs/Qr/gracias.png"}
          alt="qrCode-result"
        ></Box>

        <Box component="p" sx={{ color: "text.pColor" }}>
        En este momento tu campaña ha sido enviada al equipo de
         dreamUp para ser revisada. Recuerda que puedes ver el estado de tu campaña en tu perfil haciendo click en “mis campañas”.
         Este proceso no demorará más de 24 horas.
          {/* {onFin === qrc
            ? "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
            : "Scan the QR Code to use what you entered!"} */}
        </Box>
        <Button
                            color= "primary"
                            variant="contained"
                            sx={{ minWidth: 200, mt:3 }}>
                              Ver campaña
        </Button>
    
      </Box>


      </>
  );
};

