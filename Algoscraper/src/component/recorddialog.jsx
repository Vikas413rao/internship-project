import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closerecord } from '../featureSlice';
import CustomTextField from './Textfeild';
import Custombutton from './custombutton';
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
       PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily, width: 300,height:300,display:'flex',flexDirection:'column',overflow:'hidden'})}}
      >
        <Box sx={{ borderBottom:'1px solid #ccc' ,height:40,backgroundColor:'#f1eeee',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <DialogTitle sx={{ fontSize: 16, fontWeight: 600 }}>
          Record Scenario
        </DialogTitle>
        <IconButton onClick={handleClose} size='small'>
    <CloseIcon fontSize='small' />
  </IconButton>
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
          <FormGroup sx={{  gap: 1 }}>
            <CustomTextField
              placeholder="Page Name"
              width='small'
              InputProps={{ sx: { fontSize: 13, height: 30 } }}
            />

            <CustomTextField
              placeholder="Enter Scenario Name"
              width='small'
              InputProps={{ sx: { fontSize: 13, height: 30 } }}
              placeholderSize='12px'
            />

            <CustomTextField
              placeholder="Enter Scenario Outline"
              multiline
              rows={3}
              height='80px'
              placeholderSize='12px'
              InputProps={{ sx: { fontSize: 13 } }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography fontSize={11}>
                  Capture Screenshots while recording
                </Typography>
              }
          sx={{marginTop:'-8px'}}/>
          </FormGroup>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2,height:'-10px',mt:-1 }}>
          
          <Custombutton onClick={handleClose} label='Cancel' width='120px' height='30px' sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }} />
          <Custombutton onClick={handleConfirm} label='Start Recording' width='125px' height='30px' variant='contained' />
             
        </DialogActions>
      </Dialog>
    </div>
  )
}
