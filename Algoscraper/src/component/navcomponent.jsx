import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import LaunchIcon from '@mui/icons-material/Launch';
import LightModeIcon from '@mui/icons-material/LightMode';
import MinimizeIcon from '@mui/icons-material/Minimize';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { openFeaturedialog, resetPingcard, resetShowfinalReport, setnextopen, toggleExpanded, toggleTheme } from '../featureSlice';
import Closingdialog from '../hooks/alertdialoboxhooks';
import Closingdialogbox from './alertDialogbox';
import Featuredialogbox from './featuredialogbox';
import CustomIconButton from './iconbutton';
const isChromeAvailable =
  typeof chrome !== "undefined" &&
  chrome.storage &&
  chrome.action &&
  chrome.tabs;
const routeToPage = (pathname) => {
    if (pathname === '/emptyscraper')  return 'scraper';
    if (pathname === '/recording')     return 'record';
    if (pathname === '/tablescreen')   return 'table';
    return null;
};
const storageKey = (page) => `rows_${page}`;

const saveToStorage = (page, rows) => new Promise((resolve) => {
    if (!isChromeAvailable) { resolve(); return; }
    chrome.storage.local.set({ [storageKey(page)]: rows }, resolve);
});

const loadFromStorage = (page) => new Promise((resolve) => {
    if (!isChromeAvailable) { resolve([]); return; }
    chrome.storage.local.get([storageKey(page)], (result) => {
        resolve(result[storageKey(page)] || []);
    });
});
const Titlesection = styled(Box)(({theme})=>({
    padding:8,
    backgroundColor: theme.palette.primary.main,
    color:'white',
    display:'flex',
    alignItems:'center',
    gap: 3,                
    height:'38px',         
    width:'260px',
    flexGrow: 1,
    borderTopRightRadius:'40px',
}))
const Title = styled(Typography)(({theme})=>({
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.2,  
    display: 'flex',
    alignItems: 'center',
     fontFamily: theme.typography.fontFamily,
}))
const Caption = styled(Typography)(({theme})=>({
    fontSize:'11px',
    fontWeight:500,     
    marginTop:8,
    marginLeft:-3,
     whiteSpace: 'nowrap', 
    fontFamily: theme.typography.fontFamily,       
}))
const LinkBox = styled(Box)(({theme})=>({
    padding:8,
    border:`1px solid ${theme.palette.primary.main}`,
    borderRadius:'30px',
   height:'32px',
    display:'flex',
    alignItems:'center',
    width:'98px',
    marginTop:'5px',
    justifyContent:'left',
    right:-10,
}))
const LinkButton = styled(Link)({
    display:'flex',
    alignItems:'center',
})
const LinkIcon = styled(LaunchIcon)(({theme})=>({
    color:theme.palette.primary.main,
    height:'17px',
}))
const Algo = styled(Typography)(({theme})=>({
    fontFamily:theme.typography.fontFamily,
    fontWeight:600,
    fontSize:16,
    color:theme.palette.grey[700],
    lineHeight:1
}))
const Qatext = styled(Typography)(({theme})=>({
fontFamily:theme.typography.fontFamily,
    fontWeight:700,
    fontSize:16,
    color:theme.palette.primary.main,
    lineHeight:1
}))
const Registericon = styled(Typography)(({theme})=>({
fontFamily:theme.typography.fontFamily,
    fontSize:9,
    color:theme.palette.icon.secondary,
    alignSelf:'flex-start',
    ml:'2px',
}))
const Iconbox = styled(Box)({
   display: 'flex',
    width:24,
    height:15,
    marginTop:'-7px',
    gap:'5px',
    marginLeft:'10px',
})
const Iconbutton = styled(IconButton)(({theme})=>({
    color:'black',
    width:'24px',
    height:'24px',
    '&:hover':{backgroundColor:theme.palette.background.paper,boxShadow:'none'},
    
}))
const Tabunslected=styled(TabUnselectedIcon)(({theme})=>({
    fontSize:19,
    backgroundColor:theme.palette.background.paper,
    color:theme.palette.icon.primary
}))
const Editoutline = styled(EditOutlinedIcon)(({theme})=>({
    position:'absolute',
    bottom:8,
    right:-5,
    fontSize:18,
    color:theme.palette.icon.primary,
    backgroundColor:'transparent',
    borderRadius:'50%',
}))
const Closingbox = styled(Box)(({theme})=>({
    backgroundColor:theme.palette.grey[300],
    display:'flex',
    alignItems:'center',
    height:'40px',
    width:'90px',
    marginLeft:'auto'
}) )
const Ibutton=styled(Button)(({theme})=>({
    minWidth:'30px',
    width:'15px',
    height:'15px',
    right:-5,
    color:theme.palette.common.black,
    '& .MuiSvgIcon-root':{
        fontSize:20
    }
}))
const Buttonarrow=styled(Button)(({theme})=>({
    minWidth:0,
    width:'24px',
    height:'24px',
    color:theme.palette.common.white,
    borderRadius:'5px',
    right:7,
    backgroundColor:theme.palette.primary.dark,
}))
const ArrowBackIcon =styled(ArrowBackIosIcon)({
    marginLeft:'8px'
})

export default function Navcomponent() {
    const{open,handleClose,handleConfirm,handleCloseclick}=Closingdialog();
    const navigate=useNavigate();
    const location=useLocation();
    const handleBackNavigation = () =>{
        dispatch(setnextopen(false))
        const currentPath = location.pathname;
       if (currentPath === '/analyze'){
        dispatch(resetPingcard());
        dispatch(resetShowfinalReport());
        navigate('/pingcard',{replace:true});
        return
       }
        const navigationMap={
            '/analyze':'/pingcard',
            '/addscenario':'/scenariolist',
            '/scenariolist':'/recording',
            '/emptyscraper':'/futurescript',
            '/tablescreen':'/emptyscraper',
            '/automapper':'/tablescreen',
            '/scenariofile':'/tablescreen'
        };
        const nextRoute=navigationMap[currentPath] || '/';

        navigate(nextRoute);

    }
     useEffect(() => {
    if (!isChromeAvailable) return;

    chrome.storage.local.get(['isMinimized'], (result) => {
      if (result?.isMinimized) {
        chrome.action.setBadgeText({ text: '' });
        chrome.storage.local.set({ isMinimized: false });
      }
    });
  }, []);
    const dispatch = useDispatch();
    const pagelist=[{value:'Page List',label:'Page List'}]
    const mode= useSelector((state)=>state.feature.themMode)
     const isExpanded = useSelector(state => state.feature.isExpanded); 

  
  useEffect(() => {
    const body = document.body;
    body.style.width = isExpanded ? '600px' : '530px';
    body.style.height = isExpanded ? '530px' : '430px';
  }, [isExpanded]);

   const handleMinimize = () => {

     if (isChromeAvailable) {
    chrome.storage.local.set({
      isMinimized: true,
      lastRoute: location.pathname   
    });

    chrome.action.setBadgeText({ text: '●' });
    chrome.action.setBadgeBackgroundColor({ color: '#1976d2' });
  }


    window.close();
  };
  return (
    <div>
      
        <Box sx={{display:'flex'}}>
            
            <Titlesection>
                {location.pathname !== '/' && ( 
            <Buttonarrow onClick={handleBackNavigation}><ArrowBackIcon size='small'/></Buttonarrow>)}
                <Title>algoScraper</Title>
                <Caption>Powered by algoshack</Caption>
            </Titlesection>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto'}}>
            <LinkBox>
                <LinkButton onClick={()=> chrome.tabs.create({url: 'https://algoshack.net/users/login/'})} underline='none'><LinkIcon />
                <Algo>algo</Algo>
                <Qatext>QA</Qatext>
                <Registericon>®</Registericon>
                </LinkButton>
            </LinkBox>
            <Iconbox>
                <CustomIconButton  size='small' onClick={()=>dispatch(openFeaturedialog())} sx={{mt:-0.5}}>
                <Tabunslected/>
                <Editoutline />
                </CustomIconButton>
                <Featuredialogbox
                    pagelist={pagelist}
                />
            </Iconbox>
            <IconButton onClick={()=>dispatch(toggleTheme())} >
                {mode === 'light'
                 ? <DarkModeIcon/> : <LightModeIcon/>
                }
            </IconButton>
            <Closingbox>
                <Ibutton onClick={handleMinimize}><MinimizeIcon sx={(theme)=>({color:theme.palette.icon.primary})}/></Ibutton>
                <Ibutton onClick={() => dispatch(toggleExpanded())}>
                    {isExpanded ? <FilterNoneIcon sx={(theme)=>({color:theme.palette.icon.primary})} /> : <CropFreeIcon sx={(theme)=>({color:theme.palette.icon.primary})}/>}
                </Ibutton>
                <Ibutton onClick={handleCloseclick}><CloseIcon sx={(theme)=>({color:theme.palette.icon.primary})}/></Ibutton>
                <Closingdialogbox 
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                />
            </Closingbox>
            </Box>
        </Box>
    </div>
  )
}
