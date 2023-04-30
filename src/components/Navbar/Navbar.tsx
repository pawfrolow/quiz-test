import React, { useCallback } from 'react';
import * as s from './Navbar.styled';
import { Navigate, useLocation } from 'react-router-dom';
import mainStore from 'stores/MainStore';
import { Routes } from 'routes/types';
import { observer } from 'mobx-react-lite';
import MaterialIcon from 'components/MaterialIcon/MaterialIcon';

const Navbar = observer(() => {
    const location = useLocation();

    const title = useCallback(() => {
        switch (location.pathname.replace(/\d/g, '').replace(/\/\//g, '/')) {
            case '/categories':
                return 'Categories';
            case '/categories/quiz': {
                return 'Quiz';
            }
            case '/categories/final': {
                return 'Result';
            }
            default:
                return '';
        }
    }, [location]);

    if (location.pathname === '/') return null;

    if (!mainStore.name) return <Navigate to={Routes.MAIN} />;

    const logout = () => {
        mainStore.setName = '';
    };

    return (
        <s.Navbar>
            <s.Title>{title()}</s.Title>
            <s.NameBlock>{mainStore.name}</s.NameBlock>
            <s.LogoutButton onClick={logout} icon={<MaterialIcon>logout</MaterialIcon>} />
        </s.Navbar>
    );
});

export default Navbar;
