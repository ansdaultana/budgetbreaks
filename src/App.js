import './App.css';

import "./assets/css/style.css";
import Homepage from './pages/Homepage';


import {
  BrowserRouter,
  Routes,
  Route,
  
 
} from "react-router-dom";
import Searchedtrips from './pages/Searchedtrips';
import Booking from './pages/Booking';

function App() {
  return (

<BrowserRouter> 
   
 <Routes>
         
          
          
< Route exact path="/" element= { 
<Homepage/>
}/>
< Route exact path="/search" element= { 
<Searchedtrips/>
}/>
< Route exact path="/order" element= { 
<Booking/>
}/>
{/* < Route exact path="/business"       element= {  <News ChangeProgress={setProgress} apiKey={apiKey} pageSize={12} countrycode='us' category="business"        key="business" />}/> */}
          </Routes>
          </BrowserRouter>
 


      
  
    );
}

export default App;
