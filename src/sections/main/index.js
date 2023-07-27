import React from 'react'
import {Box, styled, Container, Grid, Typography} from '@mui/material'
import avatarImg from '../../assets/image/avatar.png'
import img1 from '../../assets/image/img1.jpg'
import {Fade, Slide} from 'react-awesome-reveal'
import { Animated } from 'react-animated-css'
const WrapperBox = styled(Box)({
    position: 'relative',
    backgroundColor: 'black',
    height: '70vh',
   
})

const AvatarBox = styled(Box)({
   position: 'absolute',
   top: '-200px',
   overflow: 'hidden'
})
function Main() {
  return (
   <Box id='homeSection'>
     <WrapperBox sx={{height: { lg: '70vh', xl: '50vh'}}}>
        <Container >
          
          <Grid container paddingY={15} >
            <Grid item xs={12} sm= {4} md={6} >
                
            </Grid>
            <Grid item xs={12} sm={8} md={6} >
            <Box>
                    <Slide direction='right' triggerOnce>
                    <Typography variant='h2' component='h2' color='white' sx={{fontSize:{xs: '32px',sm: '40px', md: '56px'}}}>
                        Mukhammadrakhim
                    </Typography>
                    </Slide>
                    
                    <Slide direction='right' triggerOnce duration={1400}>
                    <Typography variant='h2' component='h2' color='white' sx={{fontSize:{xs: '32px',sm: '40px', md: '56px'}}}>
                        Kodirjonov
                    </Typography>
                    </Slide>

                    <Slide direction='right' triggerOnce duration={1800}>
                    <Typography variant='h2' component='h2' color='coral' fontWeight={600} sx={{fontSize:{xs: '32px', sm: '40px'}}}>
                        Fullstack Developer
                    </Typography>
                    </Slide>
                </Box>
            </Grid>
        </Grid>
          
        </Container>

    </WrapperBox>

    <Box className= 'section1' sx={{height: {xs:'120vh', xl: '80vh'}}}>
    <Slide duration={2000} triggerOnce>
    <AvatarBox borderRadius={4} sx={{ left: {xs: '20px',sm:'60px', md: '100px', lg: '150px', xl: '370px'}, 
                     height: '300px', width: '250px'}}>
        <img src={avatarImg} alt=""  />
    </AvatarBox>
    </Slide>

    <Container sx={{position: 'relative', height: '100%'}}>
    <Box className="focusContainer">
        
        <Slide direction='up' triggerOnce>
        <Grid container  spacing={4}>

            <Grid item xs={12} md={7}>
                <Box >
                   <Typography variant='h4' color='coral' >
                        E-Commerce Website
                   </Typography>
                   <Typography color='white' marginTop={4}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Esse quia ad recusandae explicabo dolores nihil numquam, 
                     expedita corporis omnis placeat deleniti laborum perferendis, 
                     beatae aspernatur dolorum veritatis nostrum cumque similique.
                   </Typography>


                </Box>
            </Grid>

            <Grid item xs={12} md={5}>
                <Box >
                   <img src={img1} alt="" />
                </Box>
            </Grid>
            </Grid>
        </Slide>
        
    </Box>
    </Container>
    </Box>
   </Box>
  )
}

export default Main