import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type Props = PropsWithChildren<{
    title: string;
    active: boolean;
}>

const Exercise: React.FC<Props> = ({ active, title, children }) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.title}>
                {active && <span className={styles.active}>{'>'}</span>}
                <span>{title}</span>
            </h4>
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Exercise;