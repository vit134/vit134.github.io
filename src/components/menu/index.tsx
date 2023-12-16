import React from 'react';
import styles from './styles.module.css';

type Props = {
    data: number[];
    activeItem: number;
    onChange: (activeItem: number) => void
};

export const Menu: React.FC<Props> = ({ data, activeItem, onChange }) => {
    return (
        <div className={styles.root}>
            {
                data.map(el => {
                    const handleClick = () => {
                        if (el !== activeItem) {
                            onChange(el);
                        }
                    }

                    return (
                        <button
                            key={el}
                            className={`${styles.item} ${activeItem === el ? styles.active : ''}`}
                            onClick={handleClick}>
                            [ Day {el} ]
                        </button>
                    );
                })
            }
        </div>
    );
};
