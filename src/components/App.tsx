import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Header from './Header';
import Banner from './Banner';
import Introduction from './Introduction';
import Divider from './Divider';
import AboutUs from './AboutUs';
import Features from './Features';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <Header />
                <main>
                    <Banner />
                    <Introduction />
                    <Divider />
                    <AboutUs />
                    <Divider />
                    <Features />
                </main>
            </div>
        </ThemeProvider>
    );
};

export default App;