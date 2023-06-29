import React from 'react'
import { AppBar, Toolbar, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = anchorEl
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography></Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default MuiNavbar