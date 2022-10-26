import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

function CartWidget() {

	const { getTotalItemInCart } = useContext(cartContext);

	return (
		<Link style={{textDecoration: "none"}} to="/cart">
			<IconButton style={{
				background: "#5D3FD3"
			}}>
				<Badge badgeContent={getTotalItemInCart()} sx={{'.MuiBadge-badge':{background:"rgb(255, 106, 0)"}, color:"white"}}> 
					<AddShoppingCartIcon style={{
						color: "#fff"
					}} />
				</Badge>
			</IconButton>
		</Link>
	);
}

export default CartWidget;