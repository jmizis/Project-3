import React from 'react';
import Home from './pages/Home';
import Technician from "./pages/Technician";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Added from react can connect with graphql in the backend for mutations/quiers. establish a qraphql uri for frontend
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';

  
  const httpLink = createHttpLink({
    uri: '/graphql',
    });
    
    // Construct request middleware that will attach the JWT token to every request as an `authorization` header
    const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
    },
    };
    });
    
    const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    });
    

function App() {
   
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
     
      
      <div className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white'>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Technician" element={<Technician />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
      <Footer />
      </ApolloProvider>
    </>
    
  )
}
  
 
export default App






// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'; 
// import Home from './pages/Home'

// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <Header />  
//       <Home />     
    
//     </Router>
         
//   );
// }

// export default App;

