import React from 'react';

import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <NavBar/>
      <ItemListContainer
        greeting="Lo último en tecnología"
      />
    </Box>
  );
}


export default App;
 