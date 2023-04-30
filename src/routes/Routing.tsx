import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { NotFound } from 'pages';
import { Navbar, Page } from 'components';

const Routing = () => {
    return (
        <Page>
            <Navbar />
            <Routes>
                {routes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={<Component />} />;
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Page>
    );
};

export default Routing;
