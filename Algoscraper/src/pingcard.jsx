import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, DialogContentText, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Pingcard() {
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
                  <IconButton component={RouterLink} to='/' sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white'}}><ArrowBackIosIcon/></IconButton>
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
                </Box>
                </Box>
    </div>
  )
}
