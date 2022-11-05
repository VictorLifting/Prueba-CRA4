import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToCoinbase = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Descarga Coinbase",
            description:'Ingresa a la AppStore o a la PlayStore y descarga  la aplicación de Coinbase. ',
            img: './imgs/instructions/HowToCoinbase/1.png',
        },
        {
            title: "Paso 2. Entra a “agregar y retirar”",
            description:'Abre Coinbase y haz click en empezar. Luego llena el formulario con tus datos y haz click en crear cuenta. Recuerda aceptar los términos y condiciones para continuar.”.',
            img: './imgs/instructions/HowToCoinbase/2.png',
        },
        {
            title: "Paso 3. Selecciona celo dollar.",
            description:'Activa las notificaciones o de lo contrario omite este paso. Luego, verífica tu cuenta de correo electrónico.',
            img: './imgs/instructions/HowToCoinbase/3.png',
        },
        {
            title: "Paso 4. Ingresa el monto que quieres recargar",
            description:'Una vez veríficado tu correo electrónico, haz click en iniciar para empezar la verificación de dos pasos. Luego haz click en continuar.',
            img: './imgs/instructions/HowToValora/4.png',
        },
        {
            title: "Paso 5. Escoge la moneda",
            description:'Ingresa tu número celular y espera a que te llegue el código de verificación. Luego, ingresa este y haz click en continuar.',
            img: './imgs/instructions/HowToCoinbase/5.png',
        },
        {
            title: "Paso 6. Verífica tu identidad.",
            description:'Haz click en finalizar la configuración de tu cuenta. Luego haz click en continuar.',
            img: './imgs/instructions/HowToCoinbase/6.png',
        },
        {
            title: "Paso 7. Llena los formularios.",
            description:'Llena el formulario de tu información personal y haz click en continuar. Luego añade tu dirección y haz click en continuar. Después escoge las opciones que más se ajusten a tí.',
            img: './imgs/instructions/HowToCoinbase/7.png',
        },
        {
            title: "Paso 8. Verífica tu documento de identidad.",
            description:'Por último, haz click en continuar para veríficar tu documento de identidad. Escoge el documento que prefieras y toma las respectivas fotografías. Recuerda estar en un espacio con buena luz.',
            img: './imgs/instructions/HowToCoinbase/8.png',
        },
	];


  return (

    <Box sx={{marginBottom:15}}>

        <Box sx={{p:5}}>
        <Typography>¿Cómo crear una cuenta de Coinbase?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
