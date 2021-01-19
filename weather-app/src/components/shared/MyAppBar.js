import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MyAppBar = () => {
    return (
        <AppBar style={{height: '7rem'}} position="static">
            <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h3" className="title">
                Weather APP!
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;