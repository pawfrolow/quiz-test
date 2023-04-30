import { Button } from "antd";
import styled from "styled-components";
import { device } from "styles/sizes";

export const Navbar = styled.header`
    height: ${props => props.theme.sizes.navbarHeight}px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    box-sizing: border-box;
    box-shadow: 0px 7px 8px 0px rgba(34, 60, 80, 0.2);
    position: fixed;
    background: #fff;
    z-index: 1;

    @media ${device.tablet} {
        padding: 16px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
`;

export const NameBlock = styled.div`
    margin-left: auto;
`;

export const LogoutButton = styled(Button)`
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`