// login page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';// allows mutations thru typedefs
import { LOGIN_USER } from '../utils/mutations';// added thru mutations
import { Auth } from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, {error, data}] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div>
            </div>
        </main>
    )
}