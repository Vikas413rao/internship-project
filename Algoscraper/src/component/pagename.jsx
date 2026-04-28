import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Pagetextfield = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isExpanded' && prop !== 'fieldWidth' && prop !== 'expandedFieldWidth',
})(({ theme, isExpanded, fieldWidth, expandedFieldWidth }) => ({
  width: isExpanded ? expandedFieldWidth : fieldWidth,
  '& .MuiOutlinedInput-root': {
    fontSize: isExpanded ? 13 : 11,
    height: '30px',
    marginTop: '1px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '& fieldset': {
      borderLeft: 'none',
    },
  },
}));

const Pagetypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  backgroundColor: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  color: 'white',
  height: '30px',
  marginTop: '1px',
  padding: '0 12px',
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  fontSize: isExpanded ? 14 : 12,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}));

export default function Pagename({
  isExpanded,
  width = 300,
  expandedWidth = 330,
}) {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Pagetypography isExpanded={isExpanded}>Page Name</Pagetypography>
        <Pagetextfield
          isExpanded={isExpanded}
          fieldWidth={width}
          expandedFieldWidth={expandedWidth}
          placeholder="Page Name Here"
          variant="outlined"
        />
      </Box>
    </div>
  );
}