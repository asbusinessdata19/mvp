import React from 'react';
import store from '../../store/store';
import { setAuthenticated } from '../../store/slicers/UserSessionSlicer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Divider } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
export default function Landing() {

    return (
        <Grid container direction='column' sx={{ height: '100%' }}>
            <Grid item className='landing-top-container' sx={{ padding: 2 }}>
                <Grid container sx={{ flexGrow: 1, height: '100%' }} justifyContent='flex-start'>
                    <Grid item sx={{ flexGrow: 1, height: '100%' }} >
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            columnSpacing={4}
                            sx={{ height: '100%' }}
                        >
                            <Grid item className='power-page'>Power Page</Grid>
                            <Grid item><Button> Home </Button></Grid>
                            <Grid item><Button> Learn </Button></Grid>
                            <Grid item><Button> Pricing </Button></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }} >
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            columnSpacing={4}
                            sx={{ height: '100%' }}
                        >
                            <Grid item><Button variant='contained' color='warning'> Create Account </Button></Grid>
                            <Grid item><Button variant='outlined' > Login </Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid item className='landing-left-container' sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ height: '100%' }}
                        >
                            <Grid item> <Typography sx={{ color: '#FFFFFF', fontSize: '56px' }}>New Way to ....</Typography></Grid>
                            <Grid item> <Typography sx={{ color: '#FFFFFF', fontSize: '18px', maxWidth: '400px' }}>
                            /* [Some copy comes here] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at pretium erat, nec tristique ex. Aenean sit amet turpis metus. */
                            </Typography></Grid>
                            <Grid item><img style={{ height: 200, width: 400 }} src={require('../../images/screenshot.png')} /> </Grid>
                            <Grid item><Button variant='contained' color='warning'> Contact Us </Button></Grid>
                        </Grid>
                    </Grid>
                    <Grid item className='landing-right-container'>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                            sx={{ height: '100%' }}
                        >
                            <Grid item> <Typography sx={{ color: '#102F47', fontSize: '32px' }}>Create an account</Typography></Grid>
                            <Grid item> <TextField sx={{ width: 300 }} id="email-field" label="Email" variant="outlined" /></Grid>
                            <Grid item> <TextField sx={{ width: 300 }} id="password-field" label="Password" variant="outlined" /></Grid>
                            <Divider sx={{margin:2}}> Or </Divider>
                            <Button variant="outlined" sx={{ width: 250,margin:'5px' }} startIcon={<AppleIcon />}>
                                Continue With Apple
                            </Button>
                            <Button variant="outlined" color='warning' sx={{ width: 250,margin:'5px' }} startIcon={<GoogleIcon />}>
                                Continue With Google
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}