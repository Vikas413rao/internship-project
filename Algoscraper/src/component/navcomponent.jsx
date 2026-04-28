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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Button, DialogContentText, IconButton, Link, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { closeClosingdialog, closeUnsavedDialog, loadRows, markSaved, openclosingdialog, openFeaturedialog, openUnsavedDialog, resetPingcard, resetShowfinalReport, setnextopen, toggleExpanded, toggleTheme } from '../featureSlice';
import CustomDialog from './customdialog';
import Featuredialogbox from './featuredialogbox';
import CustomIconButton from './iconbutton';
const isChromeAvailable =
  typeof chrome !== "undefined" &&
  chrome.storage &&
  chrome.action &&
  chrome.tabs &&
  chrome.scripting;
const routeToPage = (pathname) => {
    if (pathname === '/scraperui')   return 'scraper';  
    if (pathname === '/addscenario') return 'record';
    if (pathname === '/tablescreen') return 'table';
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
    const dispatch = useDispatch();
   
     const pagelist=[{value:'Page List',label:'Page List'}]
    const mode= useSelector((state)=>state.feature.themMode)
     const isExpanded = useSelector(state => state.feature.isExpanded); 
     const scraperSaved = useSelector(state => state.feature.scraperSaved);
     const recordSaved = useSelector(state => state.feature.recordSaved);
     const tableSaved = useSelector(state => state.feature.tableSaved);
     const unsavedDialogOpen = useSelector(state => state.feature. unsavedDialogOpen);
     const pendingNavroute = useSelector(state =>state.feature. pendingNavRoute);
    const scraperRows = useSelector(state => state.feature. scraperRows);
    const recordRows = useSelector(state => state.feature.recordRows);
    const tableRows =useSelector (state => state.feature.tableRows);
    const closingdialogopen = useSelector(state => state.feature. closingDialogopen);
    const navigate=useNavigate();
    const location=useLocation();
     const currentPage = routeToPage(location.pathname);
    //  useEffect(()=> {
    //     ['scraper','record','table'].forEach(async (page)=>{
    //         const saved = await loadFromStorage(page);
    //         dispatch(loadRows({page, rows:saved}));
    //     });
    //  },[dispatch]);
   useEffect(() => {
  if (!isChromeAvailable) return;

  chrome.storage.local.get(
    ['isMinimized', 'lastRoute', 'unsaved_scraper', 'unsaved_record', 'unsaved_table'],
    (result) => {
      ['scraper', 'record', 'table'].forEach(async (page) => {
        const unsavedKey = `unsaved_${page}`;
        if (result[unsavedKey] && result[unsavedKey].length > 0) {
          dispatch(loadRows({ page, rows: result[unsavedKey] }));
          chrome.storage.local.remove(unsavedKey);
        } else {
          const saved = await loadFromStorage(page);
          dispatch(loadRows({ page, rows: saved }));
        }
      });

      if (result?.lastRoute && result.lastRoute !== location.pathname) {
        setTimeout(() => {
          navigate(result.lastRoute, { replace: true });
        }, 100);
        chrome.storage.local.set({ lastRoute: null });
      }

      if (result?.isMinimized) {
        chrome.storage.local.set({ isMinimized: false });
        chrome.tabs.query({}, (tabs) => {
          tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { action: 'removeFloatIcon' }).catch(() => {});
          });
        });
      }
    }
  );
}, [dispatch]);
        const iscurrentpageunsaved = () =>{
        if(currentPage === 'scraper') return !scraperSaved;
        if(currentPage === 'record') return !recordSaved;
        if(currentPage === 'table') return !tableSaved;
        return false;
     };
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
        if(iscurrentpageunsaved()){
            dispatch(openUnsavedDialog(nextRoute));
            return;
        }
        navigate(nextRoute);

    }
    
  const handleSaveandnav = async () => {
  if (currentPage) {
    const rowsMap = { scraper: scraperRows, record: recordRows, table: tableRows };
    await saveToStorage(currentPage, rowsMap[currentPage]);
    chrome.storage.local.remove(`unsaved_${currentPage}`);
    dispatch(markSaved(currentPage));
  }
  const route = pendingNavroute;
  dispatch(closeUnsavedDialog());
  if (route) navigate(route);
};
   const handleDiascardandnav = async () =>{
    if(currentPage){
        const saved = await loadFromStorage(currentPage);
        dispatch(loadRows({page:currentPage, rows:saved}));
    }
    const route = pendingNavroute;
    dispatch(closeUnsavedDialog());
    if(route) navigate(route);
   }
   

  
  useEffect(() => {
    const body = document.body;
    body.style.width = isExpanded ? '600px' : '530px';
    body.style.height = isExpanded ? '530px' : '430px';
  }, [isExpanded]);

  const handleCtrlS = useCallback(async (e) => {
  if (!(e.ctrlKey && e.key === 's')) return;
  e.preventDefault();
  if (!currentPage) return;
  const rowsMap = { scraper: scraperRows, record: recordRows, table: tableRows };
  const rows = rowsMap[currentPage];
  await saveToStorage(currentPage, rows);
  chrome.storage.local.remove(`unsaved_${currentPage}`);
  dispatch(markSaved(currentPage));
}, [currentPage, scraperRows, recordRows, tableRows, dispatch]);


