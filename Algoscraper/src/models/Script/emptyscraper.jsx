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
const Container = styled(Box)(({theme})=>({
border:`1px solid ${theme.palette.primary.main}`,
height:'480px',
width:'535px',
position:'relative'
}))
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
const Imgbox=styled(Box)(({theme})=>({
backgroundColor:theme.palette.grey[100],
marginLeft:2,
marginRight:2,
height:357,
display:'flex',
alignItems:'center',
justifyContent:'center',
flexDirection:'column'
}))
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
    return(
         <div>
          <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container >
              <Navcomponent />
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1,gap:1}}>
              <Pagename />
              <Custombutton label='Scraper UI' onClick={()=>navigate('/tablescreen')}/>
              </Box>
              {/*file name */}
              <Filebox >
                <InsertDriveFileOutlinedIcon fontSize='small' />
                <Filename >{filename || 'File.txt'}</Filename>
                <IconButton size="small" onClick={handleClosefile}><CloseIcon sx={{color:'black',ml:2}} fontSize='small' /></IconButton>
              </Filebox>
              <Imgbox >
              {content ?(
                <Typography
            sx={{
              fontSize:12,
              padding:2,
              whiteSpace:"pre-wrap",
              overflow:"auto"
                }}
                >
                {content}
                </Typography>
              ):(
                <>
                <img src={Image}/>
                <Typography sx={{fontSize:13}}>Scrape the Relevant pages of X-Path</Typography>
              </>
              )}
              </Imgbox>
          </Container>
          </Box>
    </div>
    )
}