import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const Cusbutton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ isExpanded }) => ({
  width: isExpanded ? 140 : 120,
  height: isExpanded ? 44 : 40,
  fontSize: isExpanded ? 13 : 12,
  backgroundColor: '#2F8BCC',
  color: '#fff',
  marginTop: 5,
}));
export default function Custombutton({label,onClick, isExpanded}) {
    
  return (
    <div>
      <Cusbutton onClick={onClick} isExpanded={isExpanded}>{label}</Cusbutton>
    </div>
  )
}
