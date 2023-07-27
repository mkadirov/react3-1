import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, Grid, Box} from '@mui/material';
import Typography from '@mui/material/Typography';


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




function Card1({item}) {

    const list = [htmlImg, cssImg, javascriptImg, reactImg, bootstrapImg, 
        nodeImg, redux, javaImg, spring, gitIcon, postgresql, materialUi]

  return (
    <Card sx={{ maxWidth: 400, backgroundColor: 'black', border: '1px solid grey' }}>
      <CardMedia
        sx={{ height: 220 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='white'>
          {item.title}
        </Typography>
        <Typography variant="body2" color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cupiditate modi voluptates autem debitis 
          
        </Typography>
        
        {/* <Grid container spacing={2} marginTop={1} >
            {
                item.icons.map((num, index) => {
                    return(
                        <Grid item xs={2} key={index + num}>
                          <Box sx={{width: '80%'}}>
                            <img src={list[num]} alt="" />
                          </Box>
                        </Grid>
                    )
                })
            }
           
        </Grid> */}

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href='https://react2-7.netlify.app' target='_blank'>Live Demo</Button>
      </CardActions>
    </Card>
  )
}

export default Card1