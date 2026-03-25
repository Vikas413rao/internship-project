import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from '../theme.js';
import './App.css';
import Analyze from './models/Ping card/analyze.jsx';
import Pingcard from './models/Ping card/pingcard.jsx';
import Addscenario from './models/recording/addscenario.jsx';
import Recording from './models/recording/recording.jsx';
import Scenariolist from './models/recording/scenariolist.jsx';
import Scraperui from './models/Scarper Ui/scraperui.jsx';
import Automapper from './models/Script/automapper.jsx';
import EmptyScraper from './models/Script/emptyscraper.jsx';
import Futurescript from './models/Script/futurescript.jsx';
import Scenariofile from './models/Script/scenariofile.jsx';
import TableScreen from './models/Script/Tablepage.jsx';
import Home from './views/Home.jsx';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  const mode = useSelector((state) =>state.feature.themMode);
  const theme=mode=== 'light' ? lightTheme : darkTheme;

  return (
    <>
    <ThemeProvider theme={theme} >
      <CssBaseline />
        <Box
    sx={{
      bgcolor: "background.default",
      minHeight: "100vh",
      color: "text.primary",
      fontFamily: "inherit" 
    }}
  >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/scraperui' element={<Scraperui/>}/>
           <Route path='/pingcard' element={<Pingcard/>}/>
          <Route path='/recording' element={<Recording/>}/>
          <Route path="/addscenario" element={<Addscenario />} />
          <Route path='/scenariolist' element={<Scenariolist />} />
          <Route path='/futurescript' element={<Futurescript/>}/>
          <Route path='/analyze' element={<Analyze/>}/>
          <Route path='/emptyscraper' element={<EmptyScraper/>}/>
          <Route path='/tablescreen' element={<TableScreen/>}/>
          <Route path='/automapper' element={<Automapper/>}/>
          <Route path='/scenariofile' element={<Scenariofile/>}/>
        
        </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}
