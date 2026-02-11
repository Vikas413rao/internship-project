import Addscenario from './views/addscenario.jsx';
import { Route, Routes } from 'react-router-dom';
import Pingcard from './models/pingcard.jsx';
import Recording from './models/recording.jsx';
import Scraperui from './models/scraperui.jsx';
import Futurescript from './models/futurescript.jsx';
import Home from './views/home.jsx';
import './App.css';
import Scenariolist from './views/scenariolist.jsx';
export default function App() {
  

  return (
    <>
    
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/scraperui' element={<Scraperui/>}/>
           <Route path='/pingcard' element={<Pingcard/>}/>
          <Route path='/recording' element={<Recording/>}/>
          <Route path="/addscenario" element={<Addscenario />} />
          <Route path='/scenariolist' element={<Scenariolist />} />
          <Route path='/futurescript' element={<Futurescript/>}/>
        </Routes>
      
    </>
  );
}
