import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Checkdialogbox from '../../component/checkdialogbox';
import Custombutton from '../../component/custombutton';
import Customdialogbox from '../../component/customdialogbox';
import Editscenariodialog from '../../component/editscenariodialog';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import Resetrecorddialog from '../../component/resetrecorddialog';
import Settingdialog from '../../component/settingdialog';
import TableComponent from '../../component/Tablecomponent';
import { AllColumns, closecheckDialog, openCheckDialog, openeditdialog, openresetrecord, opensettingdialog, setselectcolumns } from '../../featureSlice';
import useCustomdialogbox from '../../hooks/customdialogboxhooks';
const Container= styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'

})
const Userstep=styled(Box)({
    position:'absolute',
    backgroundColor:'#edeaeac1',
    height:355,
    width:530,
    marginLeft:2,
    display:'flex',
    flexDirection:'column',
    marginTop:2,
  })
  const Scenario=styled(Box)({
    height:30,
    width:527,
    backgroundColor:'whitesmoke',
    marginLeft:3,
    marginRight:0.5,
    marginTop:0.5,
    display:'flex',
    alignItems:'center',
    position:'relative',
    zIndex:10
  })
  const Buttonbox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:4,
    marginLeft:10
  })
  const Setting=styled(Button)({
    minWidth:0,
    width:30,
    backgroundColor:'white',
    height:25,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',
    left:200,
  })
  const AfterSetting=styled(Button)({
    minWidth:0,
    width:30,
    backgroundColor:'white',
    height:25,
    boxShadow:'0px 2px 6px rgba(0,0,0,0.1)',
    left:120,
  })
  const Stext = styled(TextField)({
    width:250,
    paddingTop:2,
    marginLeft:4,
    '& .MuiOutlinedInput-root':{
      disableUnderline:true,
      padding:1,
      fontSize:12,
      height:30,
      bgcolor:'white'
    }
  })
  const Ibutton=styled(Button)({
backgroundColor:'white',
marginTop:3,
marginRight:1,
padding:1,
minWidth:0,
width:36,
boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
})
  
export default function Addscenario() {
 
      const navigate = useNavigate(); 
  const dispatch=useDispatch();
      
   
   const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
       const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog())};
  const handleClosecheck = () => {dispatch(closecheckDialog())}
   const {open,handleClose,handleOpen,handleConfirm}=useCustomdialogbox();
   

   
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
            <Container>
              <Navcomponent />
          <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
        
        <Pagename />
       <Custombutton label='+ Add Scenario'  onClick={handleOpen}/>
         <Customdialogbox open={open} onClose={handleClose} onConfirm={()=>{handleConfirm()}} title='Record Scenario' confirmlabel='Start Recording' canclelabel='Cancel'>
      <FormGroup sx={{p:2}}>
            <TextField id="outlined-basic" placeholder='Page Name' variant="outlined" required  InputProps={{sx:{fontSize:13,height:40}}} /><br></br>
            <TextField  placeholder='Enter Scenario Name' variant="outlined" InputProps={{sx:{fontSize:13,height:40}}}/><br></br>
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
    </Typography>}/>
          </FormGroup>
      </Customdialogbox>
       </Box>
       {!open ? (
       <Scenario >
                <Typography sx={{p:2,fontSize:13}}>Scenario Name:
                  <span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                  <Buttonbox >
                <Setting size='small'  onClick={()=>dispatch(opensettingdialog())}><SettingsIcon sx={{color:'#2F8BCC'}}/></Setting>
                 <Settingdialog />
                 
                <Setting size='small'  ><RadioButtonCheckedIcon sx={{color:'red'}}/></Setting>
                <Setting size='small'  onClick={()=>dispatch(openeditdialog())}><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </Setting>
                <Editscenariodialog />
                <Setting size='small' ><DeleteOutlineOutlinedIcon /></Setting>
        </Buttonbox>
       </Scenario>
       ):(
       <Scenario>
                <Typography sx={{p:2,fontSize:13}}>Scenario Name:<span style={{color:'#2F8BCC',fontWeight:600}}>Name</span></Typography>
                <Buttonbox>
                <AfterSetting size='small'  ><SettingsIcon sx={{color:'#2F8BCC'}}/></AfterSetting>
                 
                <AfterSetting size='small'  ><RadioButtonCheckedIcon sx={{color:'red'}}/></AfterSetting>
                <AfterSetting size='small' ><CropSquareOutlinedIcon sx={{fontSize:24}}/>
                <EditOutlinedIcon sx={{position:'absolute',left:10,fontSize:20,top:1}}/>
                </AfterSetting>
                <AfterSetting size='small'><DeleteOutlineOutlinedIcon /></AfterSetting>
               
                <AfterSetting size="small"  ><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></AfterSetting>
                        
                       <AfterSetting size='small'><RemoveRedEyeOutlinedIcon /></AfterSetting>
                <AfterSetting size="small"  ><SystemUpdateAltIcon sx={{color:'#2F8BCC'}}/></AfterSetting>
       </Buttonbox>
       </Scenario>
       )}
            <Userstep>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                      <Stext id="outlined-basic" placeholder="Search"  variant="outlined" InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>)}} />
                        <Box sx={{display:'flex',ml:20}}>
                        <Ibutton size="small" onClick={()=>dispatch(openresetrecord())}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Ibutton>
                        <Resetrecorddialog />
                        </Box>
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
                      <Box sx={{flexGrow:1,mt:1,ml:2,minHeight:250}}>
                     <TableComponent 
                               columns={AllColumns}
                               selectedColumns={selectedcolumns}
                               />
                     </Box>
                 </Userstep>
          </Container>
          </Box>
    </div>
  )
}
