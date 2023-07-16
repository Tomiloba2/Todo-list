'use client'

import InputField from '@/component/styledComp/Form';
import { Card } from '@/component/styledComp/card';
import * as React from 'react';
import styles from './page.module.css'
import { useForm } from '@/hooks/formState';
import { StyledButton } from '@/component/styledComp/Button';
import Link from 'next/link';

export interface ISignInProps {
}

export default function SignIn(props: ISignInProps) {
    const { inputVal, handleChange, handleSubmit } = useForm()
    const fields = [
        {
            label: 'Email', name: 'email', type: 'email', value: inputVal.email, onChange: handleChange
        },
        {
            label: 'Password', name: 'password', type: 'password', value: inputVal.password, onChange: handleChange
        },
    ]
    return (
        <>
            <nav className={styles.nav}>
                <Link href={`/signUp`} className={styles.a}>
                    <p className={styles.p}>Sign Up</p>
                </Link>
            </nav>
            <main className={styles.main}>
                <div>
                    <h3 className={styles.header}>Sign In</h3>
                    <Card>
                        <form action="" method="post">
                            {fields.map((item, id) => {
                                return (
                                    <div key={id}>
                                        <div>
                                            <InputField
                                                fields={item} />
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={styles.btn}>
                                <StyledButton click={handleSubmit}>
                                    Sign In
                                </StyledButton>
                            </div>
                        </form>
                    </Card>
                </div>
            </main>
        </>
    );
}
