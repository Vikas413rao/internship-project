import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { closesettingdialog } from '../featureSlice';
export default function Settingdialog() {
    const dispatch=useDispatch();
    const Opensetting = useSelector(state=>state.feature.settingopen)
  return (
    <div>
      <Dialog open={Opensetting} onClose={()=>dispatch(closesettingdialog())} >
              <DialogTitle>Edit Scenario</DialogTitle>
              <IconButton onClick={()=>dispatch(closesettingdialog())} sx={{position:'absolute',top:10,right:10}}><CloseIcon /></IconButton>
              <DialogContent>
                <FormGroup sx={{p:2,gap:2,width:360}}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Mouse hover event" />
               <FormControlLabel  control={<Checkbox />} label="Enable scroll event" />
               
        </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>dispatch(closesettingdialog())} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                    <Button onClick={()=>dispatch(closesettingdialog())} variant='contained' color='info'  sx={{right:10}}>save</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
