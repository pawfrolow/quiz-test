import styled from "styled-components";
import { device } from "styles/sizes";

export const PageContent = styled.div`
    padding: 24px;
    min-height: 100%;
    margin-top: ${props => props.theme.sizes.navbarHeight}px;

    @media ${device.tablet} {
        padding: 16px;
    }
`;