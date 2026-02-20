import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkdialogbox from "../../component/checkdialogbox";
import Custombutton from "../../component/custombutton";
import Loaderprogress from "../../component/loaderprogress";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import Resetrecorddialog from "../../component/resetrecorddialog";
import TableComponent from "../../component/Tablecomponent";
import { AllColumns, closecheckDialog, openCheckDialog, openLoader, openresetrecord, setselectcolumns } from "../../featureSlice";
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
const Tbox=styled(Box)(({theme})=>({
display:'flex',
flexDirection:'column',
position:'relative',
backgroundColor:theme.palette.grey[200],
height:360,
width:530,
marginLeft:2,
marginTop:2,
overflow:'hidden'
}))
const Search=styled(TextField)(({theme})=>({
padding:4,
fontSize:11,
height:10,
'& .MuiOutlinedInput-root': {
    height: 32,
    fontSize: 12,
    backgroundColor: theme.palette.background.paper
  },
width:250,
marginLeft:4
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
            <Container>
              <Navcomponent />
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1,gap:2}}>
            <Pagename />
              <Custombutton label='Scraper Ui'/>
              </Box>
              {/*file name */}
              <Filebox>
                <InsertDriveFileOutlinedIcon fontSize='small' />
                <Typography sx={{color:'#2F8BCC',fontSize:15}}>File.txt</Typography>
                <CloseIcon sx={{color:'black',ml:2}} fontSize='small'/>
              </Filebox>
              {/*table */}
              <Tbox  >
      <Box sx={{display:'flex',alignItems:'center'}}>
          <Search id="outlined-basic" placeholder="Search"  variant="outlined" InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon sx={{color:'black'}}/></InputAdornment>),}} />
            <Box sx={{display:'flex',ml:10,gap:1}}>
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
          <Box sx={{flexGrow:1,mt:1,ml:2,minHeight:0}}>
          <TableComponent 
           columns={AllColumns}
            selectedColumns={selectedcolumns}
          />
          
          </Box>
     </Tbox>
          </Container>
          </Box>
    </div>
)
}