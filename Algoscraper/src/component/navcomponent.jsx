import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import MinimizeIcon from '@mui/icons-material/Minimize';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from 'react-router-dom';
import Closingdialog from '../hooks/closingdialogbox';
import Featuredialog from '../hooks/featuredialog';
import Closingdialogbox from './closingdialogbox';
import Featuredialogbox from './featuredialogbox';
const Titlesection = styled(Box)({
    padding:8,
    backgroundColor: '#2F8BCC',
    color:'white',
    display:'flex',
    alignItems:'center',
    gap: 3,
    height:'20px',
    width:'260px',
    borderTopRightRadius:'40px',
})
const Title = styled(Typography)({
    fontSize: '16px',
    fontWeight: 600,
    color: 'white',
})
const Caption = styled(Typography)({
    fontSize:'9px',
    color:'white',
})
const LinkBox = styled(Box)({
    padding:8,
    border:'1px solid #2F8BCC',
    borderRadius:'30px',
    height:'10px',
    display:'flex',
    alignItems:'center',
    width:'85px',
    marginTop:'5px',
    justifyContent:'left',
    right:-10,
})
const LinkButton = styled(Link)({
    display:'flex',
    alignItems:'center',
})
const LinkIcon = styled(LaunchIcon)({
    color:'#2F8BCC',
    height:'17px',
})
const Algo = styled(Typography)({
    fontFamily:'Poppins,sans-serif',
    fontWeight:600,
    fontSize:16,
    color:'#6b6b6b',
    lineHeight:1
})
const Qatext = styled(Typography)({
fontFamily:'Poppins,snas-serif',
    fontWeight:700,
    fontSize:16,
    color:'#2F8BCC',
    lineHeight:1
})
const Registericon = styled(Typography)({
    fontFamily:'Poppins,snas-serif',
    fontSize:9,
    color:'#6b6b6b',
    alignSelf:'flex-start',
    ml:'2px',
})
const Iconbox = styled(Box)({
    position:'relative',
    width:24,
    height:15,
    marginTop:'10px',
    gap:'5px',
    marginLeft:'10px',
})
const Iconbutton = styled(IconButton)({
    right:7,
    top:-4,
    position:'absolute',
    color:'black',
    width:'24px',
    height:'24px',
    '&:hover':{backgroundColor:'transparent',boxShadow:'none'},
    
})
const Tabunslected=styled(TabUnselectedIcon)({
    fontSize:19,
    backgroundColor:'white',
})
const Editoutline = styled(EditOutlinedIcon)({
    position:'absolute',
    bottom:6,
    right:-5,
    fontSize:18,
    backgroundColor:'transparent',
    borderRadius:'50%',
})
const Closingbox = styled(Box)({
    backgroundColor:'#a8a0a077',
    display:'flex',
    alignItems:'center',
    height:'40px',
    width:'122px',
    right:-2
}) 
const Ibutton=styled(Button)({
    minWidth:'40px',
    width:'24px',
    height:'24px',
    p:0,
    color:'#000',
    '& .MuiSvgIcon-root':{
        fontSize:20
    }
})
const Buttonarrow=styled(Button)({
    minWidth:0,
    width:'24px',
    height:'24px',
    color:'#ffffff',
    borderRadius:'5px',
    backgroundColor:'#0a65a7',
})
const ArrowBackIcon =styled(ArrowBackIosIcon)({
    marginLeft:'8px'
})
export default function Navcomponent() {
    const{openStartdialog,openSessiondialog,pagelist,closealldialog,startsession,clearsession,handleopenStartDialog}=Featuredialog();
    const{open,handleClose,handleConfirm,handleCloseclick}=Closingdialog();
    const navigate=useNavigate();
    const location=useLocation();

    const isHome=location.pathname ==='/';
  return (
    <div>
      
        <Box sx={{display:'flex'}}>
            
            <Titlesection>
                {!isHome &&(
            <Buttonarrow onClick={()=>navigate('/')}><ArrowBackIcon size='small'/></Buttonarrow>)}
                <Title>algoScraper</Title>
                <Caption>Powered by algoshack</Caption>
            </Titlesection>
            <LinkBox>
                <LinkButton onClick={()=> chrome.tabs.create({url: 'https://algoshack.net/users/login/'})} underline='none'><LinkIcon />
                <Algo>algo</Algo>
                <Qatext>QA</Qatext>
                <Registericon>®</Registericon>
                </LinkButton>
            </LinkBox>
            <Iconbox>
                <Iconbutton  size='small' onClick={handleopenStartDialog}>
                <Tabunslected/>
                <Editoutline />
                </Iconbutton>
                <Featuredialogbox
                openStartdialog={openStartdialog}
                openSessiondialog={openSessiondialog}
                handleCloseall={closealldialog}
                handleStartsession={startsession}
                handleClearSession={clearsession}
                    pagelist={pagelist}
                />
            </Iconbox>
            <Closingbox>
                <Ibutton><MinimizeIcon /></Ibutton>
                <Ibutton><CropFreeIcon /></Ibutton>
                <Ibutton onClick={handleCloseclick}><CloseIcon /></Ibutton>
                <Closingdialogbox 
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                />
            </Closingbox>
        </Box>
    </div>
  )
}
