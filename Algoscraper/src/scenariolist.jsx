import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, DialogContentText, IconButton, Stack } from '@mui/material';
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
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
export default function Scenariolist() {
    const navigate=useNavigate();
    const [openStartdialog,setOpenstartdialog] = useState(false);
          const [openSessiondialog,setOpensessiondialog] = useState(false);
          const [open,setOpen] = useState(false);
          
          const handleCloseclick = () =>{
            setOpen(true);
          }
          const handleClose = () =>{
            setOpen(false);
          }
          const handleConfirm = () =>{
            setOpen(false);
          }
          const pagelist =[
            {
              value :'Page List1',
              label :'Page List'
            }
          ];
          
          const handleOpenStartdialog = () =>{setOpenstartdialog(true)};
          const handleStartsession = () =>{
            setOpenstartdialog(false);
            setOpensessiondialog(true);
          }
          const handleCloseall = () => {
            setOpenstartdialog(false);
            setOpensessiondialog(false);
          }
          const handleClearSession = () =>{
            setOpensessiondialog(false);
            setOpenstartdialog(true);
          }

          const [openrecord,setopenrecord] = useState(false);
          const handlerecord = () =>{
            setopenrecord(true);
          }
          const handleCloserecord = () =>{
            setopenrecord(false);
          }
          const handlenext = () =>{
            setopenrecord(false);
            navigate("/addscenario")
          }
          const handleeditScenario = () =>{
           localStorage.setItem('openEditdialog','true');
            navigate('/addscenario');
              
          }
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
            <Box component="section"  sx={{ border: '1px solid #2F8BCC', height: '480px',width:'535px',position:'relative'}}>
              <Box component="section" sx={{display:'flex'}} >
               <Box component="section" sx={{ p:2,bgcolor:'#2F8BCC' ,color:'white',display:'flex',alignItems:'center',gap:'3px',height:'7px',width:'230px',borderTopRightRadius:'40px'}}>
            <IconButton component={RouterLink} to='/recording' sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white'}}><ArrowBackIosIcon/></IconButton>
            <Typography variant="subtitle1" sx={{fontSize:'16px',fontWeight:'600',color:'white'}}> 
             algoScraper
            </Typography>
            <Typography variant="caption" sx={{fontSize:'9px',color:'white'}} >
             Powered by algoShack
            </Typography>
             
          </Box>
          
      
          <Box component="section" sx={{ p:2, border: '1px solid #2F8BCC',borderRadius:'30px',height:'1px',display:'flex',alignItems:'center',width:'80px',marginTop:'5px',justifyContent:'left',right:-10}}>
            
            <Link component="button" onClick={() => chrome.tabs.create ({url:"https://algoshack.net/users/login/"})} underline="none" sx={{display:'flex',alignItems:'center'}}><LaunchIcon sx={{color:'#2F8BCC',height:'17px'}} /> 
            <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 600,fontSize: 16,color: "#6b6b6b",lineHeight: 1}} >
              algo
            </Typography>
            <Typography sx={{fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
              Q
            </Typography>
            <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
              A
            </Typography>
            <Typography sx={{fontFamily: "Poppins, sans-serif",fontSize: 9,color: "#6b6b6b",alignSelf: "flex-start",ml: "2px",}}>
              ®
            </Typography></Link>
           
          </Box>
         
          <Box sx={{ position: "relative", width: 24, height: 15,marginTop:'10px',gap:'5px',marginLeft:'10px' }}>
            <IconButton onClick={handleOpenStartdialog} size="small" sx={{right:10,top:-4,position:'absolute',color:'black',width:'0px',"&:hover":{backgroundColor:'transparent',boxShadow:'none'}}}>
        <TabUnselectedIcon sx={{ fontSize: 19,bgcolor:'white' }} />
        <EditOutlinedIcon sx={{ position: "absolute",bottom: 6,right: -5,fontSize: 18,backgroundColor:'transparent',borderRadius: "50%", }} />
      </IconButton>
       <Dialog open={openStartdialog} onClose={handleCloseall} >
              <DialogTitle sx={{pr:5}}>
                Create Your Feature
                <IconButton onClick={handleCloseall} sx={{position:'absolute',right:8,top:8}}><CloseIcon/></IconButton>
              </DialogTitle>
              <DialogContent>
                <Stack direction="row" spacing={2} mt={2}>
                  <Button variant='outlined' color='success' onClick={handleStartsession}>Start Section</Button>
                  <Button variant='outlined' color='info'>Clear Section</Button>
                </Stack>
              </DialogContent>
            </Dialog>
            <Dialog open={openSessiondialog}>
              <DialogTitle sx={{pr:5}}>Create Your Feature</DialogTitle>
              <DialogContent>
                <Stack direction='row' spacing={2} mt={2}>
                  <Button color='error' variant='outlined' onClick={handleClearSession}>Stop Section</Button>
                  <Button color='info' variant='outlined' onClick={handleClearSession}>Clear Section</Button>
                </Stack>
                <Stack>
                   <TextField
                id="filled-select-currency-native"
                select
                label='Page List'
                defaultValue="Page List"
                slotProps={{
                  select: {native: true,
                  },
                }}
                sx={{pt:2}}
                
                variant="filled"
              >
                {pagelist.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
               <TextField
                id="filled-select-currency-native"
                select
                label="Feature List"
                defaultValue="Page List"
                slotProps={{
                  select: {native: true,
                  },
                }}
                sx={{pt:2}}
                variant="filled"
              >
                {pagelist.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
                </Stack>
              </DialogContent>
              <DialogActions><Button variant='contained'>Proceed</Button></DialogActions>
            </Dialog>
      </Box>
      <Box component="section" sx={{bgcolor: 'grey.300',display:'flex',alignItems:'center',height:'40px',width:'122px',right:-2}}>
            <Button  sx={{minWidth: "40px", width: "24px",height: "24px",p: 0,color: "#000"}}><MinimizeIcon sx={{ fontSize: 20 }} /></Button>
            <Button sx={{minWidth: "40px",width: "24px",height: "24px",p: 0,color: "#000"}}><CropFreeIcon sx={{ fontSize: 20 }} /></Button>
            <Button  sx={{minWidth: "40px",width: "24px",height: "24px",p: 0,color: "#000" }} onClick={handleCloseclick}><CloseIcon sx={{ fontSize: 20 }} /></Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{color:'red',alignItems:'center',display:'flex', gap:2}}><WarningAmberIcon/>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{color:'black',textAlign:'center'}}>
                Are You Sure?
              </DialogContentText>
              <DialogContentText>
                You will not be able to recover Data.
              </DialogContentText>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClose} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info' onClick={handleConfirm} sx={{right:20}}>Confirm</Button>
            </DialogActions>

          </Dialog>
          </Box>
          </Box>
                {/*record scenario */}
          <Box sx={{display:'flex',alignItems:'center',ml:1}}>
      
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',fontSize:13}}>Page Name</Typography>
          <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:270,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:38}}} />
        </Box>
        <Button variant='contained' sx={{ml:2,mt:1,width:150,fontSize:12,height:40}} onClick={handlerecord}>Record Action</Button>
         <Dialog open={openrecord} onClose={handleCloserecord} sx={{height:480,width:450}}  disableScrollLock scroll='none'>
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

            {/*scenario name */}
            <Box sx={{bgcolor:'#D9EDFD',height:25, width:520,ml:1,mr:1,pt:1,mt:0.5,borderRadius:'5px',display:'flex',alignItems:'center'}}>
            <Typography sx={{fontSize:12,p:2}}>Scenarios_List</Typography>
            <Button size='small' sx={{color:'black',minWidth:0,ml:40}}><SaveAltIcon sx={{fontSize:20}}/></Button>
            <Button disabled size='small' sx={{minWidth:0,p:2}}><DeleteOutlineOutlinedIcon sx={{fontSize:20}} /></Button>
            </Box>
            {/*Scenario list */}  
          <Box>
            <Box  sx={{display:'flex',alignItems:'center',justifyContent:'space-between',border:'1px solid #E0E0E0',borderRadius:'6px',px:1,py:0.5,mb:1,bgcolor:'#fff',width:500,ml:1,mt:1}}>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
                <Button size='small' sx={{minWidth:0}}  onClick={handleeditScenario}><DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></Button>
                <Button size='small' sx={{minWidth:0}}><DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></Button>
                </Box>
                
                </Box>
                 <Box  sx={{display:'flex',alignItems:'center',justifyContent:'space-between',border:'1px solid #E0E0E0',borderRadius:'6px',px:1,py:0.5,mb:1,bgcolor:'#fff',width:500,ml:1,mt:1}}>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
                <Button size='small' sx={{minWidth:0}} onClick={handleeditScenario}><DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></Button>
                <Button size='small' sx={{minWidth:0}}><DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></Button>
                </Box>
                
                </Box>
                
          </Box>
          </Box> 
          
      </Box>
    
    </div>
  )
}
