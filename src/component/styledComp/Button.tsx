import * as React from 'react';
import './index.css'
export interface IStyledButtonProps {
    children: React.ReactNode;
    click:()=>void;
}

export function StyledButton(props: IStyledButtonProps) {
    return (
        <div>
            <button className='btn ' onClick={props.click}>
                {props.children}
            </button>
        </div>
    );
}
