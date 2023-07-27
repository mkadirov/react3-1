import React from 'react'
import {Box, AppBar, Toolbar, Typography, Button, Container, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import BarMenu from '../../components/Buttons/BarMenu';
import { Fade, Slide } from 'react-awesome-reveal';

const StyledBtn = styled(Button)({
    color: 'white',
    '&:hover': {
        color: 'coral'
    }

})
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  sx={{backgroundColor: 'black', boxShadow: 'none'}}>
        
        <Toolbar>
          <Container>
            <Box display='flex' justifyContent='space-between' sx={{borderBottom: '2px solid coral', py: 2}}>

                <Fade duration={4000}>
                <Typography variant="h5" color='white' component="div" sx={{ flexGrow: 1 }}>
                   M.Kodirjonov
                </Typography>
                </Fade>

                <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
                  <Slide direction='down'>
                  <StyledBtn href='#homeSection' sx={{marginRight: 2}}>Home</StyledBtn>
                  </Slide>

                  <Slide direction='down' duration={1400}>
                  <StyledBtn href='#skills' sx={{marginRight: 2}}>Skills</StyledBtn>
                  </Slide>

                  <Slide direction='down' duration={1800}>
                  <StyledBtn href='#projects' sx={{marginRight: 2}}>Projects</StyledBtn>
                  </Slide>

                  <Slide direction='down' duration={2000}>
                  <StyledBtn href='#contactMe' sx={{color: 'white'}}>Contact me</StyledBtn>
                  </Slide>  
                </Box>
                
                <Fade duration={4000}>
                <Box sx={{display: {sm: 'flex', md: 'none'}}}>
                  <BarMenu/>
                </Box>
                </Fade>
            </Box>    
          </Container>
        </Toolbar>
        
      </AppBar>
    </Box>
  )
}

export default Header