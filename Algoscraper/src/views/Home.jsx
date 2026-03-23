import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Navcomponent from '../component/navcomponent.jsx';
import PingCard from '../models/Ping card/ping.jsx';
import RecordCard from '../models/recording/record.jsx';
import FeatureCard from '../models/Scarper Ui/FeatureCard.jsx';
import ScriptCard from '../models/Script/script.jsx';
const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  border: `1px solid ${theme.palette.primary.main}`,

  width: isExpanded ? '600px' : '530px',
  height: isExpanded ? '600px' : '460px',

  position: 'relative',   // ✅ FIXED
  margin: 0,

  backgroundColor: theme.palette.background.paper,

  overflow: 'hidden',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
}));
export default function Home() {
  const [isExpanded,setisExpanded] =useState(false);
  useEffect(() => {
    const body = document.body;
    if (isExpanded) {
      body.style.width = '600px';
      body.style.height = '600px';
    } else {
      body.style.width = '530px';
      body.style.height = '460px';
    }
  }, [isExpanded]);

  const togglesize = () => {
    setisExpanded(prev => !prev);
  }
    return (
    
<Box sx={{ margin: 0, padding: 0 }}>
            <Container  isExpanded={isExpanded}>
              <Navcomponent togglesize={togglesize} isExpanded={isExpanded}/>
          <Box sx={{display:'flex',gap:2}}>
          <FeatureCard title="Scrape UI" description="
          Scrape UI is Powerful feature that captures all UI elements on a webpage
          along with their locators.It provide an interactive interface for selecting and extracting elements ,enabling seamless automation setup. This 
          capability is ideal for building and maintaing automated tests with speed and precision.
          " isExpanded={isExpanded}/>
          <PingCard title="PingLink" description="
          Pinglink is a diagnostic feature that analyzes your application performance by
          scanning all its link.It tracks load times,respon times,and HTTP status codes to assess link responsiveness.
          This helps quickly identify slow,broken,or unresponsive links,ensuring a smoother user experience and faster debugging.
          "isExpanded={isExpanded}/>
          </Box>
          <Box sx={{display:'flex',gap:2,pt:1}}>
          <RecordCard title="Record Scenario" description="
          The Record Scenario feature logs real-time user interactions to
          track workflows for easy replications and analysis.It support test
          automation and allows exporting actions as a structured BDD file for validation and refinement.
          " isExpanded={isExpanded}/>
          <ScriptCard title="Feature File to Script Converter" description="
          The Feature File to Script Converter Turns Gherkin-style feature files into ready-tp-run automation
          scripts.Whether using existing or manually written files,it helps speed up testing and reduce manual work.
          " isExpanded={isExpanded}/>
          </Box>
         <Typography 
  sx={{ 
    position: 'absolute',
    bottom: 5,
    right: 10,
    fontSize: 12,
    fontWeight: 700,
    color: '#2F8BCC'
  }}
>
  Latest Version: 1.40
</Typography>
          </Container>   
          
      </Box>
 
  )
}
