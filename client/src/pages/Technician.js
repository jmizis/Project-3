import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_TOOL } from "../utils/queries";

export default function Technician() {
  
  const { tool } = useParams();

  const { loading, data } = useQuery(QUERY_TOOL, {
    variables: { tool: tool},
  });

  const tools = data?.tools || {};

  if(loading) {
    return <div>loading</div>;
  }

  return (
    <div className='box-border p-4 border-4' >
      <div className="grid container mx-auto content-center min-h-fit min-w-fit text-white bg-gray-600">
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
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Description: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="describe condition"
                type='text' 
                /> 
          </label>
          <label className="flex mx-auto text-white p-5">Price: 
            <input className="flex mx-auto space-x-20 text-black"
                placeholder="denote value"
                type='number' 
                /> 
          </label>
          <button className="grid container mx-auto rounded-full border-8 bg-white text-black"
            type='submit'    
        >Add A Tool</button>
        </form>
      </div>
    </div>
  );
}
