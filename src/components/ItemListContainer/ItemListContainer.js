import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import { getProductsByCategory, getProducts, } from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
import { menuItems } from "../../utils/menu";
import { appContext } from "../../context/appContext";

function ItemListContainer () {
	const {
		isLoading,
		handleLoading
	} = useContext(appContext);
	const {id} = useParams();
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		handleLoading(true);
		if (id === undefined) {
			getProducts().then((products) => {
				setProducts(products);
				handleLoading(false);
			});
		} else {
			getProductsByCategory(id).then((products) => {
				setProducts(products);
				handleLoading(false);
			});
		} 
	}, [id]);

	const boxStyle = {
		padding: "30px",
	};

	return (
		<Box style={boxStyle}>
			{
				!isLoading && 
				<Box>
					<Typography style={{marginBottom: "20px"}}>{menuItems.find((item)=>item.id===id)?.name || "Todos nuestros productos" }</Typography>
					<ItemList products={products}/>
				</Box>
			}
		</Box>
	);
	
}

ItemListContainer.propTypes = {
	greeting: PropTypes.string,
};

export default ItemListContainer;