
import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Reciept from './Component/Reciept';
import ViewRecipe from './Component/ViewReciepe';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                 
                 
                <Route path="/" element={<Reciept />} />
               <Route path='/viewrecipe/:id' element={<ViewRecipe/>}/>
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
