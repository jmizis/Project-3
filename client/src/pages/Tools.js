// import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_TOOL } from "../utils/queries";


// export default function Tools () {
//   const [toolState, setToolState] = useState({ toolName: '', description: '', value: ''});
//   const { tools } = useQuery(QUERY_TOOL);
//   // const toolList = { tools };
  
//  const toolsList = ({
//   tools: {
//     toolName: "toolName",
//     description: "description",
//     value: "value",
//   },
 
// }) 
// return useState(toolState);
  
//   return (
//     <div className='box-border p-4 border-4' >
//     <div className="grid container mx-auto content-center min-h-fit min-w-fit text-white bg-gray-600">
//       <div className="grid container mx-auto justify-center p-5 content-center text-white ">
//         <h2 className="flexcontent-center text-3xl  justify-center p-5 ">Your assigned tools</h2>
//       </div>
//       <div className="grid container mx-auto content-center text-2xl w-3/5 justify-center p-5">
//         tool by technician
//         <div>
        
//         <ul>
//           {toolsList.map(data => <li toolState={toolState} toolName={data.toolsList.toolName} description={data.toolsList.description} value={data.toolsList.value} key={data.toolList._id} />)}
//             </ul>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }
// }



