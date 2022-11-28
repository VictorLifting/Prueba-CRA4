
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Box } from '@mui/material';


export const Faqs = () => {
const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <Box sx={{p:10, backgroundColor:'#FAF6FD'}}>

        
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0 , fontFamily:"Poppins"}}>
        ¿Qué es dreamUp?
        </Typography>
       
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        DreamUp es una plataforma que permite la
        creación de campañas de recaudación de fondos.
        Nos diferenciamos de otras plataformas ya que utilizamos
        la tecnología Blockchain en nuestro proceso de donación,
        haciendo que el proceso sea mucho más seguro, transparente y confiable.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0, fontFamily:"Poppins" }}>¿Es dreamUp seguro?</Typography>

      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        Sí. DreamUp es una organización sin ánimo de lucro creada por estudiantes de la
        universidad Icesi con el fin de proveer una nueva forma de recaudar fondos mediante las criptomonedas.
        Gracias a estas, cada una de las donaciones es trazable, haciendo que el proceso sea mucho más seguro y transparente.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography variant='h6' sx={{ width: 'fit-content', flexShrink: 0, fontFamily:"Poppins" }}>
        ¿Qué tipo de campañas se pueden crear en dreamUp? 
        </Typography>

      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        En DreamUp puedes crear campañas de todo tipo siempre y cuando
        cumplas con lo estipulado en nuestros términos y condiciones.
        Para ver los términos y condiciones haz click en el enlace.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0, fontFamily:"Poppins" }}>¿Qué es una criptomoneda?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        Una criptomoneda es un activo digital que puedes usar como método de intercambio alrededor de todo el mundo,
        sin tener que recurrir a algún intermediario o entidad que tenga el control de ese dinero.
        Estas monedas son protegidas por códigos criptográficos (matemática avanzada) por lo que de ahí
        deriva su nombre. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5bh-content"
        id="panel5bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0,fontFamily:"Poppins" }}>¿Qué es blockchain?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        La blockchain es una base de datos pública cuya información no se puede eliminar ni modificar,
        es decir que sólo puedes agregar información. Esta funciona por bloques que tienen una cantidad
        limitada de información que pueden almacenar, por lo que al llenar un bloque,
        se crea automáticamente uno nuevo y así sucesivamente. Es por esto que surge su
        nombre “cadena de bloques” o e inglés Blockchain.
        </Typography>
      </AccordionDetails>
    </Accordion>   
    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel6bh-content"
        id="panel6bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0, fontFamily:"Poppins" }}>¿Qué es Celo y Celo dólar?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        Celo es la blockchain que aloja el algoritmo que usamos para la creación y donación de las campañas de dreamUp.
        Al utilizar esta blockchain, cada una de nuestras
        donaciones debe realizarse en Celo dólar (CUSD), una criptomoneda
        cuyo valor es equivalente al dólar estadounidense. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel7bh-content"
        id="panel7bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0,fontFamily:"Poppins" }}>¿Qué es una wallet?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{fontFamily:"Poppins"}}>
        Una billetera o “wallet” es un software que te permite conectarte con la blockchain en la cual tienes tus criptomonedas.
        Este software te permite además realizar transacciones con tus criptomonedas como por ejemplo recibir o enviar a otra persona.
        La wallet predeterminada para la blockchain de Celo es Valora,
        esta es la wallet que usarás para realizar las donaciones. En nuestra sección de tutoriales puedes aprender a usar Valora.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel8bh-content"
        id="panel8bh-header"
      >
        <Typography variant='h6' sx={{ width: '33%', flexShrink: 0, fontFamily:"Poppins" }}>¿Qué es Moonpay?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography  sx={{fontFamily:"Poppins"}}>
        Para adquirir la criptomoneda Celo dólar deberás comprarla a través de alguna plataforma de compra y venta de criptomonedas. 
        Como la wallet predeterminada de Celo es Valora,
        te recomendamos que compres tus Celo dólar a través de Moonpay. En nuestros tutoriales 
        puedes encontrar detalladamente el proceso.
        </Typography>
      </AccordionDetails>
    </Accordion>  
    </Box>   
  </div>
  )
}
