import { Add, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React, {useState} from 'react';

function ItemCount({stock, initialValue, text, onAdd}) {
    const [count, setCount] = useState(initialValue);

    function handleLess () {
        if (count > 0) setCount(count -1);
    }

    function handleAdd () {
        if (count < stock) setCount(count +1);
    }

    return (
        <Box style={{
            display:"flex",
            verticalAlign:"center",
            marginTop: "15px",

        }}>
            <IconButton onClick={handleLess} variant="outlined">
                <Remove/>
            </IconButton>
            <Typography style={{
                lineHeight:  "40px",
                padding: "0 5px",
            }}><strong>{count}</strong></Typography>
            <IconButton onClick={handleAdd} variant="outlined">
                <Add/>
            </IconButton>
            {
                count > 0 && <Button style={{
                    marginLeft: "15px",
                }}
                onClick={onAdd} variant='contained'>{text}</Button>
            }
        </Box>
     );
}

export default ItemCount;





