
import { AppBar, Toolbar, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import { useState } from 'react'
export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  

    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    
    return (
        <div >
            <AppBar position='static' sx={{color:'black'}}>
                <Toolbar color='inherit' className='container'>
                   
                    <Typography variant='h5' component='div' sx={{ flexGrow: 0.1,  fontFamily: 'monospace', color: 'black',mr: 2,fontWeight: 700,letterSpacing: '.3rem',}}>
                        Base.io
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Strona Główna</Button>
                        <Button color='inherit' id='resources-button' onClick={handleClick} aria-control={open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined}>Ściągawki</Button>
                        <Button color='inherit'>O Nas</Button>
                    </Stack>
           
                    <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>HTML</MenuItem>
                        <MenuItem onClick={handleClose}>JavaScript</MenuItem>
                        <MenuItem onClick={handleClose}>Web Style</MenuItem>
                        <MenuItem onClick={handleClose}>Database</MenuItem>
                        <MenuItem onClick={handleClose}>Git</MenuItem>
                        <MenuItem onClick={handleClose}>Curiosities</MenuItem>
                        <MenuItem onClick={handleClose}>Menagment</MenuItem>
                        <MenuItem onClick={handleClose}>Next.js</MenuItem>
                        <MenuItem onClick={handleClose}>React</MenuItem>
                        <MenuItem onClick={handleClose}>TypeScript</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}
