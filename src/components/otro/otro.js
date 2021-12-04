import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/AccessAlarm';

export const Otro = () => {


    const handleButton = () => {
        console.log('omggggg');
    }

    return (
        <div>
            <Tooltip title="Delete">
                <IconButton
                    onClick={ handleButton }
                >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}
