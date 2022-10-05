import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

 function ItemDetail (props) {
 
    return (
        <Box className="item">
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Paper sx={{
                        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%)",
                        padding: "30px"
                    }}>
                        <Box align="center" className="item-img">
                            <img style={{
                                width: 'auto',
                                maxHeight: '250px'
                            }} src={props.img} alt={props.img}/>
                        </Box>
                        <Box className="item-detail">
                            <Typography
                                style={{
                                    fontSize: "40px",
                                    fontWeight: "300",
                                    lineHeight: "1.3",
                                    color: "#666",
                                    marginTop: "30px",
                                    textAlign: "center",
                                }}
                                variant='h2'
                            >{props.title}</Typography>
                            <Typography variant='h4'
                                style={{
                                    color: "#333",
                                    fontSize: "32px",
                                    lineHeight: "1.2",
                                    marginTop: "20px",
                                    textAlign: "center",
                                }}
                            >U$S {props.price}</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{
                        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%)",
                        padding: "30px"
                    }}>
                        <Typography><strong style={{color:"#FF6A00"}}>Descripción: </strong>{props.description}</Typography>
                        <Typography><strong style={{color:"#FF6A00"}}>Stock: </strong>{props.stock >0 ? <strong style={{color:"#0021F5"}}>{props.stock}.</strong> : "Sin stock"}</Typography>
                        {
                            props.stock > 0 && <ItemCount
                                text={"Agregar al Carrito"}
                                initialValue={1}
                                stock={props.stock}
                                onAdd={() => {
                                    console.log("Agregado al carrito")
                                }}
                            /> 
                        }
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
}

export default ItemDetail;
