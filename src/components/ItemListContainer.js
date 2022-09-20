import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <Box style={{
            padding: "60px",
            background: "#ebebeb"
        }}>
            <Typography align="center">{greeting}</Typography>
        </Box>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
};

export default ItemListContainer;