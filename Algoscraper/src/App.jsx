import { Route, Routes } from 'react-router-dom';
import Addscenario from './addscenario.jsx';
import Home from './Home.jsx';
import Pingcard from './pingcard.jsx';
import Recording from './recording.jsx';
import Scraperui from './scraperui.jsx';
import Scenariolist from './scenariolist.jsx';
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

        </Routes>
      
    </>
  );
}
