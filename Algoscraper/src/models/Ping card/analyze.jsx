import { Box, Button, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Custombutton from '../../component/custombutton.jsx';
import Loaderprogress from '../../component/loaderprogress.jsx';
import Navcomponent from '../../component/navcomponent.jsx';
import CustomTextField from '../../component/Textfeild.jsx';
import { openLoader, setShowfinalReport } from '../../featureSlice.js';
const Mbox = styled(Box)({
  boxSizing:'border-box',
              width:'auto',        
              height:'auto',
})
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
const Linktype = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  fontSize: isExpanded ? 16 : 15,
  fontFamily: theme.typography.fontFamily,
  paddingLeft: 28,
  paddingTop: 5
}))

const Reportbox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  width: isExpanded ? 560 : 480,   
  height: isExpanded ? 140 : 120,  
  marginLeft: 20,
  marginTop: 5,
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper
}))

const Reporthead = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  height: 45,
  width: isExpanded ? 560 : 480,   
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  display: 'flex',
  alignItems: 'center'
}))
const Urltype = styled(Typography)({
position:'absolute',
marginTop:20,
marginLeft:8,
fontWeight:600
})
const Sbox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  width: isExpanded ? 175 : 145,   
  height: isExpanded ? 140 : 120,  
  marginLeft: 20,
  marginTop: 4,
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper
}))

const Shead = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  height: 45,
  width: isExpanded ? 175 : 145,  
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  display: 'flex',
  alignItems: 'center'
}))
const Typehead = styled(Typography)(({theme})=>({
  color:theme.palette.common.white,
  fontFamily:theme.typography.fontFamily,
  fontSize:17,
  padding:2
}))
const AnalyzeB = styled(Button,{
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
export default function Analyze() {
  const {url,analyzedAt,showFinalReport,open} = useSelector((state)=>state.feature);
  const dispatch = useDispatch();
  const location=useLocation();
  
  const handleAnalyze=() =>{
      dispatch(
        openLoader({
          title:'Analyze',
          message:'Please Wait while we analyze...',
          onComplete:() =>{dispatch(setShowfinalReport())}
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
                 <CustomTextField isExpanded placeholder='Enter a Webpage Url' variant='outlined' value={url} margin='0px 0px 0px 3px'
                 isSearch={true} height="25px" width='340px' expandedWidth='380px' expandedHeight='30px' fontSize='12px' placeholderSize='12px'/>
               
                 <Custombutton label='Analyze'  isExpanded={isExpanded} width='100px' height='35px'/>
                 <Custombutton  variant="outlined" label='Stop' isExpanded={isExpanded} width='100px' height='35px' sx={{color:'#1976d2'}}/>
               
                </Box> 
                <Body  isExpanded={isExpanded}>
                {!showFinalReport &&(
                  
                  <Box>
                    <Linktype isExpanded={isExpanded}>We found 52 Links.Do You want to test all links,
                      <Link underline='none' onClick={handleAnalyze} >Click Here</Link></Linktype>
                    <Reportbox isExpanded={isExpanded}>
                      <Reporthead isExpanded={isExpanded}>
                        <Typehead >Your Report</Typehead>
                        <Typography sx={{color:'white',ml:20}}>{analyzedAt && 
                          `${new Date(analyzedAt).toLocaleDateString('en-IN',{
                            day:'2-digit',
                            month:'short',
                            year:'numeric'
                          })}
                          ${new Date(analyzedAt).toLocaleTimeString('en-IN',{
                            hour:'2-digit',
                            minute:'2-digit',
                            second:'2-digit'
                          })}`
                          }</Typography>
                      </Reporthead>
                      <Urltype>Given URL:<Link href={url} >{url}</Link></Urltype>
                      </Reportbox>
                      <Box sx={{display:'flex',alignItems:'center'}}>
                       <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded} >
                      <Typehead>Status</Typehead>
                      </Shead>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Sbox >
                      <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded}>
                      <Typehead>Response Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Sbox>
                      <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded}>
                      <Typehead>Load Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>2.41 s</Typography>
                      </Sbox>
                      </Box>
                  </Box>
                )}
                

                    <Loaderprogress />
                {showFinalReport && (
                  <Box>
                    <Linktype isExpanded={isExpanded}>We found 52 Links.Do You want to test all links,<Link underline='none' >View Report</Link></Linktype>
                    <Reportbox isExpanded={isExpanded}>
                      <Reporthead isExpanded={isExpanded}>
                        <Typehead>Your Report</Typehead>
                         <Typography sx={{color:'white',ml:20}}>{analyzedAt && 
                          `${new Date(analyzedAt).toLocaleDateString('en-IN',{
                            day:'2-digit',
                            month:'short',
                            year:'numeric'
                          })}
                          ${new Date(analyzedAt).toLocaleTimeString('en-IN',{
                            hour:'2-digit',
                            minute:'2-digit',
                            second:'2-digit'
                          })}`
                          }</Typography>
                      </Reporthead>
                      <Urltype>Given URL:<Link href={url} >{url}</Link></Urltype>
                      </Reportbox>
                      <Box sx={{display:'flex',alignItems:'center'}}>
                       <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded}>
                      <Typehead>Status</Typehead>
                      </Shead>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Sbox>
                      <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded}>
                      <Typehead>Response Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Sbox>
                      <Sbox isExpanded={isExpanded}>
                      <Shead isExpanded={isExpanded}>
                      <Typehead>Load Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>2.41 s</Typography>
                      </Sbox>
                      </Box>
                  </Box>
                )}
                </Body>
                    </Container>
                    </Mbox>
    </div>
  )
}
