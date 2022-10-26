import { Delete } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function Brief (){
	const {
		cart,
		clear,
		removeItem,
		getTotalPrice,
		getTotalProductPrice,
	}= useContext(cartContext);
	return (

		<Box>
			{
				cart.map(
					(productMap)=>{
						return(
							<Box
								style={{
									background: "#fff",
									marginTop: "-1px",
									border: "1px solid rgba(29, 50, 153, 0.1)",
								}}
								key={productMap.id}
							>
								<Grid
									container
									direction="row"
									justifyContent="center"
									alignItems="center"
								>
									<Grid item xs={2}>
										<Box align="center" className="item-img">
											<img style={{
												padding: "15px",
												width: 'auto',
												maxHeight: '80px',
												maxWidth: '120px'
											}} src={productMap.img} alt={productMap.img}/>
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Typography>
											<Link style={{textDecoration: "none", color: "#000",}} to={"/item/"+productMap.id}>
												{productMap.title}
											</Link>
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<Typography>{productMap.quantity} unidad/es</Typography>
									</Grid>
									<Grid item xs={2}>
										<Typography>
											Total: ${getTotalProductPrice(productMap)}
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<Button
											variant="outlined"
											startIcon={<Delete/>}
											onClick={()=>removeItem(productMap.id)}>
											<strong>Remover</strong>
										</Button>
									</Grid>
								</Grid>
							</Box>
						);
					}
				)
			}
			<Box
				style={{
					background: "#fff",
					marginTop: "-1px",
					border: "1px solid rgba(29, 50, 153, 0.1)",
				}}
			>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					style={{
						minHeight: "70px"
					}}
				>
					<Grid item xs={2}>
					</Grid>
					<Grid item xs={4}>
					</Grid>
					<Grid item xs={2}>
					</Grid>
					<Grid item xs={2}>
						<Typography>
							Total compra: ${getTotalPrice()}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Button
							variant="outlined"
							startIcon={<Delete/>}
							onClick={()=>clear()}>
							<strong>Vaciar carrito</strong>
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Brief;