useEffect(() => {
  document.addEventListener('keydown', handleCtrlS);
  return () => document.removeEventListener('keydown', handleCtrlS);
}, [handleCtrlS]);
  
 const handleMinimize = () => {
 
  const allRows = {
    scraper: scraperRows,
    record: recordRows,
    table: tableRows,
  };

  chrome.storage.local.set({
    isMinimized: true,
    lastRoute: location.pathname,
    unsaved_scraper: allRows.scraper,
    unsaved_record: allRows.record,
    unsaved_table: allRows.table,
  }, () => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        if (!tab.id) return;
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
        }).then(() => {
          chrome.tabs.sendMessage(tab.id, { action: "showFloatIcon" });
        }).catch(() => {});
      });
    });

    window.close();
  });
};
const handleCloseclick = () => {
  dispatch(openclosingdialog());
};

const handleClose = () => {
  dispatch(closeClosingdialog());
};

const handleConfirm = () => {
  dispatch(closeClosingdialog());
  navigate('/');
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
               <CustomDialog
  open={closingdialogopen}
  onClose={handleClose}
  showHeader={true}
   showCloseIcon={true}
  title="Alert"
  headerBgColor="#fdb9b9"
  titleColor="red"
  titleIcon={<WarningAmberIcon fontSize="small" />}
  height={160}
  width={250}
  buttons={[
    {
      label: 'Cancel',
      onClick: handleClose,
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey'
      }
    },
    {
      label: 'Confirm',
      onClick: handleConfirm
    }
  ]}
  contentSx={{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}
>
  <DialogContentText sx={{ fontSize: 13 }}>
    Are You Sure?
  </DialogContentText>

  <DialogContentText sx={{ fontSize: 11, color: 'text.secondary' }}>
    You will not be able to recover Data.
  </DialogContentText>
</CustomDialog>
            </Closingbox>
            </Box>
        </Box>
      <CustomDialog
  open={unsavedDialogOpen}
  onClose={() => dispatch(closeUnsavedDialog())}
  showHeader={true}
  title="Unsaved Data"
  height={170}
  width={280}
  buttons={[
    {
      label: 'Cancel',
      onClick: () => dispatch(closeUnsavedDialog()),
      variant: 'contained',
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey'
      }
    },
    {
      label: 'Discard',
      onClick: handleDiascardandnav,
      variant: 'contained',
      sx: {
        backgroundColor: 'error.main'
      }
    },
    {
      label: 'Save',
      onClick: handleSaveandnav,
      variant: 'contained'
    }
  ]}
  contentSx={{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}
>
  <DialogContentText sx={{ fontSize: 13 }}>
    You have unsaved changes.
  </DialogContentText>

  <DialogContentText sx={{ fontSize: 12, color: 'text.secondary' }}>
    Do you want to save before leaving?
  </DialogContentText>
</CustomDialog>
    </div>
  )
}
