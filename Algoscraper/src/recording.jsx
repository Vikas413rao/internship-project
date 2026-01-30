import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import NativeSelect from '@mui/material/NativeSelect';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

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
   const [addScenarioOpen, setAddScenarioOpen] = useState(false);

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
    }
    const [opendialog,setopendialog]=useState(false);
      const [opencheck,setopencheck] = useState(false);
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
    
    const handleclickdialog = () =>{
      setopendialog(true);
    }
    const handleclosedialog =() =>{
      setopendialog(false);
    }
    return (
    <div>
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
      
      <Link component="button" onClick={() =>{if(window.chrome?.tabs){ chrome.tabs.create ({url:"https://algoshack.net/users/login/"});}}} underline="none" sx={{display:'flex',alignItems:'center'}}><LaunchIcon sx={{color:'#2F8BCC',height:'17px'}} /> 
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
            <Button variant='contained' color='success' onClick={handleStartsession}>Start Section</Button>
            <Button variant='contained' color='info'>Clear Section</Button>
          </Stack>
        </DialogContent>
      </Dialog>
      <Dialog open={openSessiondialog}>
        <DialogTitle sx={{pr:5}}>Create Your Feature</DialogTitle>
        <DialogContent>
          <Stack direction='row' spacing={2} mt={2}>
            <Button color='error' variant='contained' onClick={handleClearSession}>Stop Section</Button>
            <Button color='info' variant='contained' onClick={handleClearSession}>Clear Section</Button>
          </Stack>
          <Stack>
             <TextField
          id="filled-select-currency-native"
          select
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
      <Button  sx={{minWidth: "40px",width: "24px",height: "24px",p: 0,color: "#000" }}onClick={handleCloseclick}><CloseIcon sx={{ fontSize: 20 }} /></Button>
    <Dialog open={Open} onClose={handleClose}>
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
    {! nextclick ?(
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
        ):(<>
        <Box sx={{display:'flex',alignItems:'center',ml:1}}>
        
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',fontSize:13}}>Page Name</Typography>
          <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:270,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:38}}} />
        </Box>
        <Button variant='contained' sx={{ml:1,mt:1,width:145,fontSize:12,height:40}} onClick={()=>setAddScenarioOpen(true)}>+ Add Scenario</Button>
         <Dialog open={addScenarioOpen} onClose={()=>setAddScenarioOpen(false)} sx={{height:490,width:450}} disableScrollLock scroll='none' BackdropProps={{sx:{backgroundColor:'rgba(0,0,0,0.45)'},}}>
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
    </Typography>} />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setAddScenarioOpen(false)}} sx={{left:-100}}>Cancel</Button>
          <Button variant="contained" sx={{width:165,fontSize:13}} >
           Start Recording
          </Button>
        </DialogActions>
      </Dialog>
       </Box>
       <Box component='section' sx={{height:30,width:527,bgcolor:'whitesmoke',ml:0.3,mr:0.5,mt:0.5,display:'flex',alignItems:'center'}}>
                <Typography sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:180}} ><SettingsIcon sx={{color:'#2F8BCC'}}/></Button>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,left:185}} ><RadioButtonCheckedIcon sx={{color:'red'}}/></Button>
                <Button><CropSquareOutlinedIcon />
                <EditOutlinedIcon sx={{right:10}}/>
                </Button>
       </Box>
            <Box  sx={{display:'flex',flexDirection:'column',position:'relative',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5,overflow:'hidden'}}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                      <TextField id="outlined-basic" placeholder="Search"  variant="outlined" sx={{width:250,pt:1,ml:2}}InputProps={{disableUnderline:true,startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>),sx:{px:1,fontSize:12,height:30,bgcolor:'white'}}} />
                        <Box>
                        <Button size="small" sx={{bgcolor:'white',ml:15,right:-23,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleclickdialog}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Button>
                        <Dialog open={opendialog} >
                        <DialogTitle sx={{color:'black',alignItems:'center',display:'flex', gap:2}}>Reset Record</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Do you really want to reset these records
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions >
                          <Button onClick={handleclosedialog} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                          <Button variant='contained' color='info' onClick={()=>{setopendialog(false);setnextopen(false)}} sx={{right:20}}>Confirm</Button>
                        </DialogActions>
                      </Dialog>
                        </Box>
                        <Button size="small" sx={{bgcolor:'white',right:-28,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></Button>
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
                          <Button variant='contained' color='info'  sx={{right:10}} onClick={()=>{setselectedcolumns(draftColumns);setopencheck(false);}}>Apply Changes</Button>
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

       
        </>)}
    </Box>
    </div>
  )
}
