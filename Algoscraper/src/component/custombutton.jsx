import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const Cusbutton=styled(Button)({
    width:120,
    height:40,
    fontSize:12,
    backgroundColor:'#2F8BCC',
    color:'#fff',
    marginLeft:10,
    marginTop:5
})
export default function Custombutton({label,onClick}) {
    
  return (
    <div>
      <Cusbutton onClick={onClick}>{label}</Cusbutton>
    </div>
  )
}
