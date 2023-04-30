import React from 'react';
import { Routing } from 'routes';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, notification } from 'antd';
import { QueryClientProvider } from 'react-query';
import queryClient from 'queries/client';
import { ErrorBoundary } from 'components';
import GlobalStyleProvider from 'styles/GlobalStyleProvider';
import { antTheme } from 'styles/theme';

notification.config({ placement: 'bottom', maxCount: 3, duration: 5 });

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyleProvider>
                    <ConfigProvider theme={antTheme}>
                        <ErrorBoundary>
                            <Routing />
                        </ErrorBoundary>
                    </ConfigProvider>
                </GlobalStyleProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
