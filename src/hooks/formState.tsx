import * as React from 'react';


export function useForm() {
    const [inputVal, setInputVal] = React.useState({ name: '', email: '', password: '' })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal({ ...inputVal, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
      
    }
    return { inputVal, handleChange, handleSubmit }
}
