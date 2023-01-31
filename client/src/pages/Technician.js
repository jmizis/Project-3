import React, { useState } from "react";
import { QUERY_TOOL } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TOOL } from "../utils/mutations";

export default function Technician() {
  const [toolState, setToolState] = useState({ toolName: '', description: '', value: ''});
  const [addTool, { error }] = useMutation(ADD_TOOL);

  const { loading, data } = useQuery(QUERY_TOOL);

  const toolList = data?.tools || [];
  console.log(toolList);

const handleFormChange = (event) => {
  const{ name, value } = event.target;

  setToolState({
    ...toolState,
    [name]: value,
  });
};

const handleFormSubmit = async (event) => {
  console.log(event)
  event.preventDefault();
  console.log('meow');
  try {
    const { data } = await addTool({
      variables: {
        toolData: {...toolState}
      }
    });
    setToolState(data.addTool._id);
    console.log(setToolState)
  } catch (error) {
    console.log(error);
  }
  // do something with toolState then set the defaults useEffect, store to data base,
  console.log(toolState);
  // setting form values back to default
  setToolState({toolName: '', description: '', value: ''});
  
};


  return (
    
      <div className="grid container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
        
        <form className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5 "
               onSubmit={handleFormSubmit} >
        <label className="flex mx-auto text-white p-5">Tool: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="add tool name"
                type='text'
                name='toolName'
                value={toolState.toolName}
                onChange={handleFormChange} 
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Description: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="describe condition"
                type='text'
                name='description'
                value={toolState.description}
                onChange={handleFormChange}  
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Price: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="denote value"
                type='text'
                
                name='value'
                value={toolState.value}
                onChange={handleFormChange}  
                /> 
          </label>
          <button className="grid container mx-auto rounded-full border-8 bg-white text-black"
            type='submit'   
        >Add A Tool</button>
        </form>

        <div className="grid container mx-auto justify-center p-5 content-center text-white ">
          <h2 className="flexcontent-center text-3xl  justify-center p-5 ">Your assigned tools</h2>
        </div>
        <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5">
          your tool list
          
        </div>
        <div className= "toolList">
          {
            toolList.map(tool=>{
              return (
              <div>
                <h2>{tool.toolName}</h2>
              </div>
             ) })
          }
        </div>
      </div>
  
  );
}
