import React from "react";
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Item from '../Item/Item';

function ItemList (props) {
	
	return (

		<Grid container spacing={3}>
			{
				props.products.map((product) => <Grid key={product.id} item xs={3}>
					<Item 
						id={product.id}
						key={product.id}
						img={product.img}
						title={product.title}
						price={product.price}
						stock={product.stock}
						category={product.category}
					/>
				</Grid>)
			}
		</Grid>
	);
}

ItemList.propTypes = {
	products: PropTypes.array,
};

export default ItemList;