import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, Button, FormControl, FormControlLabel, InputLabel, Radio, Select, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Customdialogbox from "../../component/customdialogbox";
import Navcomponent from "../../component/navcomponent";
import Pagename from "../../component/pagename";
import useCustomdialogbox from "../../hooks/customdialogboxhooks";

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
const Container = styled(Box)(({theme})=>({
border:`1px solid ${theme.palette.primary.main}`,
height:'480px',
width:'535px',
position:'relative'
}))
const Scenariob=styled(Box)(({theme})=>({
backgroundColor:theme.palette.primary.main,
height:40,
padding:2,
marginLeft:3,
marginRight:3,
marginTop:2,
borderTopLeftRadius:'10px',
borderTopRightRadius:'10px',
display:'flex',
alignItems:'center'
}))
const Sbox = styled(Box)(({theme})=>({
backgroundColor:theme.palette.background.paper,
boxShadow:'2px 1px 3px rgba(0,0,0,0.3)',
height:35,
padding:1,
borderRadius:theme.shape.borderRadius,
marginTop:2,
marginLeft:4,
marginRight:2,
display:'flex',
justifyContent:'space-between'
}))
const Edit=styled(EditOutlinedIcon)(({theme})=>({
position:'absolute',
bottom:12,
right:20,
fontSize:15,
backgroundColor:theme.palette.common.transparent,
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
const {open,handleOpen,handleClose,handleConfirm}=useCustomdialogbox();
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
           <Box sx={{display:'flex',alignItems:'center',ml:1}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Pagename />
              </Box>
              </Box>
               <Scenariob >
                 <Buttonarrow onClick={()=>navigate('/automapper')}><ArrowBackIcon size='small'/></Buttonarrow>
                <Typography sx={{color:'white',fontSize:'13px'}}>Scenario Name</Typography>
                
               </Scenariob>
               {scenarios.map((label,index) =>(
               <Sbox key={index} >
                 <FormControlLabel value={label} control={<Radio  size='small'/>} label={label} sx={{'& .MuiFormControlLabel-label':{color:'red',fontSize:'13px'}}}/> 
                <Button sx={{ml:35}} onClick={handleOpen}>
                   <CropSquareOutlinedIcon sx={{ fontSize: 19,color:'#2F8BCC' }}/>
                   <Edit />
                </Button>
                 <Customdialogbox open={open} onClose={handleClose} onConfirm={handleConfirm} title='Steps details' canclelabel='Close' confirmlabel='Save'>
                  <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-native-select">Control Type</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Control Type">
          
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="grouped-select-label" htmlFor="grouped-select">
          Control Action
        </InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          label="Control Type"
          SelectDisplayProps={{
            'aria-labelledby': 'grouped-select-label',
          }}
        >
         
          
        </Select>
      </FormControl>
         <Stack direction='row' spacing={2} mt={2}>      
      <TextField
        id="outlined-controlled"
        defaultValue='Control Value'
      />
      <TextField
        id="outlined-controlled"
        defaultValue="Page Name"
      />
      
</Stack> 
<Box sx={{mt:2}}>
<TextField fullWidth label="Control Name" id="fullWidth"  /></Box>
<Box sx={{mt:2}}>
<TextField fullWidth label="Xpath" id="fullWidth" /></Box>
            </Customdialogbox>
                </Sbox>
                  ))}
                </Container>
                </Box>
                </div>
              )

}