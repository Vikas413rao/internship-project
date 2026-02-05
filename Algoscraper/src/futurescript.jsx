import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchIcon from '@mui/icons-material/Search';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, DialogContentText, Icon, IconButton, InputAdornment, LinearProgress, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import NativeSelect from '@mui/material/NativeSelect';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Image from '../src/assets/image.png';
function UserSteps({setScreen}){
    const [openStartdialog,setOpenstartdialog] = useState(false);
        const [openSessiondialog,setOpensessiondialog] = useState(false);
        const [open,setOpen] = useState(false);
        const navigate=useNavigate();
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
    return(
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
          {/*file drag and drop */}
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Box sx={{display:'flex',alignItems:'center',bgcolor:'grey.200',width:360,px:2,ml:1,mt:1,py:1,borderRadius:'5px'}} onClick={()=>setScreen('empty')}><Typography sx={{color:'grey.600'}}>Drag & Drop your file(S)</Typography>
            <Icon sx={{ml:20,color:'#2F8BCC'}}><CreateNewFolderIcon /></Icon>
            </Box>
            <Button variant='outlined' sx={{color:'#2F8BCC',fontSize:11,width:120,height:40,mt:1,fontWeight:600}}onClick={()=>setScreen('empty')}>Browse files</Button>
            </Box>
            {/*User Steps */}
            <Box sx={{bgcolor:'grey.200',width:532,height:385,ml:0.2,mt:0.5}}>
                  <Typography sx={{textDecoration:'underline',fontSize:14,pl:3,pt:2}}>User Steps:</Typography>
                                  <ul style={{paddingLeft:45,margin:0}}>
                                  <li><Typography sx={{fontSize:12}}><b>Drag and drop your feature file,or click Browse to select and upload it.</b></Typography></li>
                                  <li><Typography sx={{fontSize:12}}>Click <b>Scrape UI</b> to extract all UI elements from screen.</Typography></li>
                                  <li><Typography sx={{fontSize:12}}>After the elements are captured , click <b>"Auto-Mapper"</b> to link them with the feature steps.</Typography></li>
                                  <li><Typography sx={{ fontSize: 12, lineHeight: 1.6 }}>
                    Finally, click{" "}
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
          
      </Box>

    </div>
    );
}

