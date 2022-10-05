import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardWidget from "../CardWidget/CardWidget";
import { menuItems } from "../../mockAPI/mockAPI";

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
        padding: "15px",
        textDecoration: "none",
    };

    return (
        <Box style={mainBox}>
            <Box>
                <Link to="/">
                    <img src="logo.png" alt="PC Power Shop" style={{maxHeight:"60px"}}/>
                </Link>
            </Box>

            <Box>
                <Typography>
                    {
                        menuItems.map((menu) => (
                            <Link style={styleMenu} to={"/category/"+menu.id}>{menu.name}</Link>
                        ))
                    }
                </Typography>
            </Box>

            <Box>
                <CardWidget/>
            </Box>
        </Box>
    );
}

export default NavBar;