import React, { createContext, useContext, useState } from "react";
import { appContext } from "./appContext";

const cartContext = createContext();

function CartContextProvider(props){
	const {
		handleMessage
	} = useContext(appContext);
	const [cart, setCart] = useState ([]);

	function addToCart(product, quantity){
		let isAdded = false;
		const auxProduct = cart.find(itemInCart => (itemInCart.id === product.id));
		if (auxProduct) {
			const totalQuantity = quantity + auxProduct.quantity;

			if (product.stock >= totalQuantity) {
				let newCart = [...cart.filter(itemInCart => itemInCart.id !== product.id)];
				let newProduct = {
					...product,
					quantity: totalQuantity
				};
				newCart.push(newProduct);
				setCart(newCart);
				isAdded = true;
			}

		} else {
			let newCart = [...cart];
			let newProduct = {...product, quantity};
			newCart.push(newProduct);
			setCart(newCart);
			isAdded = true;
		}

		if (isAdded) {
			handleMessage("Producto agregado al carrito.", "success");
		} else {
			handleMessage("La cantidad seleccionada excede el stock del producto.", "info");
		}
	}

	function removeItem(idToRemove) {
		let newCart = cart.filter( itemInCart => (itemInCart.id !== idToRemove));
		setCart(newCart);
		handleMessage("Producto removido del carrito.", "success");
	}

	function isInCart(id) {
		return cart.find(product => product.id === id) ? true : false; 
	}

	function getProductQuantity(id) {
		return cart.find(product => product.id === id).quantity;
	}

	function getTotalItemInCart() {
		let total = 0;
		cart.forEach((itemInCart) => {
			total = total + itemInCart.quantity;
		});
		return total;
	}

	function getTotalProductPrice(product) {
		return product.quantity * product.price;
	}

	function getTotalPrice() {
		let total = 0;
		cart.forEach((itemInCart) => {
			total = total + (itemInCart.quantity * itemInCart.price);
		});
		return total;
	}

	function clear(msg=true) {
		setCart([]);
		if (msg){
			handleMessage("Carrito vaciado.", "success");
		}
	}
   
	return (
		<cartContext.Provider value={{
			cart,
			addToCart,
			getTotalItemInCart,
			removeItem,
			isInCart,
			getTotalProductPrice,
			getTotalPrice,
			clear,
			getProductQuantity,
		}}>
			{props.children}
		</cartContext.Provider>
	);
}

export {cartContext, CartContextProvider};