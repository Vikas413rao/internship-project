import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loaderprogress from '../../component/loaderprogress.jsx';
import Navcomponent from '../../component/navcomponent.jsx';
import { openLoader, resetShowfinalReport, setShowfinalReport } from '../../featureSlice.js';
const Mbox = styled(Box)({
  margin:0,
  padding:0,
  boxSizing:'border-box',
  width:530,
  minHeight:380,
})
const Body = styled(Box)({
  position:'relative',
  backgroundColor:'#e3dfdfb6',
  width:530,
  marginLeft:2.5,
  height:390,
  marginTop:4
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
const Container = styled(Box)({
  border:'1px solid #2F8BCC',
  height:'480px',
  width:'535px',
  position:'relative'
})
const Linktype=styled(Typography)({
  fontSize:15,
  fontFamily:'-moz-initial',
  paddingLeft:28,
  paddingTop:5
})
const Reportbox = styled(Box)({
  width:480,
  boxShadow:'3px',
  height:120,
  marginLeft:20,
  marginTop:5,
  borderRadius:'10px',
  backgroundColor:'white'
})
const Reporthead=styled(Box)({
  height:45,
  width:480,
  backgroundColor:'#2F8BCC',
  borderTopLeftRadius:'10px',
  borderTopRightRadius:'10px',
  display:'flex',
  alignItems:'center'
})
const Urltype = styled(Typography)({
position:'absolute',
marginTop:20,
marginLeft:8,
fontWeight:600
})
const Sbox = styled(Box)({
  width:145,
  boxShadow:'3px',
  height:120,
  marginLeft:20,
  marginTop:4,
  borderRadius:'10px',
  backgroundColor:'white'
}) 
const Shead=styled(Box)({
  height:45,
  width:145,
  backgroundColor:'#2F8BCC',
  borderTopLeftRadius:'10px',
  borderTopRightRadius:'10px',
  display:'flex',
  alignItems:'center'
})
const Typehead = styled(Typography)({
  color:'white',
  fontSize:17,
  padding:2
})
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
    

  return (
    <div>
      <Mbox>
                  <Container>
                    <Navcomponent />
                    <Box sx={{display:'flex',alignItems:'center', gap:2}}>
                   <Textb  placeholder="Enter a WebPage url" variant="outlined" value={url}  
                  InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>)}}/>
                <Button  variant='contained' sx={{mt:1}}>Analyze</Button>
                <Button variant="outlined" sx={{mt:1,width:90}}>Stop</Button>
                </Box> 
                <Body>
                {!showFinalReport &&(
                  
                  <Box>
                    <Linktype >We found 52 Links.Do You want to test all links,
                      <Link underline='none' onClick={handleAnalyze} >Click Here</Link></Linktype>
                    <Reportbox >
                      <Reporthead >
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
                       <Sbox>
                      <Shead >
                      <Typehead>Status</Typehead>
                      </Shead>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Sbox>
                      <Sbox>
                      <Shead>
                      <Typehead>Response Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Sbox>
                      <Sbox>
                      <Shead>
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
                    <Linktype>We found 52 Links.Do You want to test all links,<Link underline='none' >View Report</Link></Linktype>
                    <Reportbox>
                      <Reporthead>
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
                       <Sbox>
                      <Shead>
                      <Typehead>Status</Typehead>
                      </Shead>
                       <Typography fontSize={30} sx={{p:2}}>200</Typography>
                      </Sbox>
                      <Sbox>
                      <Shead>
                      <Typehead>Response Time</Typehead>
                      </Shead>
                      <Typography fontSize={30} sx={{p:2}}>0.58 s</Typography>
                      </Sbox>
                      <Sbox>
                      <Shead>
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
