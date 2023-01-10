import { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import AuthService from "../utils/auth";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom"

export default function Signup() {
  const [signupState, setSignupState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

 

  const handleSignupFormChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  }; // remove ;

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    console.log(signupState);
    try {
      const { data } = await addUser({
        variables: { ...signupState },
      });
      console.log(data);
      AuthService.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
    handleSignupFormSubmit();
  }; // remove ;

  // are the {" "} for blank spaces? there are better ways to do that with classes or other types of css
  return (
    <div className="flex container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
      <div className="grid container mx-auto content-center min-h-fit min-w-fit text-black bg-gray-600">
        <div className="grid container mx-auto justify-center p-5 content-center text-white ">
          <h2 className="flexcontent-center text-5xl  justify-center p-5 ">
            Signup for a Track-It Account
          </h2>
        </div>
        <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 ">
          <form
              className="grid text-2xl w-3/5 "
              onClick={handleSignupFormSubmit}
          >
            <label className="flex mx-auto text-black p-5">
              {" "}
              Username:
              <input
                className="flex mx-auto space-x-20 text-black"
                placeholder="Jdoe"
                type="username"
                name="username"
                value={signupState.username}
                onChange={handleSignupFormChange}
              />
            </label>

            <label className="flex mx-auto text-black p-5">
              {" "}
              Email:
              <input
                className="flex mx-auto space-x-20 text-black"
                placeholder="youremail@email.com"
                name="email"
                type="email"
                value={signupState.email}
                onChange={handleSignupFormChange}
              />
            </label>

            <label className="flex mx-auto text-black p-5">
              Password:
              <input
                className="flex mx-auto space-x-20 text-black"
                placeholder="******"
                name="password"
                type="password"
                value={signupState.password}
                onChange={handleSignupFormChange}
              />
            </label>
         

          <button 
              className="rounded-full border-8 bg-white" type="submit"
              onSubmit={
                <Link to="./Technician"></Link>
              }
              >
            Signup
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}


