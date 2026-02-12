import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pingcard from './models/Ping card/pingcard.jsx';
import Addscenario from './models/recording/addscenario.jsx';
import Recording from './models/recording/recording.jsx';
import Scenariolist from './models/recording/scenariolist.jsx';
import Scraperui from './models/Scarper Ui/scraperui.jsx';
import Futurescript from './models/Script/futurescript.jsx';
import Home from './views/home.jsx';
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
