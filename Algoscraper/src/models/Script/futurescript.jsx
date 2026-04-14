import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Custombutton from '../../component/custombutton.jsx';
import Customusersteps, { AlgoQA } from '../../component/customusersteps.jsx';
import Navcomponent from '../../component/navcomponent.jsx';
import { setFile } from '../../featureSlice.js';
const stepsdata = [
  <><b>Drag and drop your feature file,or click Browse to select and upload it.</b></>,
  <>Click <b>Scrape UI</b> to extract all UI elements from screen.</>,
  <>After the elements are captured , click <b>"Auto-Mapper"</b> to link them with the feature steps.</>,
  <> Finally, click <AlgoQA />  to create a new project in the algoQA platform.</>,
<><Link underline='none' href='#' sx={{fontSize:12}}> Click Here </Link> to know More about Record Action.</>
]

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  border: `1px solid ${theme.palette.primary.main}`,

  width: isExpanded ? '600px' : '530px',
  height: isExpanded ? '530px' : '430px',

  position: 'relative',  
  margin: 0,

  backgroundColor: theme.palette.background.paper,

  overflow: 'hidden',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
}));
const Dropfile = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[200],
  width: isExpanded ? 460 : 380,  
  padding: 4,
  marginLeft: 4,
  marginTop: 4,
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease',
}));
const Typo=styled(Box)(({theme})=>({
  color:theme.palette.grey[500],
  fontFamily:theme.typography.fontFamily,
  fontSize:13
}))
const Ficon = styled(Icon, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  marginLeft: isExpanded ? '250px' : '170px', 
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));
const Bbutton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  color: theme.palette.primary.main,
  fontSize: 11,
  width: isExpanded ? 130 : 120,   
  height: 40,
  marginTop: 8,
  fontWeight: 600,
  fontFamily:theme.typography.fontFamily,
  transition: 'all 0.3s ease',
}));
const Stepsuser = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  backgroundColor: theme.palette.grey[200],
  width: isExpanded ? 598 : 528,   // ← expands with container
  height: isExpanded ? '476px' : '386px',  // ← grows taller
  marginLeft: 3,
  marginTop: 2,
  transition: 'all 0.3s ease',
}));

export default function Futurescript() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const fileInputref = useRef(null);
  const handleFilechange = (e)=>{
    const file = e.target.files[0];
    if(file){
      dispatch(setFile(file));
      navigate('/emptyscraper');
    }
  };
  const handleDrag = (e) =>{
    e.preventDefault();
    e.stopPropagation()
  }
  const handledrop = (e)=>{
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;

if(files && files.length >0)
{
  const file=files[0];
  dispatch(setFile(file))
  navigate('/emptyscraper')
}
}

const openFilemanager = (e)=>{
  if(fileInputref.current){
    fileInputref.current.click();
  }
}
const isExpanded = useSelector(state => state.feature.isExpanded);
 useEffect(() => {
    const body = document.body;
    if (isExpanded) {
      body.style.width = '600px';
      body.style.height = '530px';
    } else {
      body.style.width = '530px';
      body.style.height = '430px';
    }
  }, [isExpanded]);
    return (
        <>
       <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container  isExpanded={isExpanded}>
              <Navcomponent />
              <Box sx={{display:'flex',alignItems:'center',gap:1}}>
                <input type='file' ref={fileInputref} style={{display:'none'}} onChange={handleFilechange}/>
            <Dropfile  isExpanded={isExpanded} onClick={openFilemanager}onDragOver={handleDrag} onDragEnter={handleDrag} onDrop={handledrop}>
              <Typo >Drag & Drop your file(S)</Typo>
            <Ficon isExpanded={isExpanded}><CreateNewFolderIcon /></Ficon>
            </Dropfile>
            <Custombutton isExpanded={isExpanded} variant="outlined" onClick={openFilemanager} label='Browse Files' width='120px' height='35px' fontSize='12px'/>
          
            </Box>
            <Stepsuser isExpanded={isExpanded}>
              <Customusersteps steps={stepsdata} isExpanded={isExpanded}/>
            </Stepsuser>
            </Container>
            </Box>
       </>
  )
}
