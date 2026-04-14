import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Custombutton from '../../component/custombutton';
import Customusersteps from '../../component/customusersteps';
import Loaderprogress from '../../component/loaderprogress';
import Navcomponent from '../../component/navcomponent';
import CustomTextField from '../../component/Textfeild';
import { openLoader, setAnalyzedat, setUrl, setValidUrl } from '../../featureSlice';
const Beforeurl =[
' Enter a valid URL',
<>Click on <b>Analyze</b> to check the response time and load time of the page.</>,
<><b>"Click Here"</b> to test all the links.</>,
<> To view response time,load time,status,date & time of each URL,click <b>"View Report"</b></>,
<>If user wants to stop testing the links,click <b>"Stop"</b></>,
<><b><Link underline="none">Click Here</Link></b> to Know More about Pinglink</>
];
const Afterurl=[
  'Enter a valid URL',
  <><b>Click on "Analyze" to check the response time and load time of the page.</b></>,
  <><b>"Click Here"</b> to test all the links.</>,
  <> To view response time,load time,status,date & time of each URL,click <b>"View Report"</b></>,
  <>If user wants to stop testing the links,click <b>"Stop"</b></>,
  <><b><Link underline="none">Click Here</Link></b> to Know More about Pinglink</>
];
const Mbox = styled(Box)({
boxSizing:'border-box',
width:'auto',        
height:'auto',
})
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

const Body = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  position:'relative',
  backgroundColor: theme.palette.grey[100],
  width: isExpanded ? 600 : 530,   
  marginLeft: 2.5,
  height: isExpanded ? 490 : 390,
  marginTop:4
}))
const Analyze = styled(Button,{
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  marginTop: 1,
   fontFamily:theme.typography.fontFamily,
      height: isExpanded ? 36 : 30,  
      fontSize: isExpanded ? 13 : 11, 
      padding: isExpanded ? 20 : 15, 
}))
const Stop = styled(Button,{
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  marginTop: 1,
  fontFamily:theme.typography.fontFamily,
      width: isExpanded ? 100 : 90,   
      height: isExpanded ? 36 : 30,  
      fontSize: isExpanded ? 13 : 11,
}))
export default function Pingcard() {
  const navigate = useNavigate();
   const dispatch = useDispatch();
   const {url,isValidurl,open} = useSelector((state)=>state.feature);
  const handleUrlchange = (e) =>{
    let value= e.target.value.trim()
    if(value && !value.startsWith("http")){
      value="https://"+value;
    }
    dispatch(setUrl(value));
    try{
     const parseurl=new URL(value);
     dispatch(setValidUrl(parseurl.hostname.includes('.')));
    }
    catch{
      dispatch(setValidUrl(false));
    }
  };
  const handleAnalyze=() =>{
    dispatch(setAnalyzedat(Date.now()));
    dispatch(
      openLoader({
        title:'Analyze',
        message:'Please Wait while we analyze...',
        onComplete:()=>{navigate('/analyze')}
      })
    )
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
    <div>
      <Mbox>
                 <Container  isExpanded={isExpanded}>
                    <Navcomponent />
                 <Box sx={{display:'flex',alignItems:'center', gap:1,mr:1}}>
                  <CustomTextField isSearch isExpanded={isExpanded} placeholder='Enter a Webpage Url' margin='0px 0px 0px 3px' variant='outlined' value={url} 
                  onChange={handleUrlchange} height="25px" width='340px' expandedWidth='380px' expandedHeight='30px' fontSize='12px' placeholderSize='12px'/>
                <Custombutton disabled={!isValidurl} variant='contained' onClick={handleAnalyze} isExpanded={isExpanded} label='Analyze' width='100px' height='35px'/>
                <Custombutton variant='outlined' isExpanded={isExpanded} label="Stop" width='100px' height='35px'/>
                </Box> 
                <Body isExpanded={isExpanded}>
                     
                      {!isValidurl && (
                        <>
                        <Customusersteps steps={Beforeurl}/>
                        </>
                      )}
                      {isValidurl && (
                      <>
                      <Customusersteps steps={Afterurl}/>
                      
                      </>
                      )}
                
               <Loaderprogress />
               
                </Body>
                </Container>
                </Mbox>
    </div>
  )
}
