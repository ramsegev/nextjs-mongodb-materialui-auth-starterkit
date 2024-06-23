import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link href="/">MyApp</Link>
                </Typography>
                <Button color="inherit">
                    <Link href="/login">Login</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/register">Register</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
