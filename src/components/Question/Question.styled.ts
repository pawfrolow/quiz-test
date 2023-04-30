import styled from "styled-components";
import { Button as AntdButton } from 'antd';
import { device } from "styles/sizes";

export const Wrapper = styled.section`
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;
    width: 600px;

    @media ${device.tablet} {
        padding: 16px;
        width: 400px;
    }

    @media ${device.mobile} {
        width: 100%;
        width: 100%;
    }

    .ant-form-item:last-child {
        margin-bottom: 0;
    }
`;

export const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 700;
`;

export const Button = styled(AntdButton)`
    margin-left: auto;
    width: 100%;
`;

export const CoinBlock = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: center;

    i {
        margin-right: 8px;
    }
`;
