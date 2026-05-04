import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Checkdialogbox from '../../component/checkdialogbox';
import Custombutton from '../../component/custombutton';
import CustomDialog from '../../component/customdialog';
import CustomIconButton from '../../component/iconbutton';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import TableComponent from '../../component/Tablecomponent';
import CustomTextField from '../../component/Textfeild';
import {
  AllColumns,
  clearScenario,
  closecheckDialog,
  closeeditdialog,
  closerecord,
  closeresetrecord,
  closesettingdialog,
  loadRows,
  markSaved,
  openCheckDialog,
  openeditdialog, openrecord, openresetrecord, opensettingdialog,
  setResetSaveChecked,
  setScenarioName, setScenarioOutline,
  setsearchtermscenario, setselectcolumns
} from '../../featureSlice';
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
  const Scenario=styled(Box)(({theme})=>({
    height:30,
    width:"100%",
    backgroundColor:theme.palette.background.default,
    display:'flex',
    marginTop:'6px',
    alignItems:'center',
    justifyContent:'space-between',
   padding:'0 8px'
  }))
  const Buttonbox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:2,
  })
  const AfterSetting=styled(Button)(({theme})=>({
    minWidth:0,
    width:30,
    backgroundColor:theme.palette.background.paper,
    height:25,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',
  }))
   const Recordi=styled(Button)(({theme})=>({
    minWidth:0,
    width:30,
    backgroundColor:theme.palette.background.paper,
    height:25,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
  }))
  const Tcomponent=styled(Box)({
    flex:1,
    minHeight:0,
    overflow:'auto',
    boxSizing:'border-box',
    paddingBottom:1
  })
  const Stext = styled(TextField)(({theme})=>({
    width:250,
    paddingTop:2,
    marginLeft:4,
     '& .MuiOutlinedInput-root': {
    height: 30,
    backgroundColor: theme.palette.background.paper,
    
    '& input': {
      padding: '6px 8px',
      fontSize: 12,
    }
  },
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
export default function Addscenario() {
 
      const navigate = useNavigate(); 
  const dispatch=useDispatch();
      
   const open = useSelector(state => state.feature.recordopen);
   const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
       const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog("record"))};
  const handleClosecheck = () => {dispatch(closecheckDialog())}
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
   const searchterm = useSelector(state => state.feature.searchtermscenario)
    const openrecordstate = useSelector(state => state.feature.recordopen);
       const handleClose = () => {
     dispatch(closerecord());
   };
   
   const handleConfirm = () => {
     dispatch(closerecord());
   };
   const Opensetting = useSelector(state=>state.feature.settingopen)
   const handleclosesetting = () => {dispatch(closesettingdialog())};
   const handleconfirmsetting = () => {dispatch(closesettingdialog())};

    const scenarioname=useSelector(state=>state.feature.scenarioName);
       const scenariooutline=useSelector(state=>state.feature.scenarioOutline);
       const OpenEditdialog = useSelector(state =>state.feature.editdialogopen)
       const handleCloseEditdialog = () => {dispatch(closeeditdialog())};
        const handleSaveEditdialog = () => {dispatch(closeeditdialog());dispatch(clearScenario());};
        const resetOpen = useSelector(state => state.feature.resetrecordopen);
const resetChecked = useSelector(state => state.feature.resetSaveChecked);
const recordRows = useSelector(state => state.feature.recordRows);
const handleResetConfirm = () => {
  if (resetChecked) {
   chrome.storage.local.set({ ['rows_record']: recordRows }, () => {
  chrome.storage.local.remove('unsaved_record'); 
  dispatch(markSaved('record'));
});
  } else {
    chrome.storage.local.get(['rows_record'], (result) => {
      const saved = result['rows_record'] || [];
      dispatch(loadRows({ page: 'record', rows: saved }));
    });
  }

  dispatch(setResetSaveChecked(true));
  dispatch(closeresetrecord());
  navigate('/scraperui');
};
const handleSaveRecord = async () => {
  if (typeof chrome === "undefined" || !chrome.storage) return;

  await new Promise((resolve) => {
    chrome.storage.local.set({ ['rows_record']: recordRows }, resolve);
  });

  chrome.storage.local.remove('unsaved_record');

  dispatch(markSaved('record'));
};
    return (
    <div>
      <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container isExpanded={isExpanded}>
              <Navcomponent />
          <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
        
        <Pagename isExpanded={isExpanded} />
       <Custombutton isExpanded={isExpanded} label='+ Add Scenario'  onClick={()=>dispatch(openrecord())} width='120px' fontSize='11px' height='30px' expandedHeight='30px'/>
       <CustomDialog
         open={openrecordstate}
         onClose={handleClose}
         showHeader={true}
         showCloseIcon={true}
         title="Record Scenario"
         width={280}
         height={295}
         buttons={[
           {
             label: 'Cancel',
             onClick: handleClose,
             sx: {
               backgroundColor: 'grey.200',
               color: 'grey',
               height: 28,
       
             }
           },
           {
             label: 'Start Recording',
             onClick: handleConfirm,
             width: '125px',
             height: 28
           }
         ]}
         contentSx={{
           justifyContent: 'space-between',
           px: 2,
           py: 1
         }}
       >
         <FormGroup sx={{ gap: 0.5 }}>
           <CustomTextField
             placeholder="Page Name"
             InputProps={{ sx: { fontSize: 12, height: 25 } }}
              placeholderSize="12px"
           />
       
           <CustomTextField
             placeholder="Enter Scenario Name"
             InputProps={{ sx: { fontSize: 12 , height: 25 } }}
             placeholderSize="12px"
           />
       
           <CustomTextField
             placeholder="Enter Scenario Outline"
             multiline
             rows={3}
             height="80px"
             placeholderSize="12px"
             InputProps={{ sx: { fontSize: 13 } }}
           />
       
           <FormControlLabel
             control={<Checkbox />}
             label={
               <Typography fontSize={11}>
                 Capture Screenshots while recording
               </Typography>
             }
             sx={{ mt: -1 }}
           />
         </FormGroup>
       </CustomDialog>
       </Box>
       {!open ? (
       <Scenario >
       
                <Typography sx={{p: 1,fontSize: 13,display: 'flex',alignItems: 'center',gap:0.5}}>
  <span style={{ color: '#6b7280' }}>Scenario Name:</span>
  <Box sx={{backgroundColor:'background.paper',borderRadius:1,width:120}}>
  <span style={{ color: '#2F8BCC', fontWeight: 600,right:2}}>Name</span></Box>
</Typography>
                  
                  <Buttonbox >
                  <CustomIconButton size='small'  onClick={()=>dispatch(opensettingdialog())} height='20px'width='30px' disableBg><SettingsIcon sx={{color:'#2F8BCC',fontSize:18}}/></CustomIconButton>
                <CustomDialog
  open={Opensetting}
  onClose={handleclosesetting}
  showHeader={true}
  showCloseIcon={true}
  title="Settings"
  width={250}
  height={160}
  headerBgColor="#fff"
  contentSx={{
    overflow: 'hidden',
    p: 0
  }}
  actionssx={{
    justifyContent: 'space-between',
    p: 1
  }}
  buttons={[
    {
      label: 'Cancel',
      onClick: handleclosesetting,
      width: '90px',
      height: '30px',
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey'
      }
    },
    {
      label: 'Save',
      onClick: handleconfirmsetting,
      width: '90px',
      height: '30px'
    }
  ]}
>
  <FormGroup sx={{ p: 2, width: 320, mt: -2 }}>
    <FormControlLabel
      control={<Checkbox defaultChecked size="small" />}
      label="Enable Mouse hover event"
      sx={{ '& .MuiFormControlLabel-label': { fontSize: 13 } }}
    />
    <FormControlLabel
      control={<Checkbox size="small" />}
      label="Enable scroll event"
      sx={{ '& .MuiFormControlLabel-label': { fontSize: 13 } }}
    />
  </FormGroup>
</CustomDialog>
                 
                <CustomIconButton size='small' disableBg  height='20px'width='30px'><RadioButtonCheckedIcon sx={{color:'#fe0202',fontSize:18}}/></CustomIconButton>
                <CustomIconButton size='small'  onClick={()=>dispatch(openeditdialog())} disableBg height='20px'width='30px'><CropSquareOutlinedIcon sx={{fontSize:20}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:12,fontSize:19,top:-2,backgroundColor:'background.paper',width:'12px',height:'17px'}}/>
                </CustomIconButton>
                 <CustomDialog
      open={OpenEditdialog}
      onClose={handleCloseEditdialog}
      showHeader={true}
      showCloseIcon={true}
      title="Edit Scenario"

      width={280}
      height={240}

      contentSx={{
        p: 1,
        overflow: 'hidden'
      }}

      actionssx={{
        justifyContent: 'space-between',
        px: 1
      }}

      buttons={[
        {
          label: 'Cancel',
          onClick: handleCloseEditdialog,
          width: '100px',
          height: '25px',
          sx: {
            backgroundColor: 'grey.200',
            color: 'grey'
          }
        },
        {
          label: 'Save',
          onClick: handleSaveEditdialog,
          width: '100px',
          height: '25px'
        }
      ]}
    >
      <FormGroup sx={{ p: 1, gap: 1 }}>
        <CustomTextField
          placeholder="Enter Scenario Name"
          placeholderSize="12px"
          value={scenarioname}
          onChange={(e) => dispatch(setScenarioName(e.target.value))}
        />

        <CustomTextField
          placeholder="Scenario Outline"
          multiline
          rows={3}
          height='80px'
          placeholderSize="12px"
          value={scenariooutline}
          onChange={(e) => dispatch(setScenarioOutline(e.target.value))}
        />
      </FormGroup>
    </CustomDialog>
                <CustomIconButton size='small' disableBg height='20px'width='30px'><DeleteOutlineOutlinedIcon sx={{fontSize:18}} /></CustomIconButton>
        </Buttonbox>
       </Scenario>
       ):(
       <Scenario>
                <Typography  color='text.secondary'  sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Buttonbox>
                <CustomIconButton size='small'  ><SettingsIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
                <CustomIconButton size='small'  ><RadioButtonCheckedIcon sx={{color:'red'}}/></CustomIconButton>
                <CustomIconButton size='small' ><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </CustomIconButton>
                <CustomIconButton size='small'><DeleteOutlineOutlinedIcon /></CustomIconButton>
               
                <CustomIconButton size="small"  ><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
                        
                       <CustomIconButton size='small'><RemoveRedEyeOutlinedIcon /></CustomIconButton>
                <CustomIconButton size="small"  ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
       </Buttonbox>
       </Scenario>
       )}
            <Userstep isExpanded={isExpanded}>
                  <Tbox isExpanded={isExpanded} >
                      <CustomTextField placeholder='Search ' variant='outlined' value={searchterm} onChange={(e)=>dispatch(setsearchtermscenario(e.target.value))} isSearch width="260px" height="25px" placeholderSize="13px"/>
                        <Box sx={{display:'flex',ml:'auto'
                        }}>
                          <CustomIconButton size="small" onClick={()=>dispatch(openresetrecord())} height='25px' width='28px'><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
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
      onClick: handleResetConfirm,
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
                        <CustomIconButton size="small" height='25px' width='28px' onClick={handleSaveRecord}><SaveAltIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
                         <CustomIconButton size="small" onClick={handleOpencheck} height='25px' width='28px'><MoreVertIcon sx={{color:'#2F8BCC'}}/></CustomIconButton>
                     
                       <Checkdialogbox
                                  open={Opencheck}
                                  handleClose={handleClosecheck}
                                  columns={AllColumns}
                                  selectedcolumn={selectedcolumns}
                                  setSelectedColumns={setselectedcolumnshandle} 
                                  page="record"
                                  />
                                   </Box>
                        </Tbox>
                      <Tcomponent>
                     <TableComponent 
                               columns={AllColumns}
                               selectedColumns={selectedcolumns}
                               isExpanded={isExpanded}
                               page="record"
                               />
                     </Tcomponent>
                 </Userstep>
          </Container>
          </Box>
    </div>
  )
}
