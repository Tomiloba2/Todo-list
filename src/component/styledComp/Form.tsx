import * as React from 'react';
import './index.css'

export interface IInputFieldProps {
    fields: {
        label: string;
        name: string;
        type: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

export default function InputField(props: IInputFieldProps) {
    const { fields } = props
    //console.log(fields);

    return (
        <div>
            <label htmlFor="name">{fields.label}</label>
            <input
                name={fields.name}
                value={fields.value}
                onChange={fields.onChange}
                type={fields.type} />
        </div>
    );
}
