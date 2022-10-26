import React from 'react';
import './App.css';

import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import { CartContextProvider } from './context/cartContext';

import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { AppContextProvider } from './context/appContext';

function App() {
	return (
		<AppContextProvider>
			<CartContextProvider>
				<BrowserRouter>
					<Box className="App">
						<NavBar/>
						<Routes>
							<Route path= "/" element={<ItemListContainer/>}/>
							<Route path= "/category/:id" element={<ItemListContainer />} />
							<Route path= "/item/:id" element={<ItemDetailContainer/>} />
							<Route path= "/cart" element={<Cart/>} />
							<Route path= "*" element={<h2>Error 404, pagina no encontrada</h2>} />
						</Routes>
					</Box>
				</BrowserRouter>
			</CartContextProvider>
		</AppContextProvider>
	);
}
  
export default App;
