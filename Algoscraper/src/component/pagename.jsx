import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const Pagetextfield = styled(TextField)(({ theme }) => ({
  width: 300,
  '& .MuiOutlinedInput-root': {
    fontSize: 11,
    height: '35px',
    borderTopLeftRadius: 0, 
    borderBottomLeftRadius: 0,
    '& fieldset': {
      borderLeft: 'none', 
    },
  },
}));
const Pagetypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  color: 'white',
  height: '35px',
  padding: '0 12px', 
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  fontSize: 12,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap', 
}));
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
