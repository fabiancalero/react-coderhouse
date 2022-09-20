import { Box, Link } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";
import CardWidget from "./CardWidget";

const categories = [
    "Monitores",
    "Teclados",
    "Mouse",
    "GPU",
    "CPU",
    "Web cams",
    "Headsets",
];

const NavBar = () => {
    return (
        <Box style={{
            background:"black",
            padding:"15px 30px",
            display: "flex",
            justifyContent: "space-between",
            verticalAlign: "center"
        }}>
            <Box>
                <h1>
                    <img src="logo.png" alt="PC Power Shop" style={{maxHeight:"60px"}}/>
                </h1>
            </Box>

            <Box>
                {
                    categories.map((item) => {
                        return (
                            <Link style={{color:"white", padding:"15px"}} href="/">{item}</Link>
                        )
                    })
                }
            </Box>
                <CardWidget/>
        </Box>
    );
}

export default NavBar;