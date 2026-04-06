import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { closesettingdialog } from '../featureSlice';
export default function Settingdialog() {
    const dispatch=useDispatch();
    const Opensetting = useSelector(state=>state.feature.settingopen)
  return (
    <div>
      <Dialog open={Opensetting} onClose={()=>dispatch(closesettingdialog())} width='sm' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:200,display:'flex',flexDirection:'column',overflow:'hidden',width:320})}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',p:1,height:40}}>
              <DialogTitle>Edit Scenario</DialogTitle>
              <IconButton onClick={()=>dispatch(closesettingdialog())} ><CloseIcon /></IconButton></Box>
              <DialogContent sx={{overflow:'hidden'}}>
                <FormGroup sx={{p:2,width:320,mt:-2}}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Mouse hover event" />
               <FormControlLabel  control={<Checkbox />} label="Enable scroll event" />
               
        </FormGroup>
              </DialogContent>
              <DialogActions sx={{display:'flex',justifyContent:'space-between',p:1}}>
                <Button onClick={()=>dispatch(closesettingdialog())} sx={{color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                    <Button onClick={()=>dispatch(closesettingdialog())} variant='contained' color='info' sx={{width:90}} >save</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
