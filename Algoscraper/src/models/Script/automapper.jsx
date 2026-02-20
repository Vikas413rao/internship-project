import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import { updateTaskprogress } from "../../featureSlice";

const Container = styled(Box)(({theme})=>({
border:`1px solid ${theme.palette.primary.main}`,
height:'480px',
width:'535px',
position:'relative'
}))
const Scenariob=styled(Box)(({theme})=>({
backgroundColor:theme.palette.primary.main,
height:30,
padding:4,
marginLeft:5,
marginRight:5,
marginTop:2,
borderTopLeftRadius:'5px',
borderTopRightRadius:'5px'
}))
const Btask = styled(Box)(({theme})=>({
    backgroundColor:theme.palette.background.paper,
    boxShadow:'2px 1px 3px rgba(0,0,0,0.2)',
    height:40,
    padding:1,
    borderRadius:theme.shape.borderRadius,
    marginTop:2,
    display:'flex',
    justifyContent:'space-between'
}))
const Lprogress = styled(LinearProgress)(({theme,progress})=>({
    height:6,
    borderRadius:theme.shape.borderRadius,
    marginTop:2,
    backgroundColor:theme.palette.background.paper,
    '& .MuiLinearProgress-bar': {
         backgroundColor: getColor(progress),
         borderRadius:theme.shape.borderRadius
    }
})) 
const getColor = (progress) => {
  if (progress < 40) return "#f44336";
  if (progress < 80) return "#ff9800";
  return "#4caf50";
};
export default function Automapper(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const tasks =useSelector((state)=>state.feature.task);
                useEffect(() => {
  const interval = setInterval(() => {
   dispatch(updateTaskprogress());
     
   
  }, 700);

  const stop = setTimeout(() => {
    clearInterval(interval);
    setLoading(false);
  }, 6000);

  return () => {
    clearInterval(interval);
    clearTimeout(stop);
  };
}, [dispatch]);
return(
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
               <Pagename />
              </Box>
              </Box>
              {/*scenario */}
              <Scenariob ><Typography sx={{color:'white',fontSize:'13px',p:1}}>Scenario Name</Typography>
              {tasks.map((task) =>(
              <Btask key={task.id}>
                <Typography sx={{fontSize:13,pl:1,color:'text.secondary'}}>{task.name}</Typography>
                <Box sx={{right:0}}>
                <Typography fontSize={12} color='text.secondary'><b style={{color:getColor(task.progress)}}>{task.progress}%</b>{task.progress === 100 ? 'Completed' : 'Mapping...'}</Typography>
                
                <Lprogress variant='determinate' value={task.progress} progress={task.progress}/>
              
              </Box>
              <Button size='small' sx={{minWidth:0}} onClick={()=>navigate('/scenariofile')}>
              <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
              <NorthEastOutlinedIcon sx={{ position: "absolute",bottom:16,right: 1,fontSize: 15,backgroundColor:'transparent',borderRadius: "50%",color:'#2F8BCC' }}/>
              </Button>
              </Btask>
             
              ))}
               
              </Scenariob>
          </Container>
          </Box>
  </div>
)
}