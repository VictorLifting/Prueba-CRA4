import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

export const CardCampain = (props) => {
  return (

    <Box sx={{ 
        mt: 8,
        height:430,
        width: 320,
        borderRadius:4,
        boxShadow:2,
        marginLeft:3,
        
        }}>

    <Box sx={{ 
        height:"50%",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundImage: `url(${props.data.img})`,
        borderRadius:"6% 6% 0% 0%",
        }}>
    </Box>

    <Box sx={{ 
       padding:2
        
        }}>

              <Typography
                component="h4"
                variant=" "
                color="inherit"
                className="imageTitle" 
          
              >
                {props.data.Name}
                <div className="imageMarked" />
              </Typography>

              <Typography
               
                variant="caption"
                color="inherit"
                className="imageTitle"
              >
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting */}
                <div className="imageMarked" />
              </Typography>

              <Box sx={{
                backgroundColor:"#F2F2F2",
                height:15,
                position:'relative',
                mt:2,
                mb:1
              }}>
                <Box sx={{
                backgroundColor:"#C58ADE",
                height:15,
                width:(props.data.funds*100/props.data.Goal),
                position:'relative'
              }}>
          </Box>

         

        </Box>
        <Typography
                component="h5"
                variant="inherit"
                color="inherit"
                className="imageTitle"
               sx={{fontWeight:"600"}}>
                 Recaudado: ${props.data.funds}/{props.data.Goal} CUSD
                
              </Typography> 

              <ButtonBase sx={{color:"#C58ADE", fontWeight:"bold"}}>Ver mas {'>'} </ButtonBase>


              </Box>
               

    </Box>
  )
}
