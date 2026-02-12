import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const Usertyp=styled(Typography)({
textDecoration:'underline',
fontSize:14,
paddingLeft:10,
paddingTop:6
})
export default function Customusersteps({steps}) {
  return (
    <div>
      <Box>
    <Usertyp>User Steps:</Usertyp>
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
const Algo=styled(Typography)({
    fontWeight:600,
    fontSize:'14px',
    color:'#6b6b6b',
    fontFamily:'Poppins,sans-serif'
})
const Qatype=styled(Typography)({
    fontWeight:700,
    fontSize:'16px',
    color:'#2F8BCC',
    fontFamily:'Poppins,sans-serif'
})
export const AlgoQA=()=>{
    return(
    <>
    <Algo component='span'>algo</Algo>
    <Qatype component='span'>QA</Qatype>
    </>
    );
}
