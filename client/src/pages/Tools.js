import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { QUERY_TOOL } from "../utils/queries";


export default function Tools() {
 
  const { tool } = useParams();

  const { loading, data } = useQuery(QUERY_TOOL, {
    variables: { tool: [tool]},// I am not sure this is correct Ido want the whole object
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
        tool by technician
        <div>
        <h3>{tools.technician}technician username</h3>
        <ul>
          <li>{tools.name}**</li>
          <li>{tools.description}**</li>
          <li>{tools.value}**</li>
        </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
