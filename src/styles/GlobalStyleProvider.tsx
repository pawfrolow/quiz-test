import React from 'react';
import { FontStyles, GlobalStyle } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

type TGlobalStyleProvider = {
    children: React.ReactNode;
};

const GlobalStyleProvider = ({ children }: TGlobalStyleProvider) => {
    return (
        <>
            <FontStyles />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    );
};

export default GlobalStyleProvider;
