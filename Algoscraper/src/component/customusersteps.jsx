import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const Usertyp = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  textDecoration: 'underline',
  fontSize: isExpanded ? 16 : 14,
  paddingLeft: 10,
  paddingTop: isExpanded ? 10 : 6,
  fontFamily: theme.typography.fontFamily,
}));
export default function Customusersteps({steps,isExpanded}) {
  return (
    <div>
      <Box>
    <Usertyp isExpanded={isExpanded}>User Steps:</Usertyp>
    <ul style={{paddingLeft:45,margin:0}}>
        {steps.map((steps,index)=>(
            <li key={index}>
                <Typography sx={{fontSize:12}}>
                {steps}
                </Typography>
            </li>
        ))}
    </ul>
      </Box>
    </div>
  )
}
const Algo=styled(Typography)(({theme})=>({
    fontWeight:600,
    fontSize:'14px',
    color:'#6b6b6b',
    fontFamily: theme.typography.fontFamily,
}))
const Qatype=styled(Typography)(({theme})=>({
    fontWeight:700,
    fontSize:'16px',
    color:'#2F8BCC',
    fontFamily: theme.typography.fontFamily,
}))
export const AlgoQA=()=>{
    return(
    <>
    <Algo component='span'>algo</Algo>
    <Qatype component='span'>QA</Qatype>
    </>
    );
}
