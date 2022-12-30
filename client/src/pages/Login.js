// login page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';// allows mutations thru typedefs
import { LOGIN_USER } from '../utils/mutations';// added thru mutations
import { Auth } from '../utils/auth';
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from '@chakra-ui/react';


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
        <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='Email'/>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Password'/>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>// needs button
    )
};

export default Login;