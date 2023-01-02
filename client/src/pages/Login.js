// login page
import React, { useState } from 'react';

export default function Login() {
  return (
    <div>
      <h2>test Login Page </h2>
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