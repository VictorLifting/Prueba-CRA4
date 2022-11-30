import {Box, TextField, FormGroup, Button, Modal, createTheme, ThemeProvider} from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "../components/Typography";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { CreateModal } from "../components/CreateModal";

//firebase
import db from '../firebase/firebasConfig';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { EmptyCreate } from "../components/EmptyCreate";
import { SendCreateModal } from "../components/SendCreateModal";


const categories = [
    {
      value: 'Educación',
      label: 'Educación',
    },
    {
      value: 'Salud',
      label: 'Salud',
    },
    {
      value: 'Animales',
      label: 'Animales',
    },
    {
      value: 'Familiar',
      label: 'Familiar',
    },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "1rem",

  };

export const Create = (props) => {

  const theme = createTheme({
    palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#C58ADE',
      // dark: will be calculated from palette.primary.main,
       contrastText: "#fff"
    },
  }
  });

    const [category, setCategories] = useState(' ');

        //modal Donar  
      const [open, setOpen] = useState(true);

         //modal Donar 

      const [open2, setOpen2] = useState(false);

      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const handleOpen2 = () => setOpen2(true);
      const handleClose2 = () => setOpen2(false);

  
    const handleChange = (event) => {
      setCategories(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get('name'),
        description: data.get('description'),
        category: data.get('category'),
        goal: data.get('goal'),
        //userId: props.usuario.id
      });
      addCampain(data.get('name'),data.get('description'),data.get('category'),data.get('goal'),props.usuario.uid);
    };


    
const addCampain = async(name, description,category,goal,userId)=>{

  try {

    const docRef = await addDoc(collection(db, "Solicitudes"), {
      name: name,
      description: description,
      category: category,
      goal:goal,
      userId: userId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

  return (
    <ThemeProvider theme={theme}>
    <div style={{ width: '100%' }}>


        <Box sx={{ 
          padding:10,
        }}>


      {props.usuario ? (
            <Box>
        <Typography
        component="h3"
        variant="h6"
        color="#C58ADE"
        className="imageTitle"
        >
        Crea una campaña
        <div className="imageMarked" />
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display:'flex' }}>

        <FormGroup sx={{width:'100%', mr:2}}>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField name="name" label="Nombre de la campaña" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField
          name="description"
          label="Descripción"
          multiline
          rows={4}
         
        />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField
          name="category"
          select
          label="Categoria"
          value={category}
          onChange={handleChange}
          helperText="Escoge una categoria"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>

          ))}
        </TextField>
        
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Meta</InputLabel>
          <OutlinedInput
            type="number"
            name="goal"
            //value={values.amount}
           // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Meta"
          />
        </FormControl>
        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Acepto términos y condiciones" />
        <Button
              onClick={handleOpen2}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publicar
            </Button>

        </FormGroup>
        <FormControl fullWidth sx={{ m: 1}}>
          <InputLabel htmlFor="outlined-adornment-amount">Seleccionar foto</InputLabel>
          <OutlinedInput
            type="file"
            name="outlined-adornment-amount"
            //value={values.amount}
           // onChange={handleChange('amount')}
            sx={{ height:'50%', p:10}}
          />
        </FormControl>
    
        </Box>
            </Box>            
            
            ):(<EmptyCreate/>)}

        </Box>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <CreateModal/>
            </Box>  
            </Modal>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>

            <SendCreateModal/>
            </Box>  
            </Modal>


        
    </div>
    </ThemeProvider>
  )
}