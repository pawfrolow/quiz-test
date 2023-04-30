import cn from 'classnames';

import { IMaterialIconProps } from './MaterialIcon.types';
import * as s from './MaterialIcon.styled';

const MaterialIcon = ({ children, ...props }: IMaterialIconProps) => {

    const className = cn(props.className, 'material-symbols-rounded');

    return (
        <s.MaterialIcon {...props} className={className} loaded>
            {children}
        </s.MaterialIcon>
    );
};

export default MaterialIcon;
