import React from "react";
import { Box, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardWidget = () => {
    return (
        <Box>
            <IconButton color="primary" variant="contained">
                <AddShoppingCartIcon />
            </IconButton>
        </Box>
    );
}

export default CardWidget;