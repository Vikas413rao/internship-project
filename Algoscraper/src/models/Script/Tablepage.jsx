import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Checkdialogbox from "../../component/checkdialogbox";
import Custombutton from "../../component/custombutton";
import CustomDialog from "../../component/customdialog";
import CustomIconButton from "../../component/iconbutton";
import Loaderprogress from "../../component/loaderprogress";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import TableComponent from "../../component/Tablecomponent";
import CustomTextField from "../../component/Textfeild";
import {
  AllColumns, clearfile, closecheckDialog,
  closeresetrecord,
  loadRows,
  markSaved,
  openCheckDialog, openLoader, openresetrecord,
  setnextopen,
  setResetSaveChecked,
  setsearchtermtable, setselectcolumns
} from "../../featureSlice";
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
const Filebox = styled(Box)(({theme})=>({
backgroundColor:theme.palette.grey[300],
padding:'2px 8px',
marginTop:4,
height:25,
marginLeft:4,
borderRadius:theme.shape.borderRadius,
display:'inline-flex',
alignItems:'center',
gap:2,
width:'fit-content',
maxWidth:'95%'
}))
const Filename = styled(Typography)(({theme})=>({
  color:theme.palette.primary.main,
  fontSize:14,
  maxWidth:250,
  overflow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap'
}))
const Tbox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: theme.palette.grey[200],

  height: isExpanded ? 420 : 330,
  width: '100%',  

  marginLeft: 2,
  overflow: 'hidden',
  transition: 'all 0.3s ease'
}));
const Search=styled(TextField)(({theme})=>({
 width:  250,   
  paddingTop: 2,
  marginLeft: 4,
  fontFamily:theme.typography.fontFamily,
  '& .MuiOutlinedInput-root': {
    padding: 1,
    fontSize:  12,
    height:30,
    backgroundColor: theme.palette.background.paper,
     fontFamily:theme.typography.fontFamily
  }
}))
const Ibutton=styled(Button)(({theme})=>({
backgroundColor:theme.palette.background.paper,
marginTop:3,
marginRight:1,
padding:1,
minWidth:0,
boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
}))
const Tcomponent=styled(Box)({
  flex:1,
  minHeight:0,
  overflow:'auto',
  boxSizing:'border-box',
  paddingBottom:1
})
export default function TableScreen (){
    const navigate = useNavigate();
const dispatch = useDispatch();              
   const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
       const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog("table"))};
  const handleClosecheck = () => {dispatch(closecheckDialog())}          

        const handleAnalyze=() =>{
            dispatch(
              openLoader({
                title:'Analyze',
                message:'Please Wait while we Map..',
                onComplete:()=>{navigate('/automapper')}
              })
            )
          }
const filename=useSelector((state)=>state.feature.filename);
const handleClosefile = () =>{
      dispatch(clearfile());
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
  const searchterm = useSelector(state => state.feature.searchtermtable)
  const location = useLocation();

const isscraper = location.pathname === '/scraperui';
  const resetOpen = useSelector(state => state.feature.resetrecordopen);
const resetChecked = useSelector(state => state.feature.resetSaveChecked);
const tableRows = useSelector(state => state.feature.tableRows);
const handleConfirmReset = () => {
  if (resetChecked) {
    chrome.storage.local.set({ ['rows_table']: tableRows }, () => {
      dispatch(markSaved('table'));
    });
  } else {
    chrome.storage.local.get(['rows_table'], (result) => {
      const saved = result['rows_table'] || [];
      dispatch(loadRows({ page: 'table', rows: saved }));
    });
  }

  dispatch(setResetSaveChecked(true));
  dispatch(closeresetrecord());

  if (isscraper) {
    dispatch(setnextopen(false));
  } else {
    navigate('/scraperui');
  }
};
    return(
     <div>
          <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container  isExpanded={isExpanded}>
              <Navcomponent />
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
            <Pagename  isExpanded={isExpanded} />
              <Custombutton  isExpanded={isExpanded} label='Scraper Ui' width='120px' height="30px" expandedHeight="30px"/>
              </Box>
              {/*file name */}
              <Filebox>
                <InsertDriveFileOutlinedIcon fontSize='small' />
                <Filename>{filename || 'File.txt'}</Filename>
                <IconButton size="small" onClick={handleClosefile}><CloseIcon sx={{color:'black',ml:2}} fontSize='small' /></IconButton>
              </Filebox>
              {/*table */}
              <Tbox isExpanded={isExpanded} >
      <Box sx={{display:'flex',alignItems:'center'}}>
          <CustomTextField placeholder='Search ' variant='outlined' value={searchterm} onChange={(e)=>dispatch(setsearchtermtable(e.target.value))} isSearch width="300px" height="30px" placeholderSize="13px"/>
            <Box sx={{display:'flex',marginLeft: 'auto'    }}>
            <CustomIconButton size="small" onClick={()=>dispatch(openresetrecord())}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
                       <CustomDialog
                       open={resetOpen}
                       onClose={() => dispatch(closeresetrecord())}
                       showHeader={true}
                       showCloseIcon={true}
                       title="Reset Record"
                       width={280}
                       height={202}
                       actionssx={{
                         justifyContent: 'space-between',
                         p: 2
                       }}
                       buttons={[
                         {
                           label: 'No',
                           onClick: () => dispatch(closeresetrecord()),
                           width: '80px',
                           height: '25px',
                           sx: {
                             backgroundColor: 'grey.200',
                             color: 'grey'
                           }
                         },
                         {
                           label: 'Yes',
                           onClick: handleConfirmReset,
                           width: '80px',
                           height: '25px'
                         }
                       ]}
                     >
                       <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
                         Are You Sure?
                       </Typography>
                     
                       <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.5 }}>
                         Do you really want to reset these records
                       </Typography>
                     
                       <FormGroup>
                         <FormControlLabel
                           control={
                             <Checkbox
                               checked={resetChecked}
                               onChange={(e) => dispatch(setResetSaveChecked(e.target.checked))}
                               size="small"
                               sx={{ p: 0.5 }}
                             />
                           }
                           label="Save Data"
                           sx={{
                             '& .MuiFormControlLabel-label': { fontSize: 13 }
                           }}
                         />
                       </FormGroup>
                     </CustomDialog>
                
            <Custombutton
  label="Auto Mapper"
  onClick={handleAnalyze}
  width="100px"
  height="30px"
  fontSize='10.6px'
  sx={{ bgcolor: '#2F8BCC', color: 'white',mt:0.3,mr:0.5 }}
/>
            <Loaderprogress />
           <CustomIconButton onClick={handleOpencheck}>
  <MoreVertIcon />
</CustomIconButton> </Box>
           <Checkdialogbox 
           open={Opencheck}
           handleClose={handleClosecheck}
           columns={AllColumns}
           selectedcolumn={selectedcolumns}
            setSelectedColumns={setselectedcolumnshandle} 
            page="table"
           />
            </Box>
          <Tcomponent>
          <TableComponent 
           columns={AllColumns}
            selectedColumns={selectedcolumns}
            isExpanded={isExpanded}
            page ='table'/>
          
          </Tcomponent>
     </Tbox>
          </Container>
          </Box>
    </div>
)
}