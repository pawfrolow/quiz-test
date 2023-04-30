import { createGlobalStyle } from 'styled-components';
import Icons from 'assets/fonts/icons.woff2';
import { device } from './sizes';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Material Symbols Rounded';
        font-style: normal;
        font-display: block;
        font-weight: 200 400;
        src: url(${Icons}) format('woff2');
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
    }

    .material-symbols-rounded {
        font-family: 'Material Symbols Rounded', sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
    }

    @media ${device.mobile} {
        .ant-result {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;
