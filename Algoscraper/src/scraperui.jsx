import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchIcon from '@mui/icons-material/Search';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, IconButton, InputAdornment, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import NativeSelect from '@mui/material/NativeSelect';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Scraperui() {
    const [openStartdialog,setOpenstartdialog] = useState(false);
    const [openSessiondialog,setOpensessiondialog] = useState(false);
const [Open,setopen] = useState(false);
const [opendialog,setopendialog]=useState(false);
const [openedit,setopenedit]= useState(false);
  const [opencheck,setopencheck] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleclickcheck = ()=>{
    setopencheck(true);
  }
  const handleclosecheck = () =>{
    setopencheck(false);
  }
const handlestartedit = () =>{
  setopenedit (true);
}

const handlecloseedit = () =>{
  setopenedit(false);
}

const handleclickdialog = () =>{
  setopendialog(true);
}
const handleclosedialog =() =>{
  setopendialog(false);
}
      const [nextopen,setnextopen]=useState(false);
      const handleClicknext = () =>{
        setopendialog(false);
        setnextopen(true);
      }
      const handleCloseclick = () =>{
        setopen(true);
      }
      const handleClose = () =>{
        setopen(false);
      }
      const handleConfirm = () =>{
        
        setopen(false);
      }

    const pagelist =[
      {
        value :'Page List1',
        label :'Page List'
      }
    ];

    const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));
    
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
      <Typography sx={{bgcolor:'#2F8BCC',color:'white',height:'30px',pl:1,pt:1,mt:1,pr:1,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>Page Name</Typography>
      <TextField id="outlined-basic" placeholder="Page Name Here"  variant="outlined" sx={{width:300,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
    </Box>
    <Button variant='contained' sx={{px:2,ml:1,mt:1}} onClick={handleClicknext}>Scrape Ui</Button>
    </Box>
    <Box sx={{mt:0.5,ml:2,display:'flex',alignItems:'center'}}>
      <Typography sx={{fontSize:14}}>MultiXpath Support</Typography>
          <FormControlLabel control={<Android12Switch sx={{transform:'scale(0.6)'}} />} />
    <Button size="small" sx={{bgcolor:'white',ml:28,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}}><PhotoCameraOutlinedIcon sx={{color:'#2F8BCC'}}/></Button>
     
    <Tooltip title="Edit Link" placement="top"  slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14],
              },
            },
          ],
        },
      }}>
           
          
    <Button size="small" sx={{bgcolor:'white',ml:2,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handlestartedit}>
      <LinkIcon sx={{color:'#2F8BCC'}}/>
      <EditOutlinedIcon sx={{ position: "absolute",bottom:9,right: 6,fontSize: 15,backgroundColor:'transparent',borderRadius: "50%", }} />
      </Button>
       <Dialog open={openedit} onClose={handlecloseedit} >
        <DialogTitle>Application URL</DialogTitle>
        <DialogContent>
          <form id="subscription-form">
           <TextField id="outlined-basic" placeholder="Edit Link"  variant="outlined" sx={{width:200,pt:1}}InputProps={{disableUnderline:true,sx:{px:1,fontSize:12,height:40}}} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlecloseedit} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info'  sx={{right:10}}>Confirm</Button>
        </DialogActions>
      </Dialog>
      </Tooltip>
    </Box>
    {!nextopen ?(
    <Box  sx={{position:'relative',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5,overflow:'hidden',backgroundImage:'url(/assets/OIP.jpg)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'220px'}}>
          <Typography sx={{textDecoration:'underline',fontSize:14,pl:3,pt:2}}>User Steps:</Typography>
          <Typography sx={{fontSize:12,pl:5,pt:1}}><CircleIcon sx={{fontSize:9,gap:7}}/>    To fetch all locators in one go,click on Scrape UI. </Typography>
          <Typography sx={{fontSize:12,pl:5,pt:1}}><CircleIcon sx={{fontSize:9,gap:7}}/>     Right click on UI control to fetch individual locators.</Typography>
          <Typography sx={{fontSize:12,pl:5,pt:1,display:'flex',alignItems:'center'}}><CircleIcon sx={{fontSize:9,gap:7}}/>     Click on <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 600,fontSize: 14,color: "#6b6b6b",lineHeight: 1,}} >
        algo
      </Typography>
      <Typography sx={{fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
        Q
      </Typography>
      <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
        A
      </Typography>for the project to be created in algoQA</Typography>
          <Typography sx={{fontSize:12,pl:5,pt:1}}><CircleIcon sx={{fontSize:9,gap:7}}/>    <Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Scrape UI.</Typography>
          
    </Box>):(
     <Box  sx={{position:'relative',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5}}>
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
    
      <FormControlLabel control={<Checkbox defaultChecked />} label="Control Type" />
      <FormControlLabel control={<Checkbox />} label="Page Name" />

      <FormControlLabel control={<Checkbox defaultChecked />} label="Control Name" />
      <FormControlLabel control={<Checkbox />} label="Control Value" />

      <FormControlLabel control={<Checkbox defaultChecked />} label="Xpath" />
      <FormControlLabel control={<Checkbox />} label="App URL" />

      <FormControlLabel control={<Checkbox />} label="Feature Name" />
      <FormControlLabel control={<Checkbox />} label="Node Name" />
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclosecheck} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info'  sx={{right:10}}>Apply Changes</Button>
        </DialogActions>
      </Dialog>
            </Box>
          <Box sx={{width:500,mt:1,ml:2, overflowX: "hidden","&::-webkit-scrollbar": {display: "none",},scrollbarWidth:"none"}}>
          <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX: "auto"}}>
      <Table size='small' sx={{ width: "100%", tableLayout: "fixed"}} aria-label="a dense table" >
        <TableHead sx={{bgcolor:'#2F8BCC'}}>
          <TableRow>
            <TableCell sx={{color:'white',fontSize:12,width: 70}}>Content Name</TableCell>
            <TableCell sx={{color:'white',fontSize:12,width: 50}}>Control Type</TableCell>
            <TableCell sx={{color:'white',fontSize:12, width: 40 }}>XPath</TableCell>
            <TableCell sx={{color:'white',fontSize:12,width: 20 }}></TableCell>
            <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{fontSize:12}}>Name
              </TableCell>
              <TableCell sx={{fontSize:12}} > <FormControl width={20}>
       
        <NativeSelect
          defaultValue={30}
          inputProps={{
            
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>TextBox</option>
          <option value={20}>DropDown</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl></TableCell>
              <TableCell  ><Link href="#" variant="body2" sx={{fontSize:12}}>
  XPath Link
</Link></TableCell>
<TableCell></TableCell>
              <TableCell sx={{fontSize:12}}><IconButton ><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
    
    <Box sx={{px:2,py:1,mt:19,display:'flex',alignItems:'center',gap:2,borderTop:'1px solid rgba(0,0,0,0.25)',width:'300'}}>
    <Box sx={{display:'flex',alignItems:'center',gap:2}}>
    <Button variant='contained' size='small' sx={{top:3}} >+ Row</Button>
    <Typography sx={{fontSize:12,color:'red'}}>Error will be displayed here</Typography>
   
    </Box>
    <Box sx={{flexGrow:1}}>
     <Pagination count={10} shape="rounded" page={1} siblingCount={0} boundaryCount={1} showFirstButton showLastButton  sx={{"&.Mui-selected":{backgroundColor:'#2F8BCC',color:'#fff'},"&.MuiPaginationItem-root":{fontSize:11,minWidth:17,height:22}}} size='small'/>
         </Box>
         </Box> 
     </Box>
    )}
    </Box>
    </Box>
  )
}
