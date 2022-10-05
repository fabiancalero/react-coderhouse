import React, { useEffect, useState } from "react";
import { Backdrop, Box, CircularProgress, Grid, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import {useParams} from "react-router-dom";
import { getProducts, getProductsByCategory, menuItems } from "../../mockAPI/mockAPI";

function ItemListContainer () {
    
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        if (id === undefined) {
            getProducts().then((products) => {
                setProducts(products);
                setLoading(false);
            });
        } else {
            getProductsByCategory(id).then((products) => {
                setProducts(products);
                setLoading(false);
            });
        }
    }, [id]);


    const boxStyle = {
        padding: "30px",
    };

    return (
        <Box style={boxStyle}>
            {
                !loading && 
                <Box>
                    <Typography style={{marginBottom: "20px"}}>{menuItems.find((item)=>item.id===id)?.name || "Todos nuestros productos" }</Typography>
                    <Grid container spacing={3}>
                        {
                            products.map((product) => <Grid key={product.id} item xs={3}>
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
                </Box>
            }
            <Backdrop invisible={!loading} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
     );
     
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
};

export default ItemListContainer;