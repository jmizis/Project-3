import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_TOOL } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_TOOL } from "../utils/mutations";

export default function Technician() {
  const [logToolState, setLogToolState] = useState({ name: '', description: '', value: ''});
  const [addToolState, setToolState] = useState({name: '', description: '', value: ''});
  
  

const handleFormChange = (event) => {
  const{ name, value } = event.target;
  setLogToolState({
    ...logToolState,
    [name]: value,
  });
};
const [addTool, { error }] = useMutation(ADD_TOOL);
const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(addToolState);
  
  try {
    const { data } = await addTool({
      variables: {
          ...addToolState
      }
    });
    setToolState('');
  } catch (error) {
    console.log(error);
  }
}

 // will need this to show all tech tools
  const { tool } = useParams();

  const { loading, data } = useQuery(QUERY_TOOL, {
    variables: { tool: tool},
  });

  const tools = data?.tools || {};

  if(loading) {
    return <div>loading</div>;
  }

  return (
    
      <div className="grid container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
        <div className="grid container mx-auto justify-center p-5 content-center text-white ">
          <h2 className="flexcontent-center text-3xl  justify-center p-5 ">Your assigned tools</h2>
        </div>
        <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5">
          your tool list
          <ul>
            <li>{tools.name}**</li>
            <li>{tools.description}**</li>
            <li>{tools.value}**</li>
          </ul>
        </div>

        <form className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 ">
        <label className="flex mx-auto text-white p-5">Tool: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="add tool name"
                type='text'
                name='name'
                value={logToolState.name}
                onChange={handleFormChange} 
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Description: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="describe condition"
                type='text'
                name='description'
                value={logToolState.description}
                onChange={handleFormChange}  
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Price: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="denote value"
                type='number'
                name='value'
                value={logToolState.value}
                onChange={handleFormChange}  
                /> 
          </label>
          <button className="grid container mx-auto rounded-full border-8 bg-white text-black"
            type='submit' 
            // value={setToolState}
            onSubmit={handleFormSubmit}   
        >Add A Tool</button>
        </form>
      </div>
  
  );
}
