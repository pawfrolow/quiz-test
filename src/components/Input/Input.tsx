import { Input as AntdInput, InputProps } from 'antd';
import * as s from './Input.styled';

export interface IInputProps extends InputProps {
    label?: string;
    allowClear?: boolean;
    type?: string;
    disabled?: boolean;
    required?: boolean;
}

const Input = ({ label, ...inputProps }: IInputProps) => {
    return (
        <label>
            <s.LabelText hidden={!label}>{label}</s.LabelText>
            <AntdInput {...inputProps} />
        </label>
    );
};

Input.defaultProps = {
    allowClear: true,
    disabled: false,
    required: false,
    maxLength: 255,
} as const;

export default Input;
