import React from 'react'
import {Box, styled, Container, Grid, Typography} from '@mui/material'
import Card1 from '../../components/Cards/Card1'
import { cardList } from '../../data/cards'
import {Animated} from 'react-animated-css'

function Projects() {

    const list = cardList;
  return (
    <Box sx={{paddingY: 10, backgroundColor: 'black'}} id= 'projects'>
        <Container>
            <Typography variant='h3' color='coral'>
                Projects
            </Typography>
            <Grid container spacing={4} marginTop={6}>
                {
                    list.map((item, index) => {
                        return(
                            <Grid item xs= {12} md= {6} lg={4} key={index + item.title} >
                               
                               <Card1 item={item}/>
                               
                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </Container>
    </Box>
  )
}

export default Projects