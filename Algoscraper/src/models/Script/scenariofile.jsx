import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, Button, FormControl, FormControlLabel, InputLabel, Radio, Select, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../component/customdialog";
import CustomIconButton from "../../component/iconbutton";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import CustomTextField from "../../component/Textfeild";
import { closeCustomdialog, openCustomdialog } from "../../featureSlice";
const Buttonarrow=styled(Button)(({theme})=>({
    minWidth:0,
    width:'24px',
    height:'24px',
    color:theme.palette.common.white,
    borderRadius:'5px',
    backgroundColor:theme.palette.primary.dark,
}))
const ArrowBackIcon =styled(ArrowBackIosIcon)({
    marginLeft:'8px'
})
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
const Scenariob=styled(Box)(({theme})=>({
backgroundColor:theme.palette.primary.main,
height:35,
padding:2,
marginLeft:3,
marginRight:3,
marginTop:4,
borderTopLeftRadius:'10px',
borderTopRightRadius:'10px',
display:'flex',
alignItems:'center'
}))
const Sbox = styled(Box)(({theme})=>({
backgroundColor:theme.palette.background.paper,
boxShadow:'2px 1px 5px rgba(0,0,0,0.3)',
height:35,
padding:2,
borderRadius:theme.shape.borderRadius,
marginTop:8,
marginLeft:8,
marginRight:4,
display:'flex',
justifyContent:'space-between'
}))
const Edit=styled(EditOutlinedIcon)(({theme})=>({
position:'absolute',
bottom:12,
right:6,
fontSize:12,
backgroundColor:theme.palette.background.paper,
borderRadius:theme.shape.borderRadius,
color:theme.palette.primary.main

}))
export default function Scenariofile(){
 
              const scenarios = [
  "Scenario_Steps 1",
  "Scenario_Steps 1",
  "Scenario_Steps 1",
];
const navigate=useNavigate();
const dispatch = useDispatch();
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
  const open = useSelector(state => state.feature.customDialogOpen);
const handleClose = () => dispatch(closeCustomdialog());
const handleConfirm = () => {dispatch(closeCustomdialog());};
              return(
                <div>
    <Box
            sx={{
              boxSizing:'border-box',
              width:'auto',        
              height:'auto',
            }}
          >
            <Container isExpanded={isExpanded}>
              <Navcomponent />
          {/*page name */}
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                    <Pagename isExpanded={isExpanded} width='420px' expandedWidth='480px'/>
              </Box>
              </Box>
               <Scenariob >
                 <Buttonarrow onClick={()=>navigate('/automapper')}><ArrowBackIcon size='small'/></Buttonarrow>
                <Typography sx={{color:'white',fontSize:'13px'}}>Scenario Name</Typography>
                
               </Scenariob>
               {scenarios.map((label,index) =>(
               <Sbox key={index} >
                 <FormControlLabel value={label} control={<Radio  size='small' sx={{ml:2}}/>} label={label} sx={(theme)=>({'& .MuiFormControlLabel-label':{color:'red',fontSize:'13px', fontFamily: theme.typography.fontFamily}})}/> 
                <CustomIconButton  sx={{ml:35}} onClick={()=>dispatch(openCustomdialog())}>
                   <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
                   <Edit />
                </CustomIconButton>
                <CustomDialog
  open={open}
  onClose={handleClose}
  showHeader={true}
  showCloseIcon={true}
  title="Steps details"
  width={300}
  height={275}
  actionssx={{ justifyContent: 'center', gap: 1,mt:-2 }}
  buttons={[
    {
      label: 'Cancel',
      onClick: handleClose,
      width: '80px',
      height: '25px',
      sx: {
        backgroundColor: 'grey.200',
        color: 'grey'
      }
    },
    {
      label: 'Save',
      onClick: handleConfirm,
      width: '80px',
      height: '25px'
    }
  ]}
>
 
  <Box sx={{ display: 'flex', gap: 1 ,mt:-1}}>
    <FormControl size="small">
      <InputLabel sx={{ fontSize: 13 }}>Control Type</InputLabel>
      <Select sx={{ width: 120 }} native defaultValue="" />
    </FormControl>

    <FormControl size="small">
      <InputLabel sx={{ fontSize: 13 }}>Control Action</InputLabel>
      <Select sx={{ width: 125 }} defaultValue="" />
    </FormControl>
  </Box>

  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
    <CustomTextField defaultValue="Control Value" />
    <CustomTextField defaultValue="Page Name" />
  </Stack>

  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
    <CustomTextField label="Control Name" />
    <CustomTextField label="Xpath" />
  </Box>
</CustomDialog>
                </Sbox>
                  ))}
                </Container>
                </Box>
                </div>
              )

}