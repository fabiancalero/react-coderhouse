import React from "react";

import { Box, Link, Typography } from "@mui/material";
import CardWidget from "./CardWidget";

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
        padding: "15px"
    };

    return (
        <Box style={mainBox}>
            <Box>
                <img src="logo.png" alt="PC Power Shop" style={{maxHeight:"60px"}}/>
            </Box>

            <Box>
                <Typography>
                    <Link style={styleMenu} href="/">Monitores</Link>
                    <Link style={styleMenu} href="/">Mouses</Link>
                    <Link style={styleMenu} href="/">Teclados</Link>
                    <Link style={styleMenu} href="/">CPU</Link>
                    <Link style={styleMenu} href="/">GPU</Link>
                    <Link style={styleMenu} href="/">Sillas Gamer</Link>
                </Typography>
            </Box>

            <Box>
                <CardWidget/>
            </Box>
        </Box>
    );
}

export default NavBar;