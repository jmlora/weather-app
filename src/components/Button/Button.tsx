import React from 'react'
import styles from './Button.module.scss';

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode | React.ReactNode[] | React.ReactPortal | boolean | null | undefined,
}

function Button({
    onClick,
    type = "button",
    children,
}:ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick} type={type}>{children}</button>
    )
}
export { Button };