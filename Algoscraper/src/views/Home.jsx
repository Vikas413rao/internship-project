import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navcomponent from '../component/navcomponent.jsx';
import FeatureCard from "./FeatureCard.jsx";
import PingCard from './ping.jsx';
import RecordCard from './record.jsx';
import ScriptCard from './script.jsx';
import { styled } from '@mui/material/styles';

const Container= styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'

})
export default function Home() {
  
    return (
    <div>
          <Box
            sx={{
              m:0,
              p:0,
              boxSizing:'border-box',
              width: 530,        
              minHeight: 380,
            }}
          >
            <Container  sx={{ border: '1px solid #2F8BCC', height: '480px',width:'535px',position:'relative'}}>
              <Navcomponent/>
          <Box sx={{display:'flex',gap:2}}>
          <FeatureCard title="Scrape UI" description="
          Scrape UI is Powerful feature that captures all UI elements on a webpage
          along with their locators.It provide an interactive interface for selecting and extracting elements ,enabling seamless automation setup. This 
          capability is ideal for building and maintaing automated tests with speed and precision.
          " />
          <PingCard title="PingLink" description="
          Pinglink is a diagnostic feature that analyzes your application performance by
          scanning all its link.It tracks load times,respon times,and HTTP status codes to assess link responsiveness.
          This helps quickly identify slow,broken,or unresponsive links,ensuring a smoother user experience and faster debugging.
          "/>
          </Box>
          <Box sx={{display:'flex',gap:2,pt:1}}>
          <RecordCard title="Record Scenario" description="
          The Record Scenario feature logs real-time user interactions to
          track workflows for easy replications and analysis.It support test
          automation and allows exporting actions as a structured BDD file for validation and refinement.
          "/>
          <ScriptCard title="Feature File to Script Converter" description="
          The Feature File to Script Converter Turns Gherkin-style feature files into ready-tp-run automation
          scripts.Whether using existing or manually written files,it helps speed up testing and reduce manual work
          "/>
          </Box>
         <Typography color={'#2F8BCC'} fontSize={12} fontWeight={700} sx={{mt:'10px',ml:'380px'}}>Latest Version: 1.40</Typography>
          </Container>   
          
      </Box>
    </div>
  )
}
