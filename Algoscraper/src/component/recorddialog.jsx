import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closerecord } from '../featureSlice';
export default function RecordDialog({mode}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const Openrecord = useSelector(state=>state.feature.recordopen);
    const handleClose = ()=>{
        dispatch(closerecord());
    }
    const handleConfirm = () =>{
        if(mode === 'recording'){
            navigate('/addscenario')
        }
        dispatch(closerecord());
    }
  return (
    <div>
      <Dialog
        open={Openrecord}
        onClose={handleClose}
       maxWidth="xs" 
       PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily, width: 320,height:350,display:'flex',flexDirection:'column',overflow:'hidden'})}}
      >
        <Box sx={{ borderBottom:'1px solid #ccc' ,height:40,backgroundColor:'#f1eeee'}}>
        <DialogTitle sx={{ fontSize: 16, fontWeight: 600 }}>
          Record Scenario
        </DialogTitle>
        </Box>
        <DialogContent  sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      p: 1,
      overflow: "hidden",
      ml:2
    }}>
          <FormGroup sx={{  gap: 1,mt:0 }}>
            <TextField
              placeholder="Page Name"
              width='small'
              InputProps={{ sx: { fontSize: 13, height: 40 } }}
            />

            <TextField
              placeholder="Enter Scenario Name"
              width='small'
              InputProps={{ sx: { fontSize: 13, height: 40 } }}
            />

            <TextField
              placeholder="Enter Scenario Outline"
              multiline
              rows={3}
              width='small'
              InputProps={{ sx: { fontSize: 13 } }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography fontSize={11}>
                  Capture Screenshots while recording
                </Typography>
              }
            />
          </FormGroup>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
          <Button
            onClick={handleClose}
            sx={{
              width: 120,
              height: 35,
              bgcolor: "grey.200",
              color: "grey"
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{ width: 150, height: 35 }}
          >
            Start Recording
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
