import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../css/styles.css';

const Header: React.FC = () => {
    return (
        <div className="header-root">
            <AppBar position="static" className="header-appBar">
                <Toolbar className="header-toolbar">
                    <Typography variant="h6" className="header-title">
                        BID
                    </Typography>
                    <Button 
                        color="inherit" 
                        sx={{ fontSize: '1em', padding: '10px 20px', margin: '0 10px' }}
                    >
                        Home
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{ fontSize: '1em', padding: '10px 20px', margin: '0 10px' }}
                    >
                        BID Services
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{ fontSize: '1em', padding: '10px 20px', margin: '0 10px' }}
                    >
                        About BID
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{ fontSize: '1em', padding: '10px 20px', margin: '0 10px' }}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;