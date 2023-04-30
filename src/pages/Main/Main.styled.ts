import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { device } from 'styles/sizes';

export const MainPage = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const SideBlock = styled.aside`
    flex: 2;
    background: rgb(2, 10, 181);
    background: radial-gradient(circle, rgba(2, 10, 181, 1) 0%, rgba(185, 22, 180, 1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tablet} {
        display: none;
    }
`;

export const FormBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;

    h1, h3 {
        display: none;
    }

    @media ${device.tablet} {
        background: rgb(2, 10, 181);
        background: radial-gradient(circle, rgba(2, 10, 181, 1) 0%, rgba(185, 22, 180, 1) 100%);

        label p {
            color: #fff;
        }

        h1, h3 {
            display: block;
        }

        h1 {
            font-size: 56px;
            margin: 64px auto 24px auto;
        }

        h3 {
            font-size: 32px;
            margin: 0 auto 100px auto;
        }

        form {
            margin: 0 auto auto auto;
            width: 400px;
        }
    }

    @media ${device.mobile} {
        form {
            width: 100%;
        }
    }
`;

export const Button = styled(AntdButton)`
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 96px;
    font-weight: 900;
    color: #fff;
    margin: 0 128px 0 auto;
`;

export const SubTitle = styled.h3`
    color: #fff;
    font-size: 48px;
    margin: 32px 128px 0 auto;
`;
