import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Item (props) {
 
	return (
		<Box className="item">
			<Paper sx={{
				boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%)",
				padding: "30px"
			}}>
				<Box align="center" className="item-img">
					<img style={{
						width: 'auto',
						maxHeight: '100px'
					}} src={props.img} alt={props.img}/>
				</Box>
				<Box className="item-detail">
					<Typography
						style={{
							fontSize: "14px",
							fontWeight: "300",
							lineHeight: "1.3",
							color: "#666",
							textAlign: "center",
							marginTop: "15px",
						}}
						variant='h2'
					>
						<Link style={{textDecoration: "none", color: "#666",}} to={"/item/"+ props.id}>
							{props.title}
						</Link>
					</Typography>
					<Typography variant='h4'
						style={{
							color: "#333",
							fontSize: "24px",
							lineHeight: "1.2",
							textAlign: "center",
							marginTop: "15px",
						}}
					>U$S {props.price}</Typography>
				</Box>
				<Box style={{
					textAlign: "center",
					marginTop: "15px",
				}}>
					<Link style={{textDecoration: "none",}} to={"/item/"+props.id}>
						<Button variant='contained'>Ver detalle</Button>
					</Link>
				</Box>
			
			</Paper>
		</Box>
	);
}

export default Item;
