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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
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
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const AllColumns = [
    {key:'contentName',label:'Content Name',default:true},
    {key:'controlType',label:'Control Type',default:true},
    {key:'Xpath',label:'Xpath',default:true},
    {key:'pageName',label:'Page Name', default:true},
    {key:'controlValue',label:'Control Value',default:true},
    {key:'appUrl',label:'App URL',default:true },
    {key:'featureName',label:'Feature Name',default:false},
    {key:'nodeName',label:'Node Name',default:false},
  ];
export default function Addscenario() {
   const [openStartdialog,setOpenstartdialog] = useState(false);
   const [openSessiondialog,setOpensessiondialog] = useState(false);
      const navigate = useNavigate(); 
    const[Open,setopen]=useState(false);
    const handleOpenStartdialog = () =>{setOpenstartdialog(true);}
    const handleCloseall = ()=>{setOpensessiondialog(false);setOpenstartdialog(false);}
    const handleStartsession = () =>{setOpenstartdialog(true);setOpensessiondialog(true);}
    const handleClearSession = () => {setOpensessiondialog(false);setopenStartdialog(true);}
    const handleClose = () =>{setopen(false);}
    const handleConfirm = ()=>{setopen(false); navigate('/')}
   const handleCloseclick = () =>{setopen(true);}
   const [addScenarioOpen, setAddScenarioOpen] = useState(false);
    const pagelist =[
         {
           value :'Page List1',
           label :'Page List'
         }
       ];
   
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
       const [opensetting,setopensetting]=useState(false);
       
       const handleopensetting = () =>{
         setopensetting(true);
       }
       const handleclosesetting = ()=>{
         setopensetting(false);
       }
       const [openscenario, setOpenscenario] = useState(false);
   const [scenarioName, setScenarioName] = useState("");
   const [scenarioOutline, setScenarioOutline] = useState("");
   const [scenarioList, setScenarioList] = useState([]); 
   const handleopenscenario = () => {
     setOpenscenario(true);
   };
   
   const handleclosescenario = () => {
     setOpenscenario(false);
     setScenarioName("");
     setScenarioOutline("");
   };
   
   const handlesavescinario = () => {
     if (!scenarioName.trim()){
       alert("Scenario name is required");
       return;
     }
     const newscenario ={
       id:Date.now(),
       name:scenarioName,
       outline:scenarioOutline,
     };
     setScenarioList((prev)=>[...prev,newscenario]);
     handleclosescenario();
   };
   useEffect(()=>{
   const shouldopen = localStorage.getItem('openEditdialog');
   if(shouldopen === 'true'){
    setOpenscenario(true);
    localStorage.removeItem('openEditdialog');
   }
   },[]);
   
    return (
    <div>
            <Box component="section"  sx={{ border: '1px solid #2F8BCC', height: '480px',width:'535px',position:'relative'}}>
              <Box component="section" sx={{display:'flex'}} >
              <Box component="section" sx={{ p:2,bgcolor:'#2F8BCC' ,color:'white',display:'flex',alignItems:'center',gap:'3px',height:'7px',width:'230px',borderTopRightRadius:'40px'}}>
            <IconButton component={RouterLink} to='/scenariolist' sx={{right:2,width:'25px',bgcolor:'#258bd4',color:'white'}}><ArrowBackIosIcon/></IconButton>
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
       {!addScenarioOpen ? (
       <Box component='section' sx={{height:30,width:527,bgcolor:'whitesmoke',ml:0.3,mr:0.5,mt:0.5,display:'flex',alignItems:'center',position:'relative',zIndex:10}}>
                <Typography sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:200}} onClick={handleopensetting}><SettingsIcon sx={{color:'#2F8BCC'}}/></Button>
                 <Dialog open={opensetting} onClose={handleclosesetting}>
        <DialogTitle>Settings
          <IconButton onClick={handleclosesetting} sx={{position:'absolute',right:8,top:8}}><CloseIcon sx={{color:'red'}}/></IconButton>
        </DialogTitle>
        <DialogContent>
          <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Mouse hover event" />
  <FormControlLabel  control={<Checkbox />} label="Enable scroll event" />
  </FormGroup>
        </DialogContent>
      </Dialog>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,left:210}} ><RadioButtonCheckedIcon sx={{color:'red'}}/></Button>
                <Button size='small' sx={{minWidth:0,widt:30,bgcolor:'white',height:25,left:220,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleopenscenario}><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </Button>
                 <Dialog open={openscenario} onClose={handleclosescenario} >
        <DialogTitle sx={{fontSize:15}}>Edit Scenario</DialogTitle>
        <DialogContent>
          <FormGroup sx={{p:2,gap:2,width:360}}>
             <TextField
             placeholder="Enter Scenario Name"
          id="outlined-size-small"
          size="small"
          value={scenarioName}
          onChange={(e)=>setScenarioName(e.target.value)}
        />
           <TextField
          id="outlined-multiline-static"
          placeholder="Scenario Outline"
          value={scenarioOutline}
          onChange={(e)=>setScenarioOutline(e.target.value)}
          required
          multiline
          rows={4}
        />
        </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclosescenario}>Cancel</Button>
          <Button onClick={handlesavescinario} variant='contained'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:230}}><DeleteOutlineOutlinedIcon /></Button>
       </Box>
       ):(
       <Box component='section' sx={{height:30,width:527,bgcolor:'whitesmoke',ml:0.3,mr:0.5,mt:0.5,display:'flex',alignItems:'center',position:'relative',zIndex:10}}>
                <Typography sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:125}} onClick={handleopensetting}><SettingsIcon sx={{color:'#2F8BCC'}}/></Button>
                 <Dialog open={opensetting} onClose={handleclosesetting}>
        <DialogTitle>Settings
          <IconButton onClick={handleclosesetting} sx={{position:'absolute',right:8,top:8}}><CloseIcon sx={{color:'red'}}/></IconButton>
        </DialogTitle>
        <DialogContent>
          <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Mouse hover event" />
  <FormControlLabel  control={<Checkbox />} label="Enable scroll event" />
  </FormGroup>
        </DialogContent>
      </Dialog>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,left:120}} ><RadioButtonCheckedIcon sx={{color:'red'}}/></Button>
                <Button size='small' sx={{minWidth:0,widt:30,bgcolor:'white',height:25,left:125,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleopenscenario}><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </Button>
                 <Dialog open={openscenario} onClose={handleclosescenario} >
        <DialogTitle sx={{fontSize:15}}>Edit Scenario</DialogTitle>
        <DialogContent>
          <FormGroup sx={{p:2,gap:2,width:360}}>
             <TextField
             placeholder="Enter Scenario Name"
          id="outlined-size-small"
          size="small"
          value={scenarioName}
          onChange={(e)=>setScenarioName(e.target.value)}
        />
           <TextField
          id="outlined-multiline-static"
          placeholder="Scenario Outline"
          value={scenarioOutline}
          onChange={(e)=>setScenarioOutline(e.target.value)}
          required
          multiline
          rows={4}
        />
        </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclosescenario}>Cancel</Button>
          <Button onClick={handlesavescinario} variant='contained'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
                <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:130}}><DeleteOutlineOutlinedIcon /></Button>
               
                <Button size="small" sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:135}} onClick={handleclickdialog}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Button>
                        <Dialog open={opendialog} >
                        <DialogTitle sx={{color:'black',alignItems:'center',display:'flex', gap:2}}>Reset Record</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Do you really want to reset these records
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions >
                          <Button onClick={handleclosedialog} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                          <Button variant='contained' color='info' onClick={()=>{setopendialog(false);navigate('/scraperui');}} sx={{right:20}}>Confirm</Button>
                        </DialogActions>
                      </Dialog>
                       <Button size='small' sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:140}}><RemoveRedEyeOutlinedIcon /></Button>
                <Button size="small" sx={{minWidth:0,width:30,bgcolor:'white',height:25,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',left:150}} ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></Button>
       </Box>
       )}
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
                          <Button variant='contained' color='info' onClick={()=>{setopendialog(false);navigate('/scraperui')}} sx={{right:20}}>Confirm</Button>
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
                      <Box sx={{flexGrow:1,mt:1,ml:2,minHeight:250,overflowY:'auto', overflowX: 'auto',"&::-webkit-scrollbar": {display:'none'},scrollbarWidth:"none"}}>
                      <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX: "auto", "&::-webkit-scrollbar": {
      height: 0,
    }, scrollbarWidth: 'none',msOverflowStyle: 'none',}}>
                  <Table size='small'  sx={{ minWidth:900, tableLayout: "fixed",maxHeight:300}} aria-label="a dense table" >
                    <TableHead sx={{bgcolor:'#2F8BCC'}}>
                      <TableRow>
                      {AllColumns.filter(col=> selectedColumns.includes(col.key)).map(col => (
                        <TableCell sx={{color:'white',fontSize:12,width: 70}}>{col.label}</TableCell>
                      ))}
                        <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    {!addScenarioOpen && (
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
              {!['contentName','controlType','Xpath'].includes(col.key) && col.label}
            </TableCell>
                  ))}
            
                          <TableCell sx={{fontSize:12}}><IconButton ><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          {AllColumns.filter(col => selectedColumns.includes(col.key)).map(col => (
                          <TableCell sx={{fontSize:12}}>{col.key === 'contentName' && 'Name'}
                          
                          {col.key === 'controlType' && (
                           <FormControl width={20} sx={{fontSize:12}}>
                   
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
              {!['contentName','controlType','Xpath'].includes(col.key) && col.label}
            </TableCell>
                  ))}
            
                          <TableCell sx={{fontSize:12}}><IconButton ><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
                        </TableRow>
                    </TableBody>
                    )}
                  </Table>
                </TableContainer>
                
                </Box>
                
                <Box sx={{flexShrink:0,px:2,py:1,mt:0,display:'flex',alignItems:'center',gap:2,borderTop:'1px solid rgba(0,0,0,0.25)',backgroundColor:'#f5f5f5'}}>
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
    </div>
  )
}
