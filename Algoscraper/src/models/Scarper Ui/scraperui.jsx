import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkdialogbox from '../../component/checkdialogbox';
import Custombutton from '../../component/custombutton';
import Customusersteps, { AlgoQA } from '../../component/customusersteps';
import Editurl from "../../component/Editurl";
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import Resetrecorddialog from "../../component/resetrecorddialog";
import TableComponent from '../../component/Tablecomponent';
import CustomTextField from "../../component/Textfeild";
import { AllColumns, closecheckDialog, closeMainDialog, openCheckDialog, openediturl, openMainDialog, openresetrecord, setnextopen, setsearchtermscraper, setselectcolumns } from "../../featureSlice";
const stepsData =[
  'To fetch all locators in one go,click on Scrape UI.',
  'Right click on UI control to fetch individual locators.',
  <>Click on <AlgoQA/> for the project to be created in algoQA</>,
  <><Link underline='none'>Click Here </Link> to know More about Scrape UI.</>
];

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  border: `1px solid ${theme.palette.primary.main}`,

  width: isExpanded ? '600px' : '530px',
  height: isExpanded ? '530px' : '430px',

  position: 'relative',  
  margin: 0,

  backgroundColor: theme.palette.background.paper,

  overflow: 'hidden',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
}));

 
  const Photobutton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.background.paper,
    marginLeft:200,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }))
  const Linkedit = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.background.paper,
    marginLeft:10,
    minWidth:0,
    width:40,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }) )
  const Editicon = styled(EditOutlinedIcon)({
    position:'absolute',
    bottom:9,
    right:6,
    fontSize:14,
    backgroundColor:'transparent',
    borderRadius:'50%'
  })
const Userstep = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  backgroundColor: theme.palette.grey[200],
  width: '100%',
  flexGrow: 1,
  minHeight: isExpanded ? 520 : 330,
  padding: isExpanded ? 8 : 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  boxSizing:'border-box'
}));

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
const MultiXpath= styled(Typography)(({theme})=>({
  fontFamily:theme.typography.fontFamily,
  fontSize:14
}))
const Tcomponent=styled(Box)({
  flex:1,
  minHeight:0,
  overflow:'auto',
  boxSizing:'border-box',
  paddingBottom:1
})
const SmallSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 15,
  padding: 0,
  left: 17,

  '& .MuiSwitch-switchBase': {
    padding: 2,

    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: '#fff',

      '& + .MuiSwitch-track': {
        backgroundColor: '#2F8BCC',
        opacity: 1,
        border: '1px solid black',   
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 10,
    height: 10,
  },

  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: theme.palette.grey[500],
    border: `1px solid black`,      
    opacity: 1,                   
  },
}));
export default function Scraperui() {

  const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
  const nextOpen = useSelector(state =>state.feature.nextOpen);
  const dispatch = useDispatch();
 
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog())};
  const handleClosecheck = () => {dispatch(closecheckDialog())}
    const handleClicknext = () =>{dispatch(setnextopen(true))};
    
    const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const handleScreenshot=() =>{
    chrome.tabs.captureVisibleTab(null,
      {format:'png'},
      (dataUrl) =>{
        if(chrome.runtime.lastError){
          console.error(chrome.runtime.lastError);
          return;
        }
        const link=document.createElement('a');
        link.href= dataUrl;
        link.download='Screenshot.png';
        link.click();
      }
    )
  }
const isExpanded = useSelector(state => state.feature.isExpanded);
 useEffect(() => {
    const body = document.body;
    if (isExpanded) {
      body.style.width = '600px';
      body.style.height = '530px';
    } else {
      body.style.width = '530px';
      body.style.height = '430px';
    }
  }, [isExpanded]);
const searchterm = useSelector(state => state.feature.searchtermscraper)
 
  return (
   <Box sx={{ margin: 0, padding: 0 }}>
            <Container  isExpanded={isExpanded}>
       <Navcomponent />
    <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1,mb:1}}>
    <Pagename isExpanded={isExpanded}/>
    <Custombutton isExpanded={isExpanded} label='Scraper UI' onClick={handleClicknext} width="100px " height="35px"/>
    </Box>
       <Box sx={{ display: 'flex', alignItems: 'center', ml:0 }}>
      <MultiXpath >MultiXpath Support</MultiXpath>
          <FormControlLabel control={<SmallSwitch />} />
    <Photobutton size="small" onClick={handleScreenshot}sx={{ml: isExpanded ? 39 : 32}}><PhotoCameraOutlinedIcon sx={{color:'#2F8BCC',fontSize:15}}/></Photobutton>
     
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
           
          
    <Linkedit size="small" onClick={()=>dispatch(openediturl())} >
      <LinkIcon sx={{color:'#2F8BCC',fontSize:19}}/>
      <Editicon  />
      </Linkedit>
       <Editurl />
      </Tooltip>
    </Box>
    {/*User Steps */}
    {!nextOpen  ? (
      <>
    <Userstep  isExpanded={isExpanded}>
          <Customusersteps steps={stepsData}  isExpanded={isExpanded}/>
    </Userstep>
    </>):(
      <>
     <Userstep isExpanded={isExpanded}>
      <Tbox>
          
          <CustomTextField isSearch placeholder="Search"  variant="outlined" value={searchterm} onChange={(e)=>dispatch(setsearchtermscraper(e.target.value))}  placeholderSize="12px" width='200px' height='30px'/>
            <Box sx={{display:'flex',gap:1}}>
            <Ibutton size="small" onClick={()=>dispatch(openresetrecord())}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Ibutton>
          <Resetrecorddialog />
                                 
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
          isExpanded={isExpanded}
          page="scraper"
          />
          </Tcomponent>
     </Userstep>
     </>
    )}
    </Container>
    </Box>
  )
}
