import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function ItemListContainer (props) {
    
    const boxStyle = {
        padding: "30px",
    };

    return (
        <Box style={boxStyle}>
            <Typography variant="h6">
                {props.greeting}
            </Typography>
        </Box>
     );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
};

export default ItemListContainer;