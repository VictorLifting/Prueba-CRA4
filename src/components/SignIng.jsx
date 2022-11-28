import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink} from "react-router-dom";
//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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

export default function SignIn(props) {

  const [errorFirebase, seterrorFirebase] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    iniciarSesion(data.get('email'),data.get('password'));
  };


  const auth = getAuth();


  const iniciarSesion = (correo, password) => {

      signInWithEmailAndPassword(auth, correo, password).then((usuarioFirebase) => {

        
        const user = usuarioFirebase.user;
        console.log (user)
        props.setUsuario(usuarioFirebase)
        
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
  
      // ..
      console.log(errorCode)
      console.log(errorMessage)
      seterrorFirebase(errorMessage)
    });

  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 4,
            padding:8,
            borderRadius: 4,
          }}
        >

          <Typography component="h1" variant="h5" sx={{fontFamily:"Poppins", color:"#C58ADE", fontWeight:"600", mb:2}}>
           Iniciar sesión
          </Typography>

          <Typography  sx={{fontFamily:"Poppins",  fontWeight:"400",  mb:2}}>
            para poder continuar.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {errorFirebase ? <Typography sx={{fontFamily:"Poppins",color:"#ff0000" , fontSize:13, mb:1}}>{errorFirebase}</Typography> :" "}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{fontFamily:"Poppins"}}>
                  ¿Recordar contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/Register" variant="body2" sx={{fontFamily:"Poppins"}}>
                  {"¿Aún no tienes una cuenta?, Regístrate "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}