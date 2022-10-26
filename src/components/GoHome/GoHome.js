import React from 'react';
import { Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function GoHome() {
	return (
		<Link style={{textDecoration: "none"}} to="/">
			<Button
				variant="contained"
				endIcon={<Home/>}
			>
				Ir al Inicio
			</Button>
		</Link>
	);
}
				
export default GoHome;
