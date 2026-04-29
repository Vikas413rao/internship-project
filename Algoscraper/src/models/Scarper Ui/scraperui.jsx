import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkdialogbox from '../../component/checkdialogbox';
import Custombutton from '../../component/custombutton';
import CustomDialog from "../../component/customdialog";
import Customusersteps, { AlgoQA } from '../../component/customusersteps';
import CustomIconButton from "../../component/iconbutton";
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import TableComponent from '../../component/Tablecomponent';
import CustomTextField from "../../component/Textfeild";
import { AllColumns, closecheckDialog, closeediturl, closeresetrecord, markSaved, openCheckDialog, openediturl, openresetrecord, resetUnsavedRows, setnextopen, setsearchtermscraper, setselectcolumns } from "../../featureSlice";
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

 const Editicon = styled(EditOutlinedIcon)(({ theme }) => ({
  position: 'absolute',
  bottom:6,
  right: 3,
  backgroundColor: theme.palette.background.paper, 
  borderRadius: '50%',
  minWidth: 0,
  minHeight: 0,
  width: 12,
  height: 12,
 
}));
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
  overflow: 'hidden',
  boxSizing:'border-box'
}));

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
 const openedit = useSelector(state => state.feature.editurl);
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog("scraper"))};
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
 const handleCloseedit= () =>{dispatch(closeediturl());}
 const handleConfirmedit=() =>{dispatch(closeediturl());}
 const resetrecordopen = useSelector(state => state.feature.resetrecordopen);
 const handleResetConfirm = () => {
    dispatch(closeresetrecord());
    dispatch(resetUnsavedRows('scraper'));
    dispatch(setnextopen(false));
};
const scraperRows = useSelector(state => state.feature.scraperRows);
const handleSave = async () => {
  if (typeof chrome === "undefined" || !chrome.storage) return;

  await new Promise((resolve) => {
    chrome.storage.local.set({ ['rows_scraper']: scraperRows }, resolve);
  });

  chrome.storage.local.remove('unsaved_scraper');

  dispatch(markSaved('scraper'));
};
  return (
   <Box sx={{ margin: 0, padding: 0 }}>
            <Container  isExpanded={isExpanded}>
       <Navcomponent />
    <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1,mb:1}}>
    <Pagename isExpanded={isExpanded}/>
    <Custombutton isExpanded={isExpanded} label='Scraper UI' onClick={handleClicknext} width="120px " height="30px" expandedHeight="30px"/>
    </Box>
       <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <MultiXpath >MultiXpath Support</MultiXpath>
          <FormControlLabel control={<SmallSwitch />} />
    <CustomIconButton 
  onClick={handleScreenshot}
  sx={{ ml: isExpanded ? 39 : 36 }}
>
  <PhotoCameraOutlinedIcon sx={{ fontSize: 17 }} />
</CustomIconButton>
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
           
          
     <CustomIconButton onClick={() => dispatch(openediturl())}>
  <LinkIcon sx={{ fontSize: 22 }} />
  <Editicon />
</CustomIconButton>
      <CustomDialog
  open={openedit}
  onClose={handleCloseedit}
  showHeader={true}
  showCloseIcon={true}
  title="Application URL"
  width={280}
  height={150}
  buttons={[
    {
      label: 'Cancel',
      onClick: handleCloseedit,
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey'
      }
    },
    {
      label: 'Save',
      onClick: handleConfirmedit
    }
  ]}
  contentSx={{
    justifyContent: 'center'
  }}
>
  <CustomTextField
    placeholder="Edit Link"
    placeholderSize="12px"
  />
</CustomDialog>
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
          
          <CustomTextField isSearch placeholder="Search"  variant="outlined" value={searchterm} onChange={(e)=>dispatch(setsearchtermscraper(e.target.value))}  placeholderSize="12px" width='260px' height='25px'/>
            <Box sx={{display:'flex',gap:0.1}}>
            <CustomIconButton onClick={()=>dispatch(openresetrecord())} height='25px' width='28px'><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
        <CustomDialog
    open={resetrecordopen}
    onClose={() => dispatch(closeresetrecord())}
    showHeader={true}
    showCloseIcon={true}
    title="Reset Record"
    width={250}
    height={150}
    buttons={[
        {
            label: 'No',
            onClick: () => dispatch(closeresetrecord()),
            sx: { backgroundColor: 'grey.200', color: 'grey' }
        },
        {
            label: 'Yes',
            onClick: handleResetConfirm,
        }
    ]}
    actionssx={{ justifyContent: 'space-between', px: 2 }}
>
    <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
        Are you sure you want to refresh? All unsaved data will be lost.
    </Typography>
</CustomDialog>
             <CustomIconButton height='25px' width='28px' onClick={handleSave}><SaveAltIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>  
             <CustomIconButton onClick={handleOpencheck} height='25px' width='28px'><MoreVertIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>                  
            
           <Checkdialogbox
           open={Opencheck}
           handleClose={handleClosecheck}
           columns={AllColumns}
           selectedcolumn={selectedcolumns}
           setSelectedColumns={setselectedcolumnshandle} 
           page="scraper" 
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
