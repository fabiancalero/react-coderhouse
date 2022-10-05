import { Backdrop, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../mockAPI/mockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading]= useState(false);

  useEffect (()  => {
    setLoading(true);

    getProduct(id).then((prod) => {
      setProduct(prod);
      setLoading(false);
    });
  }, [id]);

  return (
    <div style={{padding:"30px"}}>
      {
        !loading &&  <ItemDetail
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
      <Backdrop invisible={!loading} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
     
    </div>
  )
}


export default ItemDetailContainer;