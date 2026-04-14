import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkdialogbox from "../../component/checkdialogbox";
import Custombutton from "../../component/custombutton";
import Loaderprogress from "../../component/loaderprogress";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import Resetrecorddialog from "../../component/resetrecorddialog";
import TableComponent from "../../component/Tablecomponent";
import CustomTextField from "../../component/Textfeild";
import { AllColumns, clearfile, closecheckDialog, openCheckDialog, openLoader, openresetrecord, setsearchtermtable, setselectcolumns } from "../../featureSlice";
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
const Filename = styled(Typography)(({theme})=>({
  color:theme.palette.primary.main,
  fontSize:14,
  maxWidth:250,
  overflow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap'
}))
const Tbox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: theme.palette.grey[200],

  height: isExpanded ? 420 : 330,
  width: '100%',  

  marginLeft: 2,
  marginTop: 2,
  overflow: 'hidden',
  transition: 'all 0.3s ease'
}));
const Search=styled(TextField)(({theme})=>({
 width:  250,   
  paddingTop: 2,
  marginLeft: 4,
  fontFamily:theme.typography.fontFamily,
  '& .MuiOutlinedInput-root': {
    padding: 1,
    fontSize:  12,
    height:30,
    backgroundColor: theme.palette.background.paper,
     fontFamily:theme.typography.fontFamily
  }
}))
const Ibutton=styled(Button)(({theme})=>({
backgroundColor:theme.palette.background.paper,
marginTop:3,
marginRight:1,
padding:1,
minWidth:0,
boxShadow:'0px 2px 6px rgba(0,0,0,0.1)'
}))
export default function TableScreen (){
    const navigate = useNavigate();
const dispatch = useDispatch();              
   const selectedcolumns = useSelector(state =>state.feature.selectcolumns)
       const setselectedcolumnshandle= (cols)=>{dispatch(setselectcolumns(cols));}
  const Opencheck =useSelector (state => state.feature.checkDialog);
  const handleOpencheck = () =>{dispatch(openCheckDialog())};
  const handleClosecheck = () => {dispatch(closecheckDialog())}          

        const handleAnalyze=() =>{
            dispatch(
              openLoader({
                title:'Analyze',
                message:'Please Wait while we Map..',
                onComplete:()=>{navigate('/automapper')}
              })
            )
          }
const filename=useSelector((state)=>state.feature.filename);
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
  const searchterm = useSelector(state => state.feature.searchtermtable)

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
            <Pagename  isExpanded={isExpanded} />
              <Custombutton  isExpanded={isExpanded} label='Scraper Ui' width='100px' height="35px"/>
              </Box>
              {/*file name */}
              <Filebox>
                <InsertDriveFileOutlinedIcon fontSize='small' />
                <Filename>{filename || ''}</Filename>
                <IconButton size="small" onClick={handleClosefile}><CloseIcon sx={{color:'black',ml:2}} fontSize='small' /></IconButton>
              </Filebox>
              {/*table */}
              <Tbox isExpanded={isExpanded} >
      <Box sx={{display:'flex',alignItems:'center'}}>
          <CustomTextField placeholder='Search ' variant='outlined' value={searchterm} onChange={(e)=>dispatch(setsearchtermtable(e.target.value))} isSearch width="200px" height="30px" placeholderSize="13px"/>
            <Box sx={{display:'flex',gap:1 ,marginLeft: 'auto',    marginRight: 1     }}>
            <Ibutton size="small"  onClick={()=>dispatch(openresetrecord())}><RefreshRoundedIcon sx={{color:'#2F8BCC'}}/></Ibutton>
            <Resetrecorddialog />
            <Ibutton size="small"  sx={{bgcolor:'#2F8BCC',color:'white'}}onClick={handleAnalyze}>Auto Mapper</Ibutton>
            <Loaderprogress />
            <Ibutton size="small"  onClick={handleOpencheck} ><MoreVertIcon sx={{color:'#2F8BCC'}}/></Ibutton> </Box>
           <Checkdialogbox 
           open={Opencheck}
           handleClose={handleClosecheck}
           columns={AllColumns}
           selectedcolumn={selectedcolumns}
            setSelectedColumns={setselectedcolumnshandle} 
           />
            </Box>
          <Box sx={{flexGrow:1,mr:1,minHeight:0}}>
          <TableComponent 
           columns={AllColumns}
            selectedColumns={selectedcolumns}
            isExpanded={isExpanded}
            page ='table'/>
          
          </Box>
     </Tbox>
          </Container>
          </Box>
    </div>
)
}