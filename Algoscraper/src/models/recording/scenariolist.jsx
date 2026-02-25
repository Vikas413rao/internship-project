import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Custombutton from '../../component/custombutton';
import Customdialogbox from '../../component/customdialogbox';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import { openeditdialog } from '../../featureSlice';
import useCustomdialogbox from '../../hooks/customdialogboxhooks';
const Container= styled(Box)(({theme})=>({
  border:`1px solid ${theme.palette.primary.main}`,
  height:'480px',
  width:'535px',
  position:'relative'

}))
const Scenario = styled(Box)({
backgroundColor:'whitesmoke',
height:30,
width:520,
marginLeft:4,
marginRight:4,
paddingTop:4,
marginTop:3,
borderRadius:'5px',
display:'flex',
alignItems:'center'
})
const List=styled(Box)(({theme})=>({
display:'flex',
alignItems:'center',
justifyContent:'space-between',
border:`1px solid ${theme.palette.grey[100]}`,
borderRadius:'6px',
padding:'4px',
marginBottom:4,
backgroundColor:theme.palette.common.white,
width:500,
marginLeft:4,
marginTop:4
}))
export default function Scenariolist() {
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const {open,handleOpen,handleClose,handleConfirm}=useCustomdialogbox();
    
          const handleedit = () =>{
           dispatch(openeditdialog());
            navigate('/addscenario');
              
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
            <Container >
              <Navcomponent />
                {/*record scenario */}
          <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
      
        <Pagename />
        <Custombutton label='Record Action' onClick={handleOpen} />
        <Customdialogbox open={open} onClose={handleClose} onConfirm={handleConfirm} confirmlabel='Start Recording' canclelabel='Cancel' title='Record Scenario'>
<FormGroup sx={{p:2}}>
            <TextField id="outlined-basic" placeholder='Page Name' variant="outlined" required  InputProps={{sx:{fontSize:13,height:40}}} /><br></br>
            <TextField id="outlined-basic" placeholder='Enter Scenario Name' variant="outlined" InputProps={{sx:{fontSize:13,height:40}}}/><br></br>
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

            {/*scenario name */}
            <Scenario >
            <Typography sx={{fontSize:12,p:2}}>Scenarios_List</Typography>
            <Button size='small' sx={{color:'black',minWidth:0,ml:40}}><SaveAltIcon sx={{fontSize:20}}/></Button>
            <Button disabled size='small' sx={{minWidth:0,p:2}}><DeleteOutlineOutlinedIcon sx={{fontSize:20}} /></Button>
            </Scenario>
            {/*Scenario list */}  
          <Box>
            <List >
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
                <Button size='small' sx={{minWidth:0}}  onClick={handleedit}>
                  <DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></Button>
                <Button size='small' sx={{minWidth:0}}>
                  <DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></Button>
                </Box>
                
                </List>
                 <List>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
                <Button size='small' sx={{minWidth:0}} onClick={handleedit}>
                  <DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></Button>
                <Button size='small' sx={{minWidth:0}}><DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></Button>
                </Box>
                
                </List>
                
          </Box>
          </Container> 
          
      </Box>
    
    </div>
  )
}
