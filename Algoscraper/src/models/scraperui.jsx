import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchIcon from '@mui/icons-material/Search';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { DialogActions, IconButton, InputAdornment } from '@mui/material';
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
import { useNavigate } from 'react-router-dom';
import Custombutton from '../component/custombutton';
import Customdialogbox from '../component/customdialogbox';
import Navcomponent from '../component/navcomponent';
import Pagename from '../component/pagename';
import Customdialogboxhooks from '../hooks/customdialogboxhooks';
const Container= styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'

})

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

  const Edittext=styled(TextField)({
    width:200,
    paddingTop:1,
    '& .MuiOutlinedInput-root':{
      disableUnderline:true,
        padding:1,
        fontSize:12,
        height:40
    }
  })
  const Photobutton = styled(Button)({
    backgroundColor:'white',
    marginLeft:200,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  })
  const Linkedit = styled(Button)({
    backgroundColor:'white',
    marginLeft:10,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }) 
export default function Scraperui() {
    const navigate = useNavigate(); 
    const {open,handleOpen,handleClose,handleConfirm  } = Customdialogboxhooks();

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
      const [nextopen,setnextopen]=useState(false);
      const handleClicknext = () =>{
        setopendialog(false);
        setnextopen(true);
      }

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
      <Container >
        <Navcomponent/>
    <Box sx={{display:'flex',alignItems:'center',ml:1}}>
    <Pagename/>
    <Custombutton label='Scraper UI' onClick={handleClicknext}/>
    </Box>
    <Box sx={{mt:0.5,ml:2,display:'flex',alignItems:'center'}}>
      <Typography sx={{fontSize:14}}>MultiXpath Support</Typography>
          <FormControlLabel control={<Android12Switch sx={{transform:'scale(0.6)'}} />} />
    <Photobutton size="small" ><PhotoCameraOutlinedIcon sx={{color:'#2F8BCC'}}/></Photobutton>
     
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
           
          
    <Linkedit size="small" onClick={handleOpen} >
      <LinkIcon sx={{color:'#2F8BCC'}}/>
      <EditOutlinedIcon sx={{ position: "absolute",bottom:9,right: 6,fontSize: 15,backgroundColor:'transparent',borderRadius: "50%", }} />
      </Linkedit>
       <Customdialogbox open={open}onClose={handleClose} onConfirm={()=>{handleConfirm();}} title='Application URL' confirmlabel='Save'  canclelabel='Cancel' showClose={false}><Edittext id="outlined-basic" placeholder="Edit Link"  variant="outlined"  /></Customdialogbox>
      </Tooltip>
    </Box>
    {!nextopen  ? (
      <>
    <Box  sx={{position:'absolute',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5,overflow:'hidden',backgroundImage:'url(/assets/OIP.jpg)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'220px'}}>
          <Typography sx={{textDecoration:'underline',fontSize:14,pl:3,pt:2}}>User Steps:</Typography>
          <ul style={{paddingLeft:45,margin:0}}>
          <li><Typography sx={{fontSize:12}}>To fetch all locators in one go,click on Scrape UI. </Typography></li>
          <li><Typography sx={{fontSize:12}}>Right click on UI control to fetch individual locators.</Typography></li>
          <li><Typography sx={{fontSize:12,display:'flex',alignItems:'center'}}>Click on <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 600,fontSize: 14,color: "#6b6b6b",lineHeight: 1,}} >
        algo
      </Typography>
      <Typography sx={{fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
        Q
      </Typography>
      <Typography sx={{ fontFamily: "Poppins, sans-serif",fontWeight: 700,fontSize: 16,color: "#2F8BCC",lineHeight: 1,}}>
        A
      </Typography>for the project to be created in algoQA</Typography></li>
          <li><Typography sx={{fontSize:12}}><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Scrape UI.</Typography> </li></ul>
          
    </Box>
    </>):(
      <>
     <Box  sx={{display:'flex',flexDirection:'column',position:'relative',bgcolor:'grey.200',height:343,width:530,ml:0.2,mt:0.5,overflow:'hidden'}}>
      <Box sx={{display:'flex',alignItems:'center'}}>
          <TextField id="outlined-basic" placeholder="Search"  variant="outlined" sx={{width:250,pt:1,ml:2}}InputProps={{disableUnderline:true,startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>),sx:{px:1,fontSize:12,height:30,bgcolor:'white'}}} />
            <Box>
            <Button size="small" sx={{bgcolor:'white',ml:15,right:-23,minWidth:0,width:40,boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'}} onClick={handleclickdialog}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Button>
            <Customdialogbox open={opendialog} onClose={handleclosedialog} onConfirm={()=>{handleConfirm();setnextopen(false);}} title='Confirm Reset' confirmlabel='Yes' canclelabel='No'><DialogContentText>Are you sure you want to refresh? All unsaved data will be lost.</DialogContentText></Customdialogbox>
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
     </>
    )}
    </Container>
    </Box>
  )
}
