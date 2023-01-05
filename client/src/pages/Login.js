import React, { useState } from 'react';
import { Link }from 'react-router-dom';
import { useMutation } from '@apollo/client';// allows mutations thru typedefs
import { LOGIN_USER } from '../utils/mutations';// added thru mutations
import AuthService from '../utils/auth';

 const Login = (props) => {
  const [loginFormState, setLoginFormState] = useState({ email: '', password: ''});
    const [login, { error, data}] = useMutation(LOGIN_USER);

    const handleLoginFormChange = (event) => {
        const { name, value } = event.target;
        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(loginFormState);
        try {
            const { data } = await login({// i think this is the error
                variables: { ...loginFormState },
            });
            console.log(data);
             AuthService.login(data.login.token);
        } catch (e) {
            console.log(e);// Auth login error
        }

        setLoginFormState({
            email: '',
            password: '',
        });
    };

  return (
     <div className="flex container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
      <div className="grid container mx-auto content-center min-h-fit min-w-fit text-black bg-gray-600">
        <div className="grid container mx-auto justify-center p-5 content-center text-white ">
      <h2 className="flexcontent-center text-5xl  justify-center p-5 ">Login to your Track-It Account</h2>
        </div>
        
      <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 ">



        
        <form className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 ">
                
          <label className="flex mx-auto text-white p-5">Email:
            <input className="flex mx-auto space-x-20 text-black "
                placeholder="youremail@email.com"
                type='email' 
                name='email'
                value={loginFormState.email} 
                onChange={handleLoginFormChange}
                /> 
          </label>
                
          <label className="flex mx-auto text-white p-5">Password:
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="******"
                type='password' 
                name='password'
                value={loginFormState.password} 
                onChange={handleLoginFormChange}
                /> 
          </label>
        
        <button  className="grid container mx-auto rounded-full border-8 bg-white"
            type='submit' 
            onClick={handleLoginFormSubmit}
        >
          Submit
        </button >
        </form>

      {error && (
        <div> {error.message}
        </div>
      )}

       </div>
      </div>
    </div>
  );
}


export default Login;

