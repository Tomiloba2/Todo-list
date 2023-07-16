import * as React from 'react';
import './index.css'
export interface ICardProps {
    children: React.ReactNode
}

export function Card(props: ICardProps) {
    return (
        <div className='card'>
            <div>
                {props.children}
            </div>
        </div>
    );
}
