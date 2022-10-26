import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import ItemQuantitySelector from './ItemQuantitySelector';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

function ItemDetail (props) {
	const {addToCart, removeItem,isInCart,getProductQuantity} = useContext(cartContext);
	const [count, setCount] = useState(0);
	const [realStock]= useState(
		isInCart(props.id) ? props.stock - getProductQuantity(props.id) : props.stock
	);
	
	function handleOnAdd (stock) {
		setCount(stock);
		addToCart(props, stock);  
	}

	function handleRemove () {
		removeItem(props.id);
		setCount(0);
	}

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
								maxHeight: '250px',
								maxWidth: '350px',
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
							count === 0 && realStock > 0 &&
							<ItemQuantitySelector
								text={"Agregar al Carrito"}
								initialValue={1}
								stock={realStock}
								onAdd={handleOnAdd}
							/> 
						}
						{
							count > 0 &&
							<Box style={{marginTop:"15px"}}>
								<Link to="/cart" style={{textDecoration:"none",marginRight: "10px"}}>
									<Button variant='contained'>
										Terminar mi compra
									</Button>
								</Link>
								<Button onClick={handleRemove} variant="outlined">Remover del carrito</Button>
							</Box>
						}
						
					</Paper>
				</Grid>
			</Grid>
			
		</Box>
	);
}

export default ItemDetail;
