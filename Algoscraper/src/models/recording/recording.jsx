import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Custombutton from '../../component/custombutton';
import CustomDialog from '../../component/customdialog';
import Customusersteps, { AlgoQA } from '../../component/customusersteps';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import { closerecord, openrecord } from '../../featureSlice';

import CustomTextField from '../../component/Textfeild';
const stepsdata = [
  'Enter Scenario details.',
  <>To record the action as you perform the actions, click <b>start recording</b></>,
  <>To stop the recording, click <b>Stop</b></>,
  <>Click <strong>Download</strong> to export the recorded steps as CSV and BDD files,
    or<br/> click <AlgoQA /> to create a new project in the algoQA platform.</>,
  <><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Record Action.</>
];
const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  border: `1px solid ${theme.palette.primary.main}`,

  width: isExpanded ? '600px' : '530px',
  height: isExpanded ? '530px' : '430px',

  position: 'relative',  
  margin: 0,

  backgroundColor: theme.palette.background.paper,

  overflow: 'hidden',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
}));
const Userstep = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  backgroundColor: theme.palette.grey[200],
  width: '100%',
  flexGrow: 1,
  marginTop:6,
  minHeight: isExpanded ? 520 : 350,
  padding: isExpanded ? 8 : 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  boxSizing:'border-box'
}));

export default function Recording() {
      const navigate = useNavigate(); 
   const dispatch = useDispatch();
    const isExpanded = useSelector(state => state.feature.isExpanded);
     useEffect(() => {
        const body = document.body;
        if (isExpanded) {
          body.style.width = '600px';
          body.style.height = '530px';
        } else {
          body.style.width = '530px';
          body.style.height = '430px';
        }
      }, [isExpanded]);
    const openrecordstate = useSelector(state => state.feature.recordopen);
    const handleClose = () => {
  dispatch(closerecord());
};

const handleConfirm = () => {
  navigate('/addscenario');
  dispatch(closerecord());
};
    return (
    <div>
       <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
           <Container  isExpanded={isExpanded}>
       <Navcomponent/>

    <Box>
      
    <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
      <Pagename isExpanded={isExpanded}/>
      <Custombutton isExpanded={isExpanded} onClick={()=>dispatch(openrecord())} label='Record Action' width='120px' height='35px'/>
      <CustomDialog
  open={openrecordstate}
  onClose={handleClose}
  showHeader={true}
  showCloseIcon={true}
  title="Record Scenario"
  width={280}
  height={295}
  buttons={[
    {
      label: 'Cancel',
      onClick: handleClose,
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey',
        height: 28,

      }
    },
    {
      label: 'Start Recording',
      onClick: handleConfirm,
      width: '125px',
      height: 28
    }
  ]}
  contentSx={{
    justifyContent: 'space-between',
    px: 2,
    py: 1
  }}
>
  <FormGroup sx={{ gap: 0.5 }}>
    <CustomTextField
      placeholder="Page Name"
      InputProps={{ sx: { fontSize: 12, height: 25 } }}
       placeholderSize="12px"
    />

    <CustomTextField
      placeholder="Enter Scenario Name"
      InputProps={{ sx: { fontSize: 12 , height: 25 } }}
      placeholderSize="12px"
    />

    <CustomTextField
      placeholder="Enter Scenario Outline"
      multiline
      rows={3}
      height="80px"
      placeholderSize="12px"
      InputProps={{ sx: { fontSize: 13 } }}
    />

    <FormControlLabel
      control={<Checkbox />}
      label={
        <Typography fontSize={11}>
          Capture Screenshots while recording
        </Typography>
      }
      sx={{ mt: -1 }}
    />
  </FormGroup>
</CustomDialog>
       
        </Box>
        <Userstep  isExpanded={isExpanded}>
               <Customusersteps steps={stepsdata} isExpanded={isExpanded}/>   
                
            </Userstep>
       
            </Box>
    </Container>
    </Box>
    </div>
  )
}
