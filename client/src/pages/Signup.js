import { useState } from 'react';
// use Link to link pages in the app import from react-router-dom for that. 
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button,
  } from '@chakra-ui/react'

const Signup = () => {
    const [signupState, setSignupState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, {data}] = useMutation(ADD_USER);

    const isError = data === '';

    const handleSignupFormChange = (event) => {
        const { name, value } = event.target;

        setSignupState({
            ...signupState,
            [name]: value,
        });
    };

    const handleSignupFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const { data } = await addUser({
                variables: { ...signupState},
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <FormControl>
            <FormLabel>Signup for a TrackIt account</FormLabel>
            
            <Input 
                type='username' 
                value={signupState} 
                onChange={handleSignupFormChange} 
                />
      {!isError ? (
        <FormHelperText>
          Choose a public username
        </FormHelperText>
      ) : (
        <FormErrorMessage>
            Username required
        </FormErrorMessage>
      )};

      <Input 
        type='email' 
        value={signupState} 
        onChange={handleSignupFormChange} 
        />
      {!isError ? (
        <FormHelperText>
          Enter company used email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )};
                
      <Input 
        type='password' 
        value={signupState} 
        onChange={handleSignupFormChange} 
        />
      {!isError ? (
        <FormHelperText>
          Password
        </FormHelperText>
      ) : (
        <FormErrorMessage>A password is required.</FormErrorMessage>
      )};
      <Button 
        as='button' 
        OnClick={handleSignupFormSubmit}
        isLoading
        loadingText='Submitting'
        colorScheme='teal'
        variant='outline'
        >
        Submit
        </Button>


        </FormControl>
    )

   
}

export default Signup();