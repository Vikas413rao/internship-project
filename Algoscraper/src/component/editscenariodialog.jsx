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
      <Dialog open={OpenEditdialog} onClose={()=>dispatch(closeeditdialog())} width='sm'
       PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:250,display:'flex',flexDirection:'column',overflow:'hidden',width:320})}}>
              <DialogTitle sx={{height:25,p:1,fontSize:13}}>Edit Scenario</DialogTitle>
              <DialogContent sx={{overflow:'hidden',p:1}}>
                <FormGroup sx={{p:1,gap:1}}>
             <TextField
             placeholder="Enter Scenario Name"
          id="outlined-size-small"
          sx={{width:270,'& .MuiInputBase-input':{fontSize:13,height:20}}}
          value={scenarioname}
          onChange={(e)=>dispatch(setScenarioName(e.target.value))}
        />
           <TextField
          id="outlined-multiline-static"
          placeholder="Scenario Outline"
          required
          multiline
          rows={3}
          sx={{width:270,'& .MuiInputBase-input':{fontSize:12}}}
          value={scenariooutline}
          onChange={(e)=>dispatch(setScenarioOutline(e.target.value))}
        />
        </FormGroup>
              </DialogContent>
              <DialogActions sx={{display:'flex',justifyContent:'space-between'}}>
                <Button onClick={()=>dispatch(closeeditdialog())} sx={{color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
                    <Button onClick={()=>{dispatch(closeeditdialog());dispatch(clearScenario());}} variant='contained' color='info'>Save</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
