import styled from 'styled-components';
import { IMaterialIconProps } from './MaterialIcon.types';

export const MaterialIcon = styled.i<IMaterialIconProps & { loaded: boolean }>`
    font-size: 18px;
    font-variation-settings: 'FILL' ${({ fill }) => (fill ? 1 : 0)};
    width: ${({ loaded }) => !loaded && '0px !important'};
    opacity: ${({ loaded }) => !loaded && '1 !important'};
    overflow: ${({ loaded }) => !loaded && 'hidden'};
`;
