import React from 'react'
import {Product_data } from './Utils/Data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useNavigate } from 'react-router-dom'



const Products = () => {

  const navigate = useNavigate()

  const navigate_handle = (id) =>{
   
      navigate(`products/${id}`)

  
    
  
  }
  return(
  
    <Grid container spacing={2} >
    {Product_data.map((currentdata, currentIndex) => {
      const { id, title, price, image } = currentdata;
      return (
        <Grid item xs={12} sm={4} md={3} lg={2} key={id}>
          <Card sx={{
                maxWidth: 200,
                display: 'flex',
                flexDirection: 'column',
                height: '80%',
                 boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)"
              }}>
            <CardMedia sx={{ height: 140,objectFit:"contain"}} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {title}
              </Typography>
              <Typography variant="p">Price: {price}</Typography>

            </CardContent>

            <CardActions sx={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',    
            marginTop: 'auto',
          }}>
              
              <Button onClick={()=>navigate_handle(id)}  size='small'
              sx={{ background: 'black', color: 'white', padding: '10px 16px',
              marginTop:"10px", border: 'none',cursor:"pointer" ,'&:hover':{background:"white",color:"black"}}}
              
              >Go To Details</Button>
           
            </CardActions>
          </Card>
        </Grid>
      );
    })}
  </Grid>
  )
}

export default Products