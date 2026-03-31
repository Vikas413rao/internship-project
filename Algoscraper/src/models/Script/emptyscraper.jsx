import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from '../../assets/image.png';
import Custombutton from "../../component/custombutton";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import { clearfile, setFilecontent } from "../../featureSlice";
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
const Filebox = styled(Box)(({theme})=>({
backgroundColor:theme.palette.grey[300],
padding:'2px 8px',
marginTop:4,
marginLeft:4,
borderRadius:theme.shape.borderRadius,
display:'inline-flex',
alignItems:'center',
gap:2,
width:'fit-content',
maxWidth:'95%'
}))
const Imgbox = styled(Box)(({ theme, Expanded }) => ({
  backgroundColor: theme.palette.grey[100],
  marginLeft: 2,
  marginRight: 2,
  height: Expanded ? 450 : 357,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  transition: 'all 0.3s ease'
}));
const Filename = styled(Typography)(({theme})=>({
  color:theme.palette.primary.main,
  fontSize:14,
  maxWidth:250,
  overflow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap'
}))
export default function EmptyScraper () {
     const  navigate=useNavigate();
     const dispatch = useDispatch();
     const file = useSelector((state)=>state.feature.file);
     const filename=useSelector((state)=>state.feature.filename);
     const content = useSelector((state)=>state.feature.filecontent);
     useEffect (()=>{
      if(file){
        const reader = new FileReader();

        reader.onload=(e)=>{
          dispatch(setFilecontent(e.target.result));
        };
        reader.readAsText(file)
      }
     })
     const handleClosefile = () =>{
      dispatch(clearfile());
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
    return(
         <div>
          <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container  isExpanded={isExpanded}>
              <Navcomponent />
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
              <Pagename  isExpanded={isExpanded}/>
              <Custombutton  isExpanded={isExpanded} label='Scraper UI' onClick={()=>navigate('/tablescreen')}/>
              </Box>
              {/*file name */}
              <Filebox >
                <InsertDriveFileOutlinedIcon fontSize='small' />
                <Filename >{filename || 'File.txt'}</Filename>
                <IconButton size="small" onClick={handleClosefile}><CloseIcon sx={{color:'black',ml:2}} fontSize='small' /></IconButton>
              </Filebox>
             <Imgbox Expanded={isExpanded}>
                <img src={Image}/>
                <Typography sx={{fontSize:13}}>Scrape the Relevant pages of X-Path</Typography>
            
              </Imgbox>
          </Container>
          </Box>
    </div>
    )
}