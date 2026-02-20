import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from '../../assets/image.png';
import Custombutton from "../../component/custombutton";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import { styled } from '@mui/material/styles';
const Container = styled(Box)(({theme})=>({
border:`1px solid ${theme.palette.primary.main}`,
height:'480px',
width:'535px',
position:'relative'
}))
const Filebox = styled(Box)(({theme})=>({
backgroundColor:theme.palette.grey[300],
width:110,
height:25,
marginTop:4,
marginLeft:4,
borderRadius:theme.shape.borderRadius,
display:'flex',
alignItems:'center',
gap:1
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
export default function EmptyScraper () {
     const  navigate=useNavigate();
    return(
         <div>
           <Box
            sx={{
              m:0,
              p:0,
              boxSizing:'border-box',
              width: 530,        
              minHeight: 380,
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
                <Typography sx={{color:'primary.main',fontSize:15}}>File.txt</Typography>
                <CloseIcon sx={{color:'black',ml:2}} fontSize='small'/>
              </Filebox>
              <Imgbox >
                <img src={Image}/>
                <Typography sx={{fontSize:13}}>Scrape the Relevant pages of X-Path</Typography>
              </Imgbox>
          </Container>
          </Box>
    </div>
    )
}