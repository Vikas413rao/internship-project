import { CircularProgress, Typography,Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import useLoaderprogress from '../hooks/useloaderprogress';

const Pbox = styled(Box)({
    position:'fixed',
    inset:0,
    backgroundColor:'rgba(0,0,0,0.45)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    zIndex:2000
})
export default function Loaderprogress({open,onComplete,
    title='Please Wait',
    message=''
}) {
  const progress= useLoaderprogress(open,onComplete);

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
