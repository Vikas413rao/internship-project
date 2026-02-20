import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeresetrecord } from '../featureSlice';
export default function Resetrecorddialog() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const Openreset = useSelector(state=>state.feature.resetrecordopen)
  return (
    <div>
      <Dialog open={Openreset} onClose={()=>dispatch(closeresetrecord())} >
              <DialogTitle>Reset Record</DialogTitle>
              <IconButton onClick={()=>dispatch(closeresetrecord())} sx={{position:'absolute',top:10,right:10}}><CloseIcon /></IconButton>
              <DialogContent>
                <Typography>Are You Sure?</Typography>
                <DialogContentText>
                Do you really want to reset these records
                <FormGroup>
                 <FormControlLabel control={<Checkbox defaultChecked />} label="Save Data" />
              </FormGroup>
              </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>dispatch(closeresetrecord())} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>No</Button>
                    <Button onClick={()=>navigate('/scraperui')} variant='contained' color='info'  sx={{right:10}}>Yes</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
