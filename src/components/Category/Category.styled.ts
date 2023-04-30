import styled from "styled-components";

export const Category = styled.div`
    border: #e2e2e2 solid 1px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-bottom: 16px;

    &:hover {
        background: #e2e2e2;
    }
`;

export const Title = styled.h4`
    margin: 0;
    text-transform: capitalize;
    padding: 16px;
    color: #111;
`