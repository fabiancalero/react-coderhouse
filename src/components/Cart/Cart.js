import React, { useContext, useState } from "react";
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { cartContext } from "../../context/cartContext";
import GoHome from "../GoHome/GoHome";
import Brief from "./Brief";
import CartForm from "./CartForm";
import { sendOrder } from "../../services/firebase";
import { appContext } from "../../context/appContext";

const boxStyle = {
	padding: "30px",
};

function Cart (){
	const {
		cart,
		getTotalPrice,
		clear,
	}= useContext(cartContext);
	const {
		handleMessage,
		handleLoading,
	} = useContext(appContext);
	const [idBuy, setIdBuy] = useState(null);
	
	function handleEndBuy(userForm) {
		const {
			name,
			surname,
			phone,
			email,
		} = userForm;

		const spreadCart = cart.map(({
			id,
			quantity,
			title,
		}) => ({
			id,
			quantity,
			title,
		}));

		const idParams ={
			buyerData: {
				name,
				surname,
				phone,
				email,
			},
			cart: spreadCart,
			total: getTotalPrice(),
			date: new Date(),
		};
		handleLoading(true);

		sendOrder(idParams).then((id) => {
			clear(false);
			setIdBuy(id.id);
			handleLoading(false);
		}).catch((error) => {
			handleMessage(error.message, "error");
			handleLoading(false);
		});

	}

	return (
		<Box style={boxStyle}>
			{
				cart.length === 0
					?
					<Box style={{textAlign: "center"}}>
						<Typography style={{marginBottom:"15px"}}>
							No hay items en el carrito.
						</Typography>
						<GoHome/>
					</Box>
					:
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Brief/>
						</Grid>
						<Grid item xs={12}>
							<Box  style={{
								background: "#fff",
								padding: "30px"
							}}>
								<CartForm endBuy={handleEndBuy}/>
							</Box>
						</Grid>
					</Grid>
			}
			<Dialog
				open={idBuy !=null} 
				onClose={() => setIdBuy(null)}
			>
				<DialogTitle>
					Gracias por su compra
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Su ID de compra es: {idBuy}
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</Box>
	);
}

export default Cart;
