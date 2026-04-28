import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import { Box, LinearProgress, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomIconButton from "../../component/iconbutton";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import { updateTaskprogress } from "../../featureSlice";
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
const Scenariob=styled(Box)(({theme})=>({
backgroundColor:theme.palette.primary.main,
height:35,
padding:'4px 3px 2px',
marginLeft:5,
marginRight:5,
marginTop:2,
borderTopLeftRadius:'5px',
borderTopRightRadius:'5px'
}))
const Btask = styled(Box)(({theme})=>({
    backgroundColor:theme.palette.background.default,
    boxShadow:' 3px 4px 5px rgba(0,0,0,0.2)',
    height:35,
    padding: '4px 6px',
    borderRadius:theme.shape.borderRadius,
    marginTop:5,
    display:'flex',
    justifyContent:'space-between',
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
return(
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
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
               <Pagename isExpanded={isExpanded} width='420px' expandedWidth='480px'/>
              </Box>
              </Box>
              {/*scenario */}
              <Scenariob ><Typography sx={{color:'white',fontSize:'13px',p:1}}>Scenario Name</Typography>
              {tasks.map((task) =>(
              <Btask key={task.id}>
                <Typography sx={{fontSize:13,p:1,color:'text.secondary'}}>{task.name}</Typography>
                <Box sx={{right:0}}>
                <Typography fontSize={12} color='text.secondary'><b style={{color:getColor(task.progress)}}>{task.progress}%</b>{task.progress === 100 ? 'Completed' : 'Mapping...'}</Typography>
                
                <Lprogress variant='determinate' value={task.progress} progress={task.progress}/>
              
              </Box>
              <CustomIconButton
  onClick={() => navigate('/scenariofile')}
  height='20px'
  sx={{mt:1}}
>
              <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
              <NorthEastOutlinedIcon sx={{ position: "absolute",bottom:8,right: 7,fontSize: 12,backgroundColor:'background.paper',borderRadius: "50%",color:'#2F8BCC' }}/>
              </CustomIconButton>
              </Btask>
             
              ))}
               
              </Scenariob>
          </Container>
          </Box>
  </div>
)
}