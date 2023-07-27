import React from 'react'
import {Box, styled, Container, Grid, Typography} from '@mui/material'

import htmlImg from '../../assets/icons/html.png'
import cssImg from '../../assets/icons/css.png'
import javascriptImg from '../../assets/icons/javascript.png'
import reactImg from '../../assets/icons/react.png'
import bootstrapImg from '../../assets/icons/bootstrap.svg'
import nodeImg from '../../assets/icons/nodejs.png'
import redux from '../../assets/icons/redux.png'
import javaImg from '../../assets/icons/javaImg.png'
import spring from '../../assets/icons/spring.png'
import gitIcon from '../../assets/icons/git.png'
import postgresql from '../../assets/icons/postgresql.png'
import materialUi from '../../assets/icons/materialui.png'
import { Fade, Slide} from 'react-awesome-reveal'

function Skills() {

    const StyledGrid = styled(Grid)({
        
    })
  return (
    <Box id='skills' sx={{backgroundColor: 'rgb(13, 13, 27)', py: 10}}>
        <Container>
            <Typography variant='h3' color='coral'>
                Skills
            </Typography>

            <Slide direction='right'  duration={800} triggerOnce>
            <StyledGrid container spacing={4} align='center' marginTop={2}>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={javaImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Java
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2} >
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={javascriptImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        JavaScript
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={nodeImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        NodeJs
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={htmlImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        HTML5
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={cssImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        CSS
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={spring} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Spring Boot
                    </Typography>
                </Grid>
                

            </StyledGrid>
            </Slide>

            <Slide duration={800} triggerOnce>
                <StyledGrid container spacing={4} align='center' marginTop={1}>
                

                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={postgresql} alt="" />
                    </Box>
                    <Typography  color='white' >
                        PostgreSql
                    </Typography>
                </Grid>
                
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={reactImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        React
                    </Typography>
                </Grid>
                
                
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={redux} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Redux
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={bootstrapImg} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Bootstrap
                    </Typography>
                </Grid>
                
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={materialUi} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Material UI
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                    <Box sx={{padding: {xs: 3, md: 4}}}>
                      <img src={gitIcon} alt="" />
                    </Box>
                    <Typography  color='white' >
                        Git
                    </Typography>
                </Grid>
                

            </StyledGrid>
            </Slide>

        </Container>
    </Box>
  )
}

export default Skills