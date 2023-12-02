import React from 'react';
import styles from './styles.module.css';

type Props = {
    ExerciseComponent: React.ComponentType;
    CodeComponent: React.ComponentType;
}

const Exercise: React.FC<Props> = ({ ExerciseComponent, CodeComponent }) => {
    return (
        <div className={styles.root}>
            <div className={styles['col_left']}>
                <div className={styles.content}>
                    <ExerciseComponent />
                </div>
            </div>
            
            <div className={styles['col_right']}>
                <CodeComponent />
            </div>
        </div>
    );
}

export default Exercise;