import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function CardWidget() {
    const buttonStyle = {
        background: "#5D3FD3"
    };

    const iconStyle = {
        color: "#fff"
    };

    return (
        <IconButton style={buttonStyle}>
            <AddShoppingCartIcon style={iconStyle} />
        </IconButton>
    );
}

export default CardWidget;