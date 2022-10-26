import { Box, Typography } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import { getProduct } from "../../services/firebase";
import GoHome from '../GoHome/GoHome';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
	const {
		isLoading,
		handleMessage,
		handleLoading,
	} = useContext(appContext);

	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect (()  => {
		handleLoading(true);
		getProduct(id).then((prod) => {
			setProduct(prod);
			handleLoading(false);
		}).catch((error) => {
			setProduct(null);
			handleMessage(error.message, "error");
			handleLoading(false);
		});
	}, [id]);

	return (
		<div style={{padding:"30px"}}>
			{
				!isLoading && product &&
				<ItemDetail
					id={product.id}
					key={product.id}
					img={product.img}
					title={product.title}
					price={product.price}
					stock={product.stock}
					category={product.category}
					description={product.description}
				/>
			}
			{
				!isLoading && !product &&
				<Box style={{textAlign: "center"}}>2
					<Typography style={{marginBottom:"15px"}}>
						Producto no encontrado.
					</Typography>
					<GoHome/>
				</Box>
			}
		</div>
	);
}

export default ItemDetailContainer;