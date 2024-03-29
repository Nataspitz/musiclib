import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: { message: string } | FieldError | undefined;
    label?: string;
    type: string;
}

export const Input: React.FC<IInputProps> = forwardRef(
    ({ error, label, type, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <>
                {label ? <label>{label}</label> : null}
                <input type={type} ref={ref} {...rest} />
                {error ? <span>{error.message}</span> : null}
            </>
        );
    }
);
