import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchIcon from '@mui/icons-material/Search';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import Checkdialogbox from '../../component/checkdialogbox';
import Custombutton from '../../component/custombutton';
import Customdialogbox from '../../component/customdialogbox';
import Customusersteps, { AlgoQA } from '../../component/customusersteps';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import TableComponent from '../../component/Tablecomponent';
import { AllColumns, closecheckDialog, closeMainDialog, openCheckDialog, openMainDialog, setnextopen, setselectcolumns } from "../../featureSlice";
import useCustomdialogbox from "../../hooks/customdialogboxhooks";
const stepsData =[
  'To fetch all locators in one go,click on Scrape UI.',
  'Right click on UI control to fetch individual locators.',
  <>Click on <AlgoQA/> for the project to be created in algoQA</>,
  <><Link underline='none'>Click Here </Link> to know More about Scrape UI.</>
];

const Container= styled(Box)(({theme})=>({
  border:`1px solid ${theme.palette.primary.main}`,
  height:'480px',
  width:'535px',
  position:'relative'

}))

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
  const Photobutton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.background.paper,
    marginLeft:200,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }))
  const Linkedit = styled(Button)({
    backgroundColor:'white',
    marginLeft:10,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }) 
  const Editicon = styled(EditOutlinedIcon)({
    position:'absolute',
    bottom:12,
    right:6,
    fontSize:15,
    backgroundColor:'transparent',
    borderRadius:'50%'
  })
  const Userstep=styled(Box)(({theme})=>({
    position:'absolute',
    backgroundColor:theme.palette.grey[200],
    height:350,
    width:530,
    marginLeft:2,
    display:'flex',
    flexDirection:'column',
    
  }))

const Stext = styled(TextField)(({theme})=>({
  width:250,
  paddingTop:2,
  marginLeft:4,
  '& .MuiOutlinedInput-root':{
    padding:1,
    fontSize:12,
    height:30,
    backgroundColor:theme.palette.background.paper
  }
}))
const Ibutton=styled(Button)(({theme})=>({
backgroundColor:theme.palette.background.paper,
marginTop:3,
marginRight:1,
padding:1,
minWidth:0,
width:36,
boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
}))
const Tbox = styled(Box)({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:1,
  width:'100%'
})

const Tcomponent=styled(Box)({
  flex:1,
  minHeight:0
})
export default function Scraperui() {

  const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
  const nextOpen = useSelector(state =>state.feature.nextOpen);
  const dispatch = useDispatch();
  const Opendialog = useSelector(state =>state.feature.mainDialogOpen);
  const handleOpendialog = () =>{dispatch(openMainDialog())};
  const handleClosedialog = () =>{dispatch(closeMainDialog())}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog())};
  const handleClosecheck = () => {dispatch(closecheckDialog())}
    const handleClicknext = () =>{dispatch(setnextopen(true))};
    const handleclosenext = () =>{dispatch(setnextopen(false))}
    const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
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
const {open,handleOpen,handleConfirm,handleClose}=useCustomdialogbox();
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
    <Box sx={{display:'flex',alignItems:'center',ml:1,gap:2}}>
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
      <Editicon  />
      </Linkedit>
       <Customdialogbox open={open}onClose={handleClose} onConfirm={handleConfirm} title='Application URL' confirmlabel='Save'  canclelabel='Cancel' showClose={false}><Edittext id="outlined-basic" placeholder="Edit Link"  variant="outlined"  /></Customdialogbox>
      </Tooltip>
    </Box>
    {/*User Steps */}
    {!nextOpen  ? (
      <>
    <Userstep  >
          <Customusersteps steps={stepsData}/>
    </Userstep>
    </>):(
      <>
     <Userstep>
      <Tbox>
          <Stext id="outlined-basic" placeholder="Search"  variant="outlined"  InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>)}}/>
            <Box sx={{display:'flex',gap:1}}>
            <Ibutton size="small" onClick={handleOpendialog}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Ibutton>
            <Customdialogbox open={Opendialog} onClose={handleClosedialog} onConfirm={()=>{handleConfirm();handleclosenext()}} title='Confirm Reset' confirmlabel='Yes' canclelabel='No'>
              <DialogContentText>Are you sure you want to refresh? All unsaved data will be lost.</DialogContentText>
              </Customdialogbox>
            <Ibutton size="small"  ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></Ibutton>
            <Ibutton size="small"  onClick={handleOpencheck} ><MoreVertIcon sx={{color:'#2F8BCC'}}/></Ibutton>
           <Checkdialogbox
           open={Opencheck}
           handleClose={handleClosecheck}
           columns={AllColumns}
           selectedcolumn={selectedcolumns}
           setSelectedColumns={setselectedcolumnshandle} 
           />
      </Box>
      
            </Tbox>
      <Tcomponent>
    <TableComponent 
          columns={AllColumns}
          selectedColumns={selectedcolumns}
          />
          </Tcomponent>
     </Userstep>
     </>
    )}
    </Container>
    </Box>
  )
}
