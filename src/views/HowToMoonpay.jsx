import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToMoonpay = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Ingresa el monto a comprar.",
            description:'Ingresa el monto en pesos que quieres comprar de celo dólar (CUSD). Luego haz click en continuar.',
            img: './imgs/instructions/HowToMoonpay/1.png',
        },
        {
            title: "Paso 2. Válida tu correo",
            description:'Ingresa tu correo y haz click en continuar. Luego ingresa el código enviado a tu correo por el equipo de Moonpay y haz click en continuar.',
            img: './imgs/instructions/HowToMoonpay/2.png',
        },
        {
            title: "Paso 3. Introduce tus datos básicos.",
            description:'Completa el formulario con tus datos básicos y luego da click en continuar.',
            img: './imgs/instructions/HowToMoonpay/3.png',
        },
        {
            title: "Paso 4. Introduce una dirección.",
            description:'Ingresa una dirección de facturación. Luego completa el formulario y da click en continuar.',
            img: './imgs/instructions/HowToMoonpay/4.png',
        },
        {
            title: "Paso 5. Verífica tu identidad.",
            description:'Escoge un tipo de documento que permita veríficar tu identidad, luego toma una foto del documento por delante y por detrás.',
            img: './imgs/instructions/HowToMoonpay/5.png',
        },
        {
            title: "Paso 6. Tomate una selfie.",
            description:'Para terminar de veríficar tu identidad, tomate una selfie y haz click en continuar.',
            img: './imgs/instructions/HowToMoonpay/6.png',
        },
        {
            title: "Paso 7. Introduce los datos de tu tarjeta.",
            description:'Llena el formulario con los datos de tu tarjeta y haz click en continuar.',
            img: './imgs/instructions/HowToMoonpay/7.png',
        },

	];


  return (

    <Box sx={{marginBottom:15}}>

        <Box sx={{p:5}}>
        <Typography>¿Cómo comprar CUSD vía Moonpay?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
