import { Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
const Pagetextfield = styled(TextField)({
  width:300,
  paddingTop:1,
  '& .MuiOutlinedInput-root':{
    disableUnderline:true,
      padding:1,
      fontSize:12,
      height:'35px'
    
  }
})
const Pagetypography =styled(Typography)({
  backgroundColor:'#2F8BCC',
  color:'white',
  height:35,
  paddingLeft:1,
  paddingTop:1,
  marginTop:1,
  paddingRight:1,
  borderTopLeftRadius:5,
  borderBottomLeftRadius:5,
  fontSize:12,
  alignItems:'center',
  display:'flex'
})
export default function Pagename() {
  return (
    <div>
      <Box sx={{display:'flex',alignItems:'center'}}>
      <Pagetypography>Page Name</Pagetypography>
      <Pagetextfield  placeholder="Page Name Here"  variant="outlined" />
    </Box>
    </div>
  )
}
