import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Pingcard from './pingcard.jsx';
import Scraperui from './scraperui.jsx';
export default function App() {
  

  return (
    <>
    
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/scraperui' element={<Scraperui/>}/>
           <Route path='/pingcard' element={<Pingcard/>}/>

        </Routes>
      
    </>
  );
}
