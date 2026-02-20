import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Customusersteps, { AlgoQA } from '../../component/customusersteps.jsx';
import Navcomponent from '../../component/navcomponent.jsx';
const stepsdata = [
  <><b>Drag and drop your feature file,or click Browse to select and upload it.</b></>,
  <>Click <b>Scrape UI</b> to extract all UI elements from screen.</>,
  <>After the elements are captured , click <b>"Auto-Mapper"</b> to link them with the feature steps.</>,
  <> Finally, click <AlgoQA />  to create a new project in the algoQA platform.</>,
<><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Record Action.</>
]

const Container= styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'

})
const Dropfile=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  backgroundColor:theme.palette.grey[200],
  width:360,
  padding:4,marginLeft:4,
  marginTop:4,
  borderRadius:theme.shape.borderRadius
}))
const Typo=styled(Box)(({theme})=>({
  color:theme.palette.grey[500]
}))
const Ficon=styled(Icon)(({theme})=>({
marginLeft:'170px',
color:theme.palette.primary.main
}))
const Bbutton = styled(Button)(({theme})=>({
color:theme.palette.primary.main,
fontSize:11,
width:120,
height:40,
marginTop:8,
fontWeight:600
}))
const Stepsuser= styled(Box)(({theme})=>({
  backgroundColor:theme.palette.grey[200],
  width:528,
  height:'386px',
  marginLeft:3,
  marginTop:2
}))


export default function Futurescript() {
  const navigate=useNavigate();
    return (
        <>
        <Box
                sx={{
                  m:0,
                  p:0,
                  boxSizing:'border-box',
                  width: 530,        
                  minHeight: 380,
                }}
              >
            <Container>
              <Navcomponent />
              <Box sx={{display:'flex',alignItems:'center',gap:1}}>
            <Dropfile  onClick={()=>navigate('/emptyscraper')}>
              <Typo >Drag & Drop your file(S)</Typo>
            <Ficon ><CreateNewFolderIcon /></Ficon>
            </Dropfile>
            <Bbutton variant='outlined' onClick={()=>navigate('/emptyscraper')}>Browse files</Bbutton>
            </Box>
            <Stepsuser>
              <Customusersteps steps={stepsdata}/>
            </Stepsuser>
            </Container>
            </Box>
       </>
  )
}
