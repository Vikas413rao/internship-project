import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
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
import Editscenariodialog from '../../component/editscenariodialog';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import RecordDialog from '../../component/recorddialog';
import Resetrecorddialog from '../../component/resetrecorddialog';
import Settingdialog from '../../component/settingdialog';
import TableComponent from '../../component/Tablecomponent';
import CustomTextField from '../../component/Textfeild';
import { AllColumns, closecheckDialog, openCheckDialog, openeditdialog, openrecord, openresetrecord, opensettingdialog, setsearchtermscenario, setselectcolumns } from '../../featureSlice';
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
    backgroundColor:theme.palette.background.paper,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
   padding:'0 8px'
  }))
  const Buttonbox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:4,
    marginLeft:'auto'
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
  
export default function Addscenario() {
 
      const navigate = useNavigate(); 
  const dispatch=useDispatch();
      
   const open = useSelector(state => state.feature.recordopen);
   const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
       const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog())};
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
       <Custombutton isExpanded={isExpanded} label='+ Add Scenario'  onClick={()=>dispatch(openrecord())}/>
        <RecordDialog mode='addscenario'/>
       </Box>
       {!open ? (
       <Scenario >
                <Typography color='text.secondary' sx={{p:2,fontSize:13}}>Scenario Name:
                  <span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                  <Buttonbox >
                <AfterSetting size='small'  onClick={()=>dispatch(opensettingdialog())}><SettingsIcon sx={{color:'#2F8BCC'}}/></AfterSetting>
                 <Settingdialog />
                 
                <AfterSetting size='small'  ><RadioButtonCheckedIcon sx={{color:'red'}}/></AfterSetting>
                <AfterSetting size='small'  onClick={()=>dispatch(openeditdialog())}><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </AfterSetting>
                <Editscenariodialog />
                <AfterSetting size='small' ><DeleteOutlineOutlinedIcon /></AfterSetting>
        </Buttonbox>
       </Scenario>
       ):(
       <Scenario>
                <Typography  color='text.secondary'  sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Buttonbox>
                <Recordi size='small'  ><SettingsIcon sx={{color:'#2F8BCC'}}/></Recordi>
                 
                <Recordi size='small'  ><RadioButtonCheckedIcon sx={{color:'red'}}/></Recordi>
                <Recordi size='small' ><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </Recordi>
                <Recordi size='small'><DeleteOutlineOutlinedIcon /></Recordi>
               
                <Recordi size="small"  ><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Recordi>
                        
                       <Recordi size='small'><RemoveRedEyeOutlinedIcon /></Recordi>
                <Recordi size="small"  ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></Recordi>
       </Buttonbox>
       </Scenario>
       )}
            <Userstep isExpanded={isExpanded}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                      <CustomTextField placeholder='Search ' variant='outlined' value={searchterm} onChange={(e)=>dispatch(setsearchtermscenario(e.target.value))} isSearch width="200px" height="30px" placeholderSize="13px"/>
                        <Box sx={{display:'flex',ml:'auto',gap:1
                        }}>
                        <Ibutton size="small" onClick={()=>dispatch(openresetrecord())}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Ibutton>
                        <Resetrecorddialog />
                       
                        <Ibutton size="small"  ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></Ibutton>
                        <Ibutton size="small" onClick={handleOpencheck} ><MoreVertIcon sx={{color:'#2F8BCC'}}/></Ibutton>
                       <Checkdialogbox
                                  open={Opencheck}
                                  handleClose={handleClosecheck}
                                  columns={AllColumns}
                                  selectedcolumn={selectedcolumns}
                                  setSelectedColumns={setselectedcolumnshandle} 
                                  />
                                   </Box>
                        </Box>
                      <Box sx={{flexGrow:1,minHeight:250}}>
                     <TableComponent 
                               columns={AllColumns}
                               selectedColumns={selectedcolumns}
                               isExpanded={isExpanded}
                               page="scenario"
                               />
                     </Box>
                 </Userstep>
          </Container>
          </Box>
    </div>
  )
}
