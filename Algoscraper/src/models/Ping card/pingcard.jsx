import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Customusersteps from '../../component/customusersteps';
import Loaderprogress from '../../component/loaderprogress';
import Navcomponent from '../../component/navcomponent';
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
margin:0,
padding:0,
boxSizing:'border-box',
width:530,
minHeight:380
})
const Container = styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'
})
const Textb=styled(TextField)({
  width:300,
  marginTop:4,
  marginLeft:4,
  '& .MuiOutlinedInput-root':{
  fontSize:12,
  height:30,
  backgroundColor:'white'
  }
})
const Body = styled(Box)({
  position:'relative',
  backgroundColor:'#e3dfdfb6',
  width:530,
  marginLeft:2.5,
  height:390,
  marginTop:4
})
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

    return (
    <div>
      <Mbox>
                  <Container  >
                    <Navcomponent />
                 <Box sx={{display:'flex',alignItems:'center', gap:2}}>
                  <Textb  placeholder="Enter a WebPage url" variant="outlined" value={url} onChange={handleUrlchange} 
                  InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>)}}/>
                <Button disabled={!isValidurl} variant='contained' sx={{mt:1}} onClick={handleAnalyze}>Analyze</Button>
                <Button variant="outlined" sx={{mt:1,width:90}}>Stop</Button>
                </Box> 
                <Body>
                     
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
