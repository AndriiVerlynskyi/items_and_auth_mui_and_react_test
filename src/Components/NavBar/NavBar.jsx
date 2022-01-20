import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

const StyledAppBar = styled(AppBar)( ({theme}) => ({
    bgcolor: theme.palette.info.light,
    flexDirection: 'row'
})
)

const StyledNavButton = styled(Button)( ({theme}) => ({

}))


const NavBar = () => {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <StyledNavButton>
                    <RouterLink to="/posts" style={{color:'white', textDecoration:'none'}}>Posts</RouterLink>
                </StyledNavButton>
                <Box>
                    <StyledNavButton>
                        <RouterLink to="/login" style={{color:'white', textDecoration:'none'}}>Login</RouterLink>
                    </StyledNavButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
};

export default NavBar;
