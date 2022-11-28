import { Box } from "@mui/system";
import { SliderModal } from "./SliderModal";


//import theme from "../styles";
//import qrc from "../imgs/Qr/image-qr-code.png";

export const  DonateModal = ({ onFin }) => {

    const mockImagenes = [

        {
            title: "Espera!",
            description:'Recuerda seguir estos pasos antes de donar.',
            img: './imgs/modals/donate/1.png',
        },
        {
            title: "Primero",
            description:'Elige la campaña a la que quieres donar.',
            img: './imgs/modals/donate/2.png',
        },
        {
            title: "Segundo",
            description:'Descarga la aplicación Valora en tu celular y crea una cuenta con tus datos.',
            img: './imgs/modals/donate/3.png',
        },
        {
            title: "Tercero",
            description:'Recarga tu billetera (Valora) comprando celo dólar. Esto es importante ya que nuestra plataforma sólo acepta donaciones en esta moneda.',
            img: './imgs/modals/donate/4.png',
        },
        {
            title: "Cuarto",
            description:'Conecta tu billetera (Valora) a dreamUp y dona el monto que desees.',
            img: './imgs/modals/donate/5.png',
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
          p: "3.2rem",
          textAlign: "center",
          boxShadow: "rgb(162, 179, 198) 0px 24px 42px -12px;",
        }}
      >
        <Box sx={{marginBottom:10}}>

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

