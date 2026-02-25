import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Custombutton from '../../component/custombutton';
import Customdialogbox from '../../component/customdialogbox';
import Customusersteps, { AlgoQA } from '../../component/customusersteps';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import useCustomdialogbox from '../../hooks/customdialogboxhooks';
const stepsdata = [
  'Enter Scenario details.',
  <>To record the action as you perform the actions, click <b>start recording</b></>,
  <>To stop the recording, click <b>Stop</b></>,
  <>Click <strong>Download</strong> to export the recorded steps as CSV and BDD files,
    or<br/> click <AlgoQA /> to create a new project in the algoQA platform.</>,
  <><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Record Action.</>
];
const Container= styled(Box)(({theme})=>({
  border:`1px solid ${theme.palette.primary.main}`,
  height:'480px',
  width:'535px',
  position:'relative'

}))
const Userstep=styled(Box)(({theme})=>({
    position:'absolute',
    backgroundColor:theme.palette.grey[100],
    height:390,
    width:530,
    marginLeft:2,
    display:'flex',
    flexDirection:'column',
    
  }))
export default function Recording() {
      const navigate = useNavigate(); 
    const {open,handleOpen,handleClose,handleConfirm}=useCustomdialogbox();
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
            <Container>
       <Navcomponent/>

    <Box>
      
    <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
      <Pagename />
      <Custombutton onClick={handleOpen} label='Record Action' />
      <Customdialogbox open={open} onClose={handleClose} onConfirm={()=>{handleConfirm();navigate('/addscenario')}} title='Record Scenario' confirmlabel='Start Recording' canclelabel='Cancel'>
      <FormGroup sx={{p:2}}>
            <TextField id="outlined-basic" placeholder='Page Name' variant="outlined" required  InputProps={{sx:{fontSize:13,height:40}}} /><br></br>
            <TextField  placeholder='Enter Scenario Name' variant="outlined" InputProps={{sx:{fontSize:13,height:40}}}/><br></br>
             <TextField
          id="outlined-multiline-static"
          placeholder='Enter Scenario Outline'
          multiline
          rows={4}
          required
         InputProps={{sx:{fontSize:13}}}
        />
        <FormControlLabel control={<Checkbox />} label={<Typography fontSize="14px">
      Capture Screenshots while recording
    </Typography>}/>
          </FormGroup>
      </Customdialogbox>
       
        </Box>
        <Userstep  >
               <Customusersteps steps={stepsdata}/>   
                
            </Userstep>
       
            </Box>
    </Container>
    </Box>
    </div>
  )
}
