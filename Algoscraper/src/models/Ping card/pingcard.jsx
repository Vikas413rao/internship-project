import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import SearchIcon from '@mui/icons-material/Search';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, DialogContentText, IconButton, InputAdornment, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Navcomponent from '../../component/navcomponent';

export default function Pingcard() {
  const [openStartdialog,setOpenstartdialog] = useState(false);
        const [openSessiondialog,setOpensessiondialog] = useState(false);
        const [open,setOpen] = useState(false);
        const [url,seturl] = useState("");
        const navigate = useNavigate();
        const [isValidurl,setValidurl]= useState(false);
        const [progress, setProgress] = useState(0);
        const [isAnalyze,setisAnalyze]= useState(false);
        const [showReport,setshowReport] = useState(false);
        const [analyzedurl,setanalyzedurl]=useState("");
        const[analyzedat,setanalyzedat]=useState(null);
        const [islinkanalyze,setislinkanalyze]=useState(false);
        const [showlink,setshowlink]=useState(false);

        const startprogress = (oncomplete) =>{
          setProgress(0);
          const timer = setInterval (()=>{
            setProgress((prev)=>{
              if(prev >= 100){
                clearInterval(timer);
                oncomplete();
                return 100;
              }
              return prev+ 10;
            })
          },500);
        }

        const handleUrlchange = (e) =>{
          let value= e.target.value.trim()
          if(value && !value.startsWith("http")){
            value="https://"+value;
          }
          seturl(value);
          try{
           const parseurl=new URL(value);
           const hashdomain = parseurl.hostname.includes(".");
           const hashpath = parseurl.pathname && parseurl.pathname !== "";

           if(hashdomain && hashpath && parseurl.pathname === '/')
           {
            setValidurl(true);
           }
           else{
            setValidurl(false);
           }
          }catch{
              setValidurl(false)
          }
        };

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
                    <Navcomponent />
                 <Box sx={{display:'flex',alignItems:'center', gap:2}}>
                  <TextField  placeholder="Enter a WebPage url" variant="outlined" value={url} onChange={handleUrlchange} sx={{width:300,pt:1,ml:1}}InputProps={{disableUnderline:true,startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>),sx:{fontSize:12,px:1,height:30,bgcolor:'white'}}}/>
                <Button disabled={!isValidurl|| isAnalyze} variant='contained' sx={{mt:1}} onClick={() =>{
                  setisAnalyze(true);setshowReport(false);setanalyzedurl(url);setanalyzedat(new Date()); 
                   startprogress(()=>{
                    setisAnalyze(false);
                    setshowReport(true);
                   })
                }}>Analyze</Button>
                <Button variant="outlined" sx={{mt:1,width:90}}>Stop</Button>
                </Box> 
                <Box sx={{position:'relative',bgcolor:'grey.200',width:535,height:386,mt:1}}>
                     
                      {!isValidurl && !isAnalyze && !showReport && (
                        <>
                        <Typography fontWeight={600} pt={2} ml={2} fontSize={13}><u>User Steps:</u></Typography>
                        <ul style={{paddingLeft:40,margin:0}}>
                          <li>
                             <Typography variant="body2"  fontSize={12}>
                                Enter a valid URL
                              </Typography>
                          </li>
                          <li>
                             <Typography variant="body2" fontSize={12}>
                                Click on <b>Analyze</b> to check the response time and load time of the page.
                              </Typography>
                          </li>
                          <li>
                            <Typography variant="body2" fontSize={12}>
                            <b>"Click Here"</b> to test all the links.
                            </Typography>
                          </li>
                          <li>
                             <Typography variant="body2" fontSize={12} >
                            To view response time,load time,status,date & time of each URL,click <b>"View Report"</b>
                            </Typography>
                            </li>
                            <li> <Typography variant="body2" fontSize={12}>If user wants to stop testing the links,click <b>"Stop"</b></Typography></li>
                            <li> <Typography variant="body2" fontSize={12}><b><Link underline="none">Click Here</Link></b> to Know More about Pinglink</Typography></li>
                        </ul>
                        </>
                      )}
                      {isValidurl && !isAnalyze && !showReport && !showlink && !islinkanalyze &&(
                      <>
                      <Typography fontWeight={600} pt={2} ml={2}><u>User Steps:</u></Typography>
                        <ul style={{paddingLeft:40,margin:0}}>
                          <li>
                             <Typography variant="body2"  fontSize={12}>
                                Enter a valid URL
                              </Typography>
                          </li>
                          <li>
                             <Typography variant="body2" fontSize={12}>
                                <b>Click on "Analyze" to check the response time and load time of the page.</b>
                              </Typography>
                          </li>
                          <li>
                            <Typography variant="body2" fontSize={12}>
                            <b>"Click Here"</b> to test all the links.
                            </Typography>
                          </li>
                          <li>
                             <Typography variant="body2" fontSize={12} >
                            To view response time,load time,status,date & time of each URL,click <b>"View Report"</b>
                            </Typography>
                            </li>
                            <li> <Typography variant="body2" fontSize={12}>If user wants to stop testing the links,click <b>"Stop"</b></Typography></li>
                            <li> <Typography variant="body2" fontSize={12}><b><Link underline="none">Click Here</Link></b> to Know More about Pinglink</Typography></li>
                        </ul>
                      </>
                      )}
                 {isAnalyze && (
                <Box sx={{height:'300',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,pt:15}}>
                  <CircularProgress variant="determinate" value={progress} ></CircularProgress>
                  <Typography fontSize={15} color='black'>Don't Switch the tab while analysis in progress</Typography>
                </Box>
                )}
                {showReport && !islinkanalyze && !showlink &&(
                  <>
                  <Box>
                    <Typography sx={{fontSize:15,fontFamily:'-moz-initial',pl:7,pt:2}}>We found 52 Links.Do You want to test all links,<Link underline='none' onClick={() =>{
                      setshowReport(false);setislinkanalyze(true); startprogress(()=>{setislinkanalyze(false);setshowlink(true);});
                    }}>Click Here</Link></Typography>
                    <Box component='section' sx={{width:480 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:480,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                        <Typography sx={{color:'white',fontSize:15,p:2}}>Your Report</Typography>
                        <Typography sx={{color:'white',ml:20}}>{analyzedat.toLocaleDateString("en-In",{day:'2-digit',month:'short',year:'numeric'})}|{analyzedat.toLocaleTimeString("en-In",{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</Typography>
                      </Box>
                      <Typography sx={{position:'absolute',mt:3,fontWeight:600}}>Given URL:<Link href={analyzedurl} >{analyzedurl}</Link></Typography>
                      </Box>
                      <Box sx={{display:'flex',alignItems:'center'}}>
                       <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography sx={{fontSize:17,color:'white',p:1}}>Status</Typography>
                      </Box>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Box>
                      <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography fontSize={17} sx={{color:'white',p:1}}>Response Time</Typography>
                      </Box>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Box>
                      <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography fontSize={17} sx={{color:'white',p:1}}>Load Time</Typography>
                      </Box>
                      <Typography fontSize={30} sx={{p:2}}>2.41 s</Typography>
                      </Box>
                      </Box>
                  </Box>
                  </>
                )}
                {islinkanalyze &&(
                  <Box sx={{height:'300',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,pt:15}}>
                  <CircularProgress variant="determinate" value={progress} ></CircularProgress>
                  <Typography fontSize={15} color='black'>Don't Switch the tab while analysis in progress</Typography>
                </Box>
                )}
                {showlink &&(
                  <>
                  <Box>
                    <Typography sx={{fontSize:15,fontFamily:'-moz-initial',pl:7,pt:2}}>We found 52 Links.Do You want to test all links,<Link underline='none' >View Report</Link></Typography>
                    <Box component='section' sx={{width:480 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:480,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                        <Typography sx={{color:'white',fontSize:15,p:2}}>Your Report</Typography>
                        <Typography sx={{color:'white',ml:20}}>{analyzedat.toLocaleDateString("en-In",{day:'2-digit',month:'short',year:'numeric'})}|{analyzedat.toLocaleTimeString("en-In",{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</Typography>
                      </Box>
                      <Typography sx={{position:'absolute',mt:3,fontWeight:600}}>Given URL:<Link href={analyzedurl} >{analyzedurl}</Link></Typography>
                      </Box>
                      <Box sx={{display:'flex',alignItems:'center'}}>
                       <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography sx={{fontSize:17,color:'white',p:1}}>Status</Typography>
                      </Box>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Box>
                      <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography fontSize={17} sx={{color:'white',p:1}}>Response Time</Typography>
                      </Box>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Box>
                      <Box component='section' sx={{width:145 ,boxShadow:'3px',height:120,ml:3,mt:1,borderRadius:'10px',bgcolor:'white'}}>
                      <Box component='section' sx={{height:45,width:145,bgcolor:'#2F8BCC',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',display:'flex',alignItems:'center'}}>
                      <Typography fontSize={17} sx={{color:'white',p:1}}>Load Time</Typography>
                      </Box>
                      <Typography fontSize={30} sx={{p:2}}>2.41 s</Typography>
                      </Box>
                      </Box>
                  </Box>
                  </>
                )}
                </Box>
                
                </Box>
                </Box>
    </div>
  )
}