function EmptyScraper ({setScreen}) {
     const [openStartdialog,setOpenstartdialog] = useState(false);
              const [openSessiondialog,setOpensessiondialog] = useState(false);
              const [open,setOpen] = useState(false);
              const navigate=useNavigate();
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
    return(
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
      <IconButton onClick={()=>setScreen('steps')} sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white'}}><ArrowBackIosIcon/></IconButton>
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>Page Name</Typography>
                <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:300,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
              </Box>
              <Button variant='contained' sx={{px:2,ml:1,mt:1}} onClick={()=>setScreen('table')} >Scrape Ui</Button>
              </Box>
              {/*file name */}
              <Box sx={{bgcolor:'grey.300',width:110,height:25,mt:1,ml:1,borderRadius:'5px',display:'flex',alignItems:'center',gap:1}}>
                <InsertDriveFileOutlinedIcon fontSize='small' /><Typography sx={{color:'#2F8BCC',fontSize:15}}>File.txt</Typography><CloseIcon sx={{color:'black'}} fontSize='small'/>
              </Box>
              <Box sx={{bgcolor:'grey.100',ml:0.4,mr:0.4,height:357,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <img src={Image}/>
                <Typography sx={{fontSize:13}}>Scrape the Relevant pages of X-Path</Typography>
              </Box>
          </Box>
          </Box>
    </div>
    )
}
const AllColumns = [
    {key:'contentName',label:'Content Name',default:true},
    {key:'controlType',label:'Control Type',default:true},
    {key:'Xpath',label:'Xpath',default:true},
    {key:'pageName',label:'Page Name', default:false},
    {key:'controlValue',label:'Control Value',default:false},
    {key:'appUrl',label:'App URL',default:false },
    {key:'featureName',label:'Feature Name',default:false},
    {key:'nodeName',label:'Node Name',default:false},
  ];
function TableScreen ({setScreen ,setLoading ,setProgress}){
const [openStartdialog,setOpenstartdialog] = useState(false);
              const [openSessiondialog,setOpensessiondialog] = useState(false);
              const [open,setOpen] = useState(false);
              const navigate=useNavigate();
              const handleCloseclick = () =>{
                setOpen(true);
              }
              const handleClose = () =>{
                setOpen(false);
              }
              const handleConfirm = () =>{
                setOpen(false);
                navigate('/')
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

              const [opendialog,setopendialog]=useState(false);
              const handleclickdialog = () =>{
  setopendialog(true);
}
const handleclosedialog =() =>{
  setopendialog(false);
}
const [opencheck,setopencheck] = useState(false);
const [openedit,setopenedit]= useState(false);
const[selectedColumns,setselectedcolumns]= useState(AllColumns.filter(c=>c.default).map(c=>c.key));
  const[draftColumns,setdraftColumns]=useState(selectedColumns);
  const handleColumns =(key)=>{
    setdraftColumns(prev =>prev.includes(key) ? prev.filter(c=>c !== key):[...prev,key]);
  };
  const handleclickcheck = ()=>{
    setopencheck(true);
    setdraftColumns(selectedColumns);
    
  }
  const handleclosecheck = () =>{
    setdraftColumns(selectedColumns);
    setopencheck(false);
  }

 


    return(
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
      <IconButton onClick={()=>setScreen('steps')} sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white'}}><ArrowBackIosIcon/></IconButton>
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>Page Name</Typography>
                <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:300,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
              </Box>
              <Button variant='contained' sx={{px:2,ml:1,mt:1}} >Scrape Ui</Button>
              </Box>
              {/*file name */}
              <Box sx={{bgcolor:'grey.300',width:110,height:25,mt:1,ml:1,borderRadius:'5px',display:'flex',alignItems:'center',gap:1}}>
                <InsertDriveFileOutlinedIcon fontSize='small' /><Typography sx={{color:'#2F8BCC',fontSize:15}}>File.txt</Typography><CloseIcon sx={{color:'black'}} fontSize='small'/>
              </Box>
              {/*table */}
              <Box  sx={{display:'flex',flexDirection:'column',position:'relative',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5,overflow:'hidden'}}>
      <Box sx={{display:'flex',alignItems:'center'}}>
          <TextField id="outlined-basic" placeholder="Search"  variant="outlined" sx={{width:250,pt:1,ml:2}}InputProps={{disableUnderline:true,startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>),sx:{px:1,fontSize:12,height:30,bgcolor:'white'}}} />
            <Box>
            <Button size="small" sx={{bgcolor:'white',ml:5,right:-23,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleclickdialog}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Button>
            <Dialog open={opendialog} >
            <DialogTitle sx={{color:'black',alignItems:'center',display:'flex', gap:2}}>Reset Record</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you really want to reset these records
                <FormGroup>
                 <FormControlLabel control={<Checkbox defaultChecked />} label="Save Data" />
              </FormGroup>
              </DialogContentText>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleclosedialog} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info' onClick={()=>{setopendialog(false);setScreen('empty')}} sx={{right:20}}>Confirm</Button>
            </DialogActions>
          </Dialog>
            </Box>
            <Button size="small" sx={{bgcolor:'#2F8BCC',right:-28,minWidth:0,width:100,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',fontSize:11,color:'white'}} onClick={()=>{setProgress(0);setLoading(true);}}>Auto Mapper</Button>
            <Button size="small" sx={{bgcolor:'white',ml:4,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleclickcheck} ><MoreVertIcon sx={{color:'#2F8BCC'}}/></Button>
           <Dialog open={opencheck} onClose={handleclosecheck} >
        <DialogTitle>Customize Table  <IconButton onClick={handleclosecheck} sx={{right:-130,color:'red'}}>
      <CloseIcon />
    </IconButton></DialogTitle>
        <DialogContent>
           <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr",columnGap: 3,rowGap: 1,mt: 1,}}>
    {AllColumns.map(col => (
      <FormControlLabel key={col.label} control={<Checkbox checked={draftColumns.includes(col.key)} onChange={()=> handleColumns(col.key)}/>} label={col.label} />
    ))}
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclosecheck} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info'  sx={{right:10}} onClick={()=>{setselectedcolumns(draftColumns);setopencheck(false);navigate('/addscenario')}}>Apply Changes</Button>
        </DialogActions>
      </Dialog>
            </Box>
          <Box sx={{flexGrow:1,mt:1,ml:2,minHeight:0,overflowY:'auto',overflowX: "hidden","&::-webkit-scrollbar": {display: "none",},scrollbarWidth:"none"}}>
          <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX: "auto"}}>
      <Table size='small' sx={{ width: "100%", tableLayout: "fixed"}} aria-label="a dense table" >
        <TableHead sx={{bgcolor:'#2F8BCC'}}>
          <TableRow>
          {AllColumns.filter(col=> selectedColumns.includes(col.key)).map(col => (
            <TableCell sx={{color:'white',fontSize:12,width: 70}}>{col.label}</TableCell>
          ))}
            <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {AllColumns.filter(col => selectedColumns.includes(col.key)).map(col => (
              <TableCell sx={{fontSize:12}}>{col.key === 'contentName' && 'Name'}
              
              {col.key === 'controlType' && (
               <FormControl width={20}>
       
        <NativeSelect
        >
          <option value={10}>TextBox</option>
          <option value={20}>DropDown</option>
        </NativeSelect>
      </FormControl>)}
      {col.key === 'Xpath' && (
             <Link href="#" variant="body2" sx={{fontSize:12}}>
  XPath Link
</Link>
 )}
  {!['contentName','controlType','Xpath'].includes(col.key) && '-'}
</TableCell>
      ))}

              <TableCell sx={{fontSize:12}}><IconButton ><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
    
    <Box sx={{flexShrink:0,px:2,py:1,mt:19,display:'flex',alignItems:'center',gap:2,borderTop:'1px solid rgba(0,0,0,0.25)',backgroundColor:'#f5f5f5'}}>
    <Box sx={{display:'flex',alignItems:'center',gap:2}}>
    <Button variant='contained' size='small' sx={{top:3}} >+ Row</Button>
    <Typography sx={{fontSize:12,color:'red'}}>Error will be displayed here</Typography>
   
    </Box>
    <Box sx={{flexGrow:1}}>
     <Pagination count={10} shape="rounded" page={1} siblingCount={0} boundaryCount={1} showFirstButton showLastButton  sx={{"&.Mui-selected":{backgroundColor:'#2F8BCC',color:'#fff'},"&.MuiPaginationItem-root":{fontSize:11,minWidth:17,height:22}}} size='small'/>
         </Box>
         </Box> 
     </Box>
          </Box>
          </Box>
    </div>
)
}
const getColor = (value) =>{
  if(value < 40) return '#E53935';
  if (value <90) return '#FB8C00';
  return '#2E7B32';
}

function Automapper({setScreen ,setLoading ,setProgress}){
  const [openStartdialog,setOpenstartdialog] = useState(false);
              const [openSessiondialog,setOpensessiondialog] = useState(false);
              const [open,setOpen] = useState(false);
              const navigate=useNavigate();
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

              const [tasks,setTasks] = useState([{id:1,name:'Scenario_file_Name',progress:0},
                {id:2,name:'Scenario_file_Name' , progress:0},
                {id:3,name:'Scenario_file_Name',progress:0}
              ]);

                useEffect(() => {
  setLoading(true);

  const interval = setInterval(() => {
    setTasks(prev =>
      prev.map(task => {
        if (task.progress >= 100) return task;

        const increment = Math.floor(Math.random() * 15);
        return {
          ...task,
          progress: Math.min(100, task.progress + increment),
        };
      })
    );
  }, 700);

  const stop = setTimeout(() => {
    clearInterval(interval);
    setLoading(false);
  }, 6000);

  return () => {
    clearInterval(interval);
    clearTimeout(stop);
  };
}, []);
return(
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
      <Button size='small' onClick={()=>setScreen('table')} sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white',minWidth:0}}><ArrowBackIosIcon/></Button>
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>Page Name</Typography>
                <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:400,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
              </Box>
              </Box>
              {/*scenario */}
              <Box sx={{bgcolor:'#2F8BCC',height:20,p:1,ml:1,mr:1,mt:1,borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}><Typography sx={{color:'white',fontSize:'13px'}}>Scenario Name</Typography>
              {tasks.map((task) =>(
              <Box sx={{bgcolor:'white',boxShadow:'  2px 1px 3px rgba(0,0,0,0.2)',height:40,p:1,borderRadius:'5px',mt:2,display:'flex',justifyContent:'space-between'}}>
                <Typography sx={{fontSize:13,pl:1,color:'text.secondary'}}>{task.name}</Typography>
                <Box sx={{right:0}}>
                <Typography fontSize={12} color='text.secondary'><b style={{color:getColor(task.progress)}}>{task.progress}%</b>{task.progress === 100 ? 'Completed' : 'Mapping...'}</Typography>
                
                <LinearProgress variant='determinate' value={task.progress} sx={{height:6,borderRadius:5,mt:0.8,backgroundColor:'#f1f1f1','& .MuiLinearProgress-bar':{backgroundColor:getColor(task.progress),borderRadius:5}}}/>
              
              </Box>
              <Button size='small' sx={{minWidth:0}} onClick={()=>setScreen('scenario')}>
              <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
              <NorthEastOutlinedIcon sx={{ position: "absolute",bottom:16,right: 1,fontSize: 15,backgroundColor:'transparent',borderRadius: "50%",color:'#2F8BCC' }}/>
              </Button>
              </Box>
             
              ))}
               
              </Box>
          </Box>
          </Box>
  </div>
)
}
function Scenariolist({setScreen}){
 const [openStartdialog,setOpenstartdialog] = useState(false);
              const [openSessiondialog,setOpensessiondialog] = useState(false);
              const [open,setOpen] = useState(false);
              const navigate=useNavigate();
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
              const scenarios = [
  "Scenario_Steps 1",
  "Scenario_Steps 1",
  "Scenario_Steps 1",
];
const [opendetails,setOpendetails] = useState(false);
const handledetails =() =>{
  setOpendetails(true);
}
const handleClosedetails = () =>{
  setOpendetails(false);
}
const handleConfirmdetails =() =>{
  setOpendetails(false);
}
              return(
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
      <Button size='small' onClick={()=>setScreen('table')} sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white',minWidth:0}}><ArrowBackIosIcon/></Button>
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>Page Name</Typography>
                <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:400,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
              </Box>
              </Box>
               <Box sx={{bgcolor:'#2F8BCC',height:20,p:1,ml:1,mr:1,mt:1,borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',alignItems:'center'}}>
                <Button size='small' sx={{minWidth:0}} onClick={()=>setScreen('mapper')}><ArrowBackIosIcon sx={{color:'white'}}/></Button>
                <Typography sx={{color:'white',fontSize:'13px'}}>Scenario Name</Typography>
                
               </Box>
               {scenarios.map((label,index) =>(
               <Box key={index} sx={{bgcolor:'white',boxShadow:'  2px 1px 3px rgba(0,0,0,0.2)',height:20,p:1,borderRadius:'5px',mt:2,display:'flex',justifyContent:'space-between',ml:1,mr:1}}>
                 <FormControlLabel value={label} control={<Radio  size='small'/>} label={label} sx={{'& .MuiFormControlLabel-label':{color:'red',fontSize:'13px'}}}/> 
                <Button onClick={handledetails}>
                   <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
                   <EditOutlinedIcon sx={{ position: "absolute",bottom:5,right: 20,fontSize: 15,backgroundColor:'transparent',borderRadius: "50%",color:'#2F8BCC' }}/>
                </Button>
                 <Dialog open={opendetails} onClose={handleClosedetails} >
            <DialogTitle sx={{alignItems:'center',display:'flex', gap:2}}>Steps Details</DialogTitle>
            <DialogContent sx={{width:400}}>
                  <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-native-select">Control Type</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Control Type">
          
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="grouped-select-label" htmlFor="grouped-select">
          Control Action
        </InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          label="Control Type"
          SelectDisplayProps={{
            'aria-labelledby': 'grouped-select-label',
          }}
        >
         
          
        </Select>
      </FormControl>
         <Stack direction='row' spacing={2} mt={2}>      
      <TextField
        id="outlined-controlled"
        defaultValue='Control Value'
      />
      <TextField
        id="outlined-controlled"
        defaultValue="Page Name"
      />
      
</Stack> 
<Box sx={{mt:2}}>
<TextField fullWidth label="Control Name" id="fullWidth"  /></Box>
<Box sx={{mt:2}}>
<TextField fullWidth label="Xpath" id="fullWidth" /></Box>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClosedetails} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info' onClick={handleConfirmdetails} sx={{right:20}}>Confirm</Button>
            </DialogActions>

          </Dialog>
                </Box>
                  ))}
                </Box>
                </Box>
                </div>
              )

}
export default function Futurescript() {
  const [screen,setScreen] = useState('steps')
  const [loading,setLoading] = useState(false);
  const [progress,setProgress] = useState(0);
  
  useEffect (()=> {
    if(!loading)return;
    const timer=setInterval(()=>{
      setProgress(prev=>{
        if(prev >=100){
          clearInterval(timer);
          setLoading(false);
          setScreen('mapper');
          return 100;
        }
        return prev +10;
      });
    },300);
    return () =>clearInterval(timer);
  }, [loading]);
    return (
        <>
        {(loading && (screen === 'table' || screen === 'mapper')) && (
          <Box sx={{position:'fixed',inset:0,backgroundColor:'rgba(0,0,0,0.45)',display:'flex' ,alignItems:'center' ,justifyContent:'center',zIndex:2000}}>
            <Box sx={{textAlign:'center',color:'white'}}>
              <CircularProgress variant='determinate' value={progress} size={70} thickness={4} sx={{color:'#fff'}} />
              <Typography mt={2} fontSize={16} fontWeight={600} > Please Wait</Typography>
              <Typography>Don&apos;t switch the tab while Mapping is in progress</Typography>
            </Box>
          </Box>
        )}
       {screen === "steps" && (<UserSteps setScreen={setScreen} />)}
       {screen === 'empty' && (<EmptyScraper setScreen={setScreen}/>)}
       {screen === 'table' && (<TableScreen setScreen={setScreen} setLoading={setLoading} setProgress={setProgress}/>)}
       {screen === 'mapper' && (<Automapper setScreen={setScreen} setLoading={setLoading} setProgress={setProgress}/>)}
       {screen === 'scenario' && (<Scenariolist setScreen={setScreen}/>)} 
       </>
  )
}
