import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import { SliderModal } from "./SliderModal";
import Typography from "./Typography";

//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  CreateModal = ({ onFin }) => {

    const mockImagenes = [

        {
            title: "Recauda fondos en 3 simples pasos",
            description:'1. Completa el formulario para crear tu campaña con los datos solicitados como nombre de la campaña, descripción, etc.',
            img: './imgs/modals/create/1.png',
        },
        {
            title: "Recauda fondos en 3 simples pasos",
            description:'2. Espera a que tu campaña sea veríficada por el equipo de dreamUp. Este proceso no demorará más de 24 horas.',
            img: './imgs/modals/create/2.png',
        },
        {
            title: "Recauda fondos en 3 simples pasos",
            description:'3. Comparte tu campaña por redes sociales y empieza a recaudar tus fondos en celo dólar (CUSD).',
            img: './imgs/modals/create/3.png',
        },

       
	];


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
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box sx={{marginBottom:2}}>

            <Box sx={{p:0}}>

            </Box>

            <Box >
            <SliderModal imagenes={mockImagenes}/>

            </Box>


        </Box>

    
      </Box>


      </>
  );
};

