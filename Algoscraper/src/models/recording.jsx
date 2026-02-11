import { DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navcomponent from '../component/navcomponent';
import Addscenario from '../views/addscenario';

export default function Recording() {
  const [openStartdialog,setOpenstartdialog] = useState(false);
   const [openSessiondialog,setOpensessiondialog] = useState(false);
      const navigate = useNavigate(); 
      const [open,Setopen]=useState(false);
    const[Open,setopen]=useState(false);
    const handleOpenStartdialog = () =>{setOpenstartdialog(true);}
    const handleCloseall = ()=>{setOpensessiondialog(false);setOpenstartdialog(false);}
    const handleStartsession = () =>{setOpenstartdialog(true);setOpensessiondialog(true);}
    const handleClearSession = () => {setOpensessiondialog(false);setopenStartdialog(true);}
    const handleClose = () =>{setopen(false);}
    const handleConfirm = ()=>{setopen(false); navigate('/')}
   const handleCloseclick = () =>{setopen(true);}
   const handlerecord = () =>{Setopen(true);}
   const handleCloserecord=()=>{Setopen(false);}
  

       const pagelist =[
      {
        value :'Page List1',
        label :'Page List'
      }
    ];

    const [nextclick,setnextclick]=useState(false);
    const handlenext = () =>{
        Setopen(false);
        setnextclick(true);
        navigate('/addscenario')
    }
    return (
    <div>
            <Box component="section"  sx={{ border: '1px solid #2F8BCC', height: '480px',width:'535px',position:'relative'}}>
       <Navcomponent/>
     {!nextclick ? (
    <Box>
      
    <Box sx={{display:'flex',alignItems:'center',ml:1}}>
      
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',fontSize:13}}>Page Name</Typography>
          <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:270,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:38}}} />
        </Box>
        <Button variant='contained' sx={{ml:1,mt:1,width:145,fontSize:12,height:40}} onClick={handlerecord}>Record Action</Button>
         <Dialog open={open} onClose={handleCloserecord} sx={{height:480,width:450}}  disableScrollLock scroll='none'>
        <DialogTitle>Record Scenario</DialogTitle>
        <DialogContent>
          <FormGroup sx={{p:2}}>
            <TextField id="outlined-basic" placeholder='Page Name' variant="outlined" required  InputProps={{sx:{fontSize:13,height:40}}} /><br></br>
            <TextField id="outlined-basic" placeholder='Enter Scenario Name' variant="outlined" InputProps={{sx:{fontSize:13,height:40}}}/><br></br>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloserecord} sx={{left:-100}}>Cancel</Button>
          <Button variant="contained" sx={{width:165,fontSize:13}} onClick={handlenext}>
           Start Recording
          </Button>
        </DialogActions>
      </Dialog>
        </Box>
        <Box  sx={{position:'absolute',bgcolor:'grey.200',height:385,width:532,ml:0.2,mt:0.5,overflow:'hidden',backgroundImage:'url(/assets/OIP.jpg)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'220px'}}>
                  <Typography sx={{textDecoration:'underline',fontSize:14,pl:3,pt:2}}>User Steps:</Typography>
                  <ul style={{paddingLeft:45,margin:0}}>
                  <li><Typography sx={{fontSize:12}}>Enter Scenario details. </Typography></li>
                  <li><Typography sx={{fontSize:12}}>To record the action as you perform the actions, click <b>start recording</b></Typography></li>
                  <li><Typography sx={{fontSize:12}}>To stop the recording, click <b>Stop</b></Typography></li>
                  <li><Typography sx={{ fontSize: 12, lineHeight: 1.6 }}>
    Click <strong>Download</strong> to export the recorded steps as CSV and BDD files,
    or click{" "}
    <Typography component="span" sx={{ fontWeight: 600,fontSize:14 }}>
      algo
    </Typography>
    <Typography
      component="span"
      sx={{
        fontSize:14,
        fontWeight: 600,
        color: "primary.main",
        cursor: "pointer",
      }}
    >
      QA
    </Typography>{" "}
    to create a new project in the algoQA platform.
  </Typography></li>
                  <li><Typography sx={{fontSize:12}}><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Record Action.</Typography> </li></ul>
                
            </Box>
       
            </Box>
            ):(<Addscenario />)} 
    </Box>
    </div>
  )
}
