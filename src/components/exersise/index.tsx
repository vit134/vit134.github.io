import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    title: string;
}>

const Exersise: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <h4>{title}</h4>
            <div>{children}</div>
        </div>
    );
}

export default Exersise;