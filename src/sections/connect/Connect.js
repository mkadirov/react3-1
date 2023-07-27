import React from 'react'
import {Box, styled, Container, Grid, Typography, TextField, Card, Button} from '@mui/material'
import { Fade } from 'react-awesome-reveal'

function Connect() {

    const Btn = styled(Button)({
        color: 'white',
        backgroundColor: 'coral',
        '&:hover': {
            backgroundColor: 'coral',
            color: 'white'
        }
    })

    const lebelStyle = {
        color: 'white',
    }

    const textStyle = {
        color: 'white',
    }
  return (
    <Box sx={{backgroundColor: 'rgb(13, 13, 27)', paddingY: 10}} id= 'contactMe'>
        <Container>
            <Grid container justifyContent='center'>
                <Grid item xs={12} md={8} lg={6}>
                     <Typography variant='h4' sx={{textAlign: 'center', my: 3, color: 'coral'}} >
                        Contact me
                     </Typography>
                       <Fade duration={2500} triggerOnce>
                       <Card sx={{padding: 4, backgroundColor: 'inherit', border: '1px solid coral'}}>
                        <TextField 
                        type='text'
                        size='small' 
                        id="outlined-basic" 
                        label="Name" 
                        variant="standard" 
                        InputLabelProps={{style : lebelStyle}}
                        InputProps={{style: textStyle}}
                        sx={{borderBottom: '1px solid grey'}}
                        fullWidth/>

                        <TextField 
                        type='email'
                        size='small' 
                        id="outlined-basic" 
                        label="Email" 
                        variant="standard" 
                        sx={{marginY: 3, borderBottom: '1px solid grey'}} 
                        InputLabelProps={{style : lebelStyle}}
                        InputProps={{style: textStyle}}
                        fullWidth/>

                        <TextField  
                          id="outlined-basic"  
                          label="Your message" 
                          variant="outlined" 
                          fullWidth
                          multiline
                          rows={6}
                          InputLabelProps={{style : lebelStyle}}
                          InputProps={{style: textStyle}}
                          sx={{border: '1px solid grey', borderRadius: 1}}
                          />

                        <Box display='flex' justifyContent='end'>
                        <Btn sx={{marginTop: 2, }} variant='contained'>
                            Send
                        </Btn>
                        </Box>
                    </Card>
                       </Fade>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Connect