import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToDonate = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Haz click en donar",
            description:'Haz click en el bóton “donar”. Puedes encontrar este en el banner o en el menú de navegación.',
            img: './imgs/instructions/HowToDonate/1.png',
        },
        {
            title: "Paso 2. Escoge una categoría",
            description:'Haz click en la categoría de tu preferencia para realizar tu donación. Ej: Salud',
            img: './imgs/instructions/HowToDonate/2.png',
        },
        {
            title: "Paso 3. Escoge la campaña.",
            description:'Haz click en la campaña que te haya llamado la atención.',
            img: './imgs/instructions/HowToDonate/3.png',
        },
        {
            title: "Paso 4. Haz click en “quiero donar”.",
            description:'Una vez te hayas informado y hayas leído todo lo relacionado a la campaña de tu intéres, haz click en “quiero donar”.',
            img: './imgs/instructions/HowToDonate/4.png',
        },
        {
            title: "Paso 5. Conecta tu billetera",
            description:'Si ya posees una billetera haz click en “conectar”, de lo contrario ve a nuestros tutoriales para aprender a descargar tu billetera.',
            img: './imgs/instructions/HowToDonate/5.png',
        },
        {
            title: "Paso 6. Escánea el código QR.",
            description:'Selecciona la opción de Valora y luego escanea el código QR con tu celular desde la app de Valora.',
            img: './imgs/instructions/HowToDonate/6.png',
        },
        {
            title: "Paso 7. Ingresa el monto y dona.",
            description:'Una vez conectada tu billetera, ingresa cuánto quieres donar en celo dolares y haz click en “donar”.',
            img: './imgs/instructions/HowToDonate/7.png',
        },
	];


  return (

    <Box sx={{marginBottom:20}}>

        <Box sx={{px:5, pt:10}}>
        <Typography variant="h5" color="#C58ADE" sx={{fontFamily:"Poppins", fontWeight:"600"}} >¿Cómo donar a una campaña?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
