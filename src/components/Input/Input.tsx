import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    value: string,
    type: string,
    className?: string,
}
function Input({
    className,
    onChange,
    placeholder,
    value,
    type
}:InputProps) {
    return (
        <input value={value} onChange={event => onChange(event)} className={`${styles.input} ${className ? className : ''} ${styles.input}`} type={type} placeholder={placeholder} />
    );
}

export { Input };