import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoader, setProgress } from '../featureSlice';

const Pbox = styled(Box)({
    position:'fixed',
    inset:0,
    backgroundColor:'rgba(0,0,0,0.45)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    zIndex:2000
})
export default function Loaderprogress() {
  const {open,progress,title,message,onComplete} = useSelector ((state)=>state.feature);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    if (!open )return;

    const timer = setInterval(()=>{
        dispatch(setProgress(Math.min(progress +10,100)))

      },300);

    return () => clearInterval(timer);
  }, [open,progress,dispatch]);
  useEffect(()=>{
    if(progress >=100 && open){
      dispatch(closeLoader());
      if(onComplete){
        onComplete();
      }

    }
  },[open,progress,dispatch])
  if(!open) return null;

  
  return (
    <div>
      <Pbox>
        <Box sx={{textAlign:'center',color:'white'}}>
        <CircularProgress 
        variant='determinate'
        value={progress}
        size={70}
        thickness={4}
        sx={{color:'#fff'}}
        />
        <Typography mt={2} fontSize={16} fontWeight={600}>
            {title}
        </Typography>
        <Typography>
            {message}
        </Typography>
        </Box>
      </Pbox>
    </div>
  )
}
