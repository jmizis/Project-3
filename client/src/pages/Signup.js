import { useState } from 'react';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

export default function Signup() {

    const [signupState, setSignupState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, {data}] = useMutation(ADD_USER);

    // const isError = data === '';

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
    <div className="container">
      <div className="card-container">
      <h2>Signup for a TrackIt account</h2>
      <div className="card">
        <form>
          <label>Username:
            <input 
                className="form-input"
                placeholder="Jdoe"
                type='username'
                name='username' 
                value={signupState.username} 
                onChange={handleSignupFormChange}
                /> 
          </label>
          <label>Email:
            <input
              className='form-input'
              placeholder='youremail@email.com'
              name='email'
              type='email' 
              value={signupState.email} 
                onChange={handleSignupFormChange}
                /> 
          </label>
          <label>Password:
            <input 
                className='form-input'
                placeholder='******'
                type='password' 
                value={signupState.password} 
                onChange={handleSignupFormChange}
                /> 
          </label>
        </form>
        <button 
        type='button' 
        onClick={handleSignupFormSubmit}
        >
          Signup
        </button>
       </div>
      </div>
    </div>
  
  )
};

//         <FormControl>
//             <FormLabel>Signup for a TrackIt account</FormLabel>
            
//             <Input 
                // type='username' 
                // value={signupState} 
                // onChange={handleSignupFormChange} 
//                 />
//       {!isError ? (
//         <FormHelperText>
//           Choose a public username
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>
//             Username required
//         </FormErrorMessage>
//       )};

//       <Input 
//         type='email' 
//         value={signupState} 
//         onChange={handleSignupFormChange} 
//         />
//       {!isError ? (
//         <FormHelperText>
//           Enter company used email.
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>Email is required.</FormErrorMessage>
//       )};
                
//       <Input 
//         type='password' 
//         value={signupState} 
//         onChange={handleSignupFormChange} 
//         />
//       {!isError ? (
//         <FormHelperText>
//           Password
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>A password is required.</FormErrorMessage>
//       )};
//       <Button 
//         as='button' 
//         OnClick={handleSignupFormSubmit}
//         isLoading
//         loadingText='Submitting'
//         colorScheme='teal'
//         variant='outline'
//         >
//         Submit
//         </Button>


//         </FormControl>
//     )

   
// }

// export default Signup();