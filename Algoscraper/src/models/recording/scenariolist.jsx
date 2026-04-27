import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Custombutton from '../../component/custombutton';
import CustomIconButton from '../../component/iconbutton';
import Navcomponent from '../../component/navcomponent';
import Pagename from '../../component/pagename';
import RecordDialog from '../../component/recorddialog';
import { openeditdialog, openrecord } from '../../featureSlice';
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
const Scenario = styled(Box)(({theme})=>({
backgroundColor:theme.palette.scenario.bgcolor,
height:30,
margin:4,
borderRadius:'5px',
display:'flex',
alignItems:'center',
justifyContent:'space-between',
padding:'0 8px'
}))
const List = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
display:'flex',
alignItems:'center',
justifyContent:'space-between',
border:`1px solid ${theme.palette.grey[300]}`,
borderRadius:'6px',
padding:'6px 8px',
marginBottom:4,
height:30,
backgroundColor:theme.palette.background.paper,
 width: isExpanded ? '560px' : '500px', 
  marginLeft: 4,
  transition: 'all 0.3s ease',
}))
export default function Scenariolist() {
    const navigate=useNavigate();
    const dispatch =useDispatch();

    
          const handleedit = () =>{
           dispatch(openeditdialog());
            navigate('/addscenario');
              
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
                {/*record scenario */}
          <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
      
        <Pagename isExpanded={isExpanded}/>
        <Custombutton isExpanded={isExpanded} onClick={()=>dispatch(openrecord())} label='Record Action' width='120px' height='30px'/>
              <RecordDialog mode='scenario' />
         
        </Box>

            {/*scenario name */}
            <Scenario >
            <Typography sx={{fontSize:12,p:2}}>Scenarios_List</Typography>
      <CustomIconButton sx={{ ml: 42 }} height='25px' disableBg>
  <SaveAltIcon sx={(theme) => ({
    fontSize: 17,
    color: theme.palette.icon.primary
  })} />
</CustomIconButton>
<CustomIconButton disabled sx={{ p: 2 }} disableBg height='28px'>
  <DeleteOutlineOutlinedIcon sx={{ fontSize: 17 }} />
</CustomIconButton>
            </Scenario>
            {/*Scenario list */}  
          <Box sx={{p:1}}>
            <List isExpanded={isExpanded}>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' height='25px' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
                  <CustomIconButton size='small'  onClick={handleedit} height='20px' width='25px'>
                  <DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></CustomIconButton>
                <CustomIconButton size='small' height='20px' width='25px'><DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></CustomIconButton>
                
                </Box>
                
                </List>
                 <List isExpanded={isExpanded}>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Checkbox size='small' /> <Typography fontSize={13}>Scenario_Outline will be shown here</Typography>
                </Box>
                <Box>
               <CustomIconButton size='small'  onClick={handleedit} height='20px' width='25px'>
                  <DriveFileRenameOutlineSharpIcon sx={{color:'#2F8BCC',fontSize:20}}/></CustomIconButton>
                <CustomIconButton size='small' height='20px' width='25px'><DeleteOutlineOutlinedIcon color='red' sx={{fontSize:20}}/></CustomIconButton>
                </Box>
                
                </List>
                
          </Box>
          </Container> 
          
      </Box>
    
    </div>
  )
}
