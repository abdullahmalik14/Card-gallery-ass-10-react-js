import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { Product_data } from './Utils/Data'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export const Product_details = () => {
  const params = useParams()

  const filtered_data = Product_data.filter((currentdata)=> {
   return currentdata.id == params.id
  })

  const { id, title, price, description, image, rating: { rate, count } } = filtered_data[0];

  return (
    <Grid sx={{display: 'flex',justifyContent: 'center', alignItems: 'center',}} container item xs={12} sm={12} md={12} lg={12} key={id}>
          <Card sx={{
                maxWidth: 300,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
            <CardMedia sx={{ height: 140,objectFit:"contain"}} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {title}
              </Typography>
              <Typography variant="p">Price: {price}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"10px",marginTop:"10px",marginBottom:"10px"}}>
                {description}
              </Typography>
              <Typography variant="p" >
                Rating:{rate} (count:{count})
                
              </Typography >
              
              <Link to="/"  sx={{ position: 'absolute', bottom: '0', left: '0' }}>             
                    <button style={{ background: 'black', color: 'white', padding: '10px 16px',marginTop:"10px", border: 'none',cursor:"pointer" }}>Back To Products</button>             
              </Link>
              
            </CardContent>
           
          </Card>
        </Grid>
  )
}