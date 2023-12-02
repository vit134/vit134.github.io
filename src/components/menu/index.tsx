import React from 'react';
import styles from './styles.module.css';

type Props = {
    data: string[];
    activeItem: string;
    onChange: (activeItem: string) => void
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
                            className={`${styles.item} ${activeItem === el ? styles.active : ''}`}
                            onClick={handleClick}>
                            [ {el} ]
                        </button>
                    );
                })
            }
        </div>
    );
};
