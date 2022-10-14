import {Box, TextField, FormGroup, Button} from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "../components/Typography";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';



const categories = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


export const Create = () => {

    const [category, setCategories] = useState('EUR');
  
    const handleChange = (event) => {
      setCategories(event.target.value);
    };

  return (
    <div style={{ width: '100%' }}>


        <Box sx={{ 
          padding:10,
        }}>

        <Typography
        component="h3"
        variant="h6"
        color="inherit"
        className="imageTitle"
        >
        Crea una campaña
        <div className="imageMarked" />
        </Typography>

        <FormGroup>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField id="outlined-basic" label="Nombre de la campaña" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField
          id="outlined-multiline-static"
          label="Descripción"
          multiline
          rows={4}
          defaultValue="Descripción"
        />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}> 
        <TextField
          id="outlined-select-currency"
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
            id="outlined-adornment-amount"
            //value={values.amount}
           // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Meta"
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Meta</InputLabel>
          <OutlinedInput
            type="file"
            id="outlined-adornment-amount"
            //value={values.amount}
           // onChange={handleChange('amount')}

            label="Meta"
          />
        </FormControl>

        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Acepto términos y condiciones" />
        <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publicar
            </Button>
        </FormGroup>
        </Box>

        
    </div>
  )
}