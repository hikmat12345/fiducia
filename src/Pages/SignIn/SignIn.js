import React from 'react';
// material lib 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';

// src 
import { getFileSrcFromPublicFolder } from '../../utils';
import "./SignIn.scss"
import FCITextInput from '../../Components/FCITextInput/FCITextInput';
import FCButton from '../../Components/FCButton/FCButton';
import { useNavigate } from 'react-router-dom';
import history from '../../history';
const theme = createTheme();

function SignIn() {
   
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
       
      };

  return (
    <>
        <ThemeProvider className="bg-bgwhite" theme={theme}>
        
          <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#F8F9FF' }}>
            <Grid item sx ={{position: 'absolute', zIndex: '1000',mt: 7, ml: 5}}>
            <img  src={getFileSrcFromPublicFolder("sidebarLogo.svg")} alt="logo"/>
            </Grid>

            <CssBaseline />
            
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${getFileSrcFromPublicFolder("woman-running.png")})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#F8F9FF',
                position: 'relative',
              }}
            />
            
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className='bg-bgwhite px-8 fdc-right-side'>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              > 
              
                <Typography component="h1" variant="h5" className=' fdc-login-title'>
                <h1><span>Log</span>in</h1>
                </Typography>
                
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }} className="fc-form-area   w-11/12	">
                  <Button  className='bg-white  fc-withgoogle-account'>
                    <GoogleIcon /><span>with Google Account</span>
                  </Button>
                  <Divider sx = {{
                        mt: 3,
                        mb: 1,
                        color: '#7F8FA4',}}>
                         or
                   </Divider>
                   <FCITextInput  className="p-2" labelText="Email"/>
                   <FCITextInput  className="p-2" labelText="Password"/>
                   <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                  <FCButton primary={true}  onClick={()=> history.push({pathname:"/"})}>
                    Sign In
                  </FCButton>
                  <Grid item xs={12} sm container>
                    <Grid item xs container spacing={2}>
                      <Grid item xs sx ={{mt:1}}>
                        <Link className='fc-form-signup' href="/home" variant="body2">
                            {"Don't have an account?"} 
                            <span> Sign Up</span>
                        </Link>  
                      </Grid>
                    </Grid>
                    <Grid item component="div">
                        <img src={getFileSrcFromPublicFolder("Slogo.svg")} alt="logo"/>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
    </>
  )
}

export default SignIn
