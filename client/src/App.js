import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home'


function App() {
  return (
    
       
    <Router>
      <Header />  
      
      <Route
            path='/'
            element={ <Home />}
            />
      
    </Router>
    
  );
}

export default App;

