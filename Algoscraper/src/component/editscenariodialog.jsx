import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearScenario, closeeditdialog, setScenarioName, setScenarioOutline } from '../featureSlice';


export default function Editscenariodialog() {
    const dispatch=useDispatch();
    const scenarioname=useSelector(state=>state.feature.scenarioName);
    const scenariooutline=useSelector(state=>state.feature.scenarioOutline);
    const OpenEditdialog = useSelector(state =>state.feature.editdialogopen)
  return (
    <div>
      <Dialog open={OpenEditdialog} onClose={()=>dispatch(closeeditdialog())} >
              <DialogTitle>Edit Scenario</DialogTitle>
              <DialogContent>
                <FormGroup sx={{p:2,gap:2,width:360}}>
             <TextField
             placeholder="Enter Scenario Name"
          id="outlined-size-small"
          size="small"
          value={scenarioname}
          onChange={(e)=>dispatch(setScenarioName(e.target.value))}
        />
           <TextField
          id="outlined-multiline-static"
          placeholder="Scenario Outline"
          required
          multiline
          rows={4}
          value={scenariooutline}
          onChange={(e)=>dispatch(setScenarioOutline(e.target.value))}
        />
        </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>dispatch(closeeditdialog())} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                    <Button onClick={()=>{dispatch(closeeditdialog());dispatch(clearScenario());}} variant='contained' color='info'  sx={{right:10}}>Save</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
