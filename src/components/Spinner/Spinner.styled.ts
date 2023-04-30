import styled from "styled-components";

export const Spinner = styled.div<{ center?: boolean }>`
    ${(props) => props.center && `
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;