// login page
import React, { useState } from 'react';
import { Link }from 'react-router-dom';
import { useMutation } from '@apollo/client';// allows mutations thru typedefs
import { LOGIN_USER } from '../utils/mutations';// added thru mutations
import AuthService from '../utils/auth';

export default function Login() {
  const [loginFormState, setLoginFormState] = useState({ email: '', password: ''});
    const [login, {data}] = useMutation(LOGIN_USER);

    const isError = data === '';

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
            new AuthService.login(data.login.token);
        } catch (e) {
            console.log(e);// Auth login error
        }

        setLoginFormState({
            email: '',
            password: '',
        });
    };

  return (
    <div className='box-border p-4 border-4' >
      <div className="grid container mx-auto content-center min-h-fit min-w-fit text-black bg-gray-600">
        <div className="grid container mx-auto justify-center p-5 content-center text-white ">
      <h2 className="flexcontent-center text-5xl  justify-center p-5 ">Login to your Track-It Account</h2>
        </div>
        
      <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 ">
        {data ? (
          <p>
            Thanks! Go check out your tools.
            <Link to="/technician"></Link>
          </p>
        ) : (
        
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
            <input className="flex mx-auto space-x-20 text-black rounded-lg"
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
        )}
      {isError && (
        <div> {isError.message}
        </div>
      )}

       </div>
      </div>
    </div>
  );
}









// import { Link } from 'react-router-dom'; to link once logged in to the technician page
// import { useMutation } from '@apollo/client';// allows mutations thru typedefs
// import { LOGIN_USER } from '../utils/mutations';// added thru mutations
// import AuthService from '../utils/auth';
// import { 
//     FormControl, 
//     FormLabel, 
//     FormHelperText, 
//     Input, 
//     FormErrorMessage, 
//     Button
// } from '@chakra-ui/react';



// const Login = () => {
//     const [loginFormState, setLoginFormState] = useState({ email: '', password: ''});
//     const [login, {data}] = useMutation(LOGIN_USER);

//     const isError = data === '';

//     const handleLoginFormChange = (event) => {
//         const { name, value } = event.target;
//         setLoginFormState({
//             ...loginFormState,
//             [name]: value,
//         });
//     };

//     const handleLoginFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(loginFormState);
//         try {
//             const { data } = await login({
//                 variables: { ...loginFormState },
//             });
//             new AuthService.login(data.login.token);
//         } catch (e) {
//             console.log(e);
//         }

//         setLoginFormState({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <FormControl>
//             <FormLabel>Login</FormLabel>
//         <Input 
//             type='email' 
//             placeholder='Email'
//             value={loginFormState}
//             onChange={handleLoginFormChange}
//         />
//         {!isError ? (
//             <FormHelperText>
//                 Enter a valid email.
//             </FormHelperText>
//         ) : (
//             <FormErrorMessage>
//                 A valid email is required.
//             </FormErrorMessage>
//         )};

//         <FormLabel>Password</FormLabel>
//         <Input 
//             type='password' placeholder='Password'
//             value={loginFormState}
//             onChange={handleLoginFormChange}
//             />
//         <Button
//             type='button'
//             onClick={handleLoginFormSubmit}
//             isLoading
//             loadingText='Submitting'
//             colorScheme='green.500'
//             variant='outline'
//             >
//                 Inventory Awaits
//             </Button>

//       </FormControl>
//     )
// };

// export default Login;