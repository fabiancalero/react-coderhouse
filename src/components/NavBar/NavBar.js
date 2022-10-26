import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { menuItems } from "../../utils/menu";
import "./NavBar.css";

function NavBar () {

	const mainBox = {
		background:"black",
		padding:"15px 30px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
	};

	const styleMenu = {
		color: "white",
		padding: "5px",
		textDecoration: "none",
	};

	return (
		<Box className="mainBox" style={mainBox}>
			<Box>
				<Link to="/">
					<img src="logo.png" alt="PC Power Shop" style={{maxHeight:"60px"}}/>
				</Link>
			</Box>

			<Box className="menuItemsBox">
				<Typography>
					{
						menuItems.map((menu) => (
							<Link
								key={menu.id}
								className="menuItems"
								style={styleMenu}
								to={"/category/"+menu.id}
							>
								<Button endIcon={menu.icon}>
									{menu.name}
								</Button>
							</Link>
						))
					}
				</Typography>
			</Box>

			<Box>
				<CartWidget/>
			</Box>
		</Box>
	);
}

export default NavBar;