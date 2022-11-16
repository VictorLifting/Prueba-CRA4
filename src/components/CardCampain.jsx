import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

export const CardCampain = (props) => {
  return (

    <Box sx={{ 
        mt: 8,
        height:420,
        width: 280,
        borderRadius:4,
        boxShadow:2,
        marginLeft:9,
        
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
        borderRadius:4,
        }}>
    </Box>

    <Box sx={{ 
       padding:1
        
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
                mx:1,
                mb:1
              }}>
                <Box sx={{
                backgroundColor:"#C58ADE",
                height:15,
                width:"1%",
                position:'relative'
              }}>
          </Box>


         

        </Box>
        <Typography
                component="h5"
                variant="inherit"
                color="inherit"
                className="imageTitle"
              >
                 Recaudado: $0/{props.data.Goal}
                
              </Typography> 

              <ButtonBase>Ver mas {'>'} </ButtonBase>


              </Box>
               

    </Box>
  )
}
