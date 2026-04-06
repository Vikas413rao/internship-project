import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, Select, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeCustomdialog } from '../featureSlice';
export default function Stepdetailbox() {
   const dispatch = useDispatch();
  const open = useSelector((state) => state.feature.customDialogOpen);
  const handleClose = () => dispatch(closeCustomdialog());
  const handleConfirm = () => {
    dispatch(closeCustomdialog());
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} width='sm' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:255,display:'flex',flexDirection:'column',overflow:'hidden',width:320})}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',p:1,height:30}}>
               <DialogTitle sx={{ fontSize: 13 }}>
    Steps details
  </DialogTitle>

  <IconButton
    onClick={handleClose}
  >
    <CloseIcon />
  </IconButton>
</Box>
  <DialogContent sx={{ pt: 1 ,overflow:'hidden'}}>
<Box sx={{gap:1,display:'flex'}}>
    <FormControl  size="small" sx={{ mb: 1 }}>
      <InputLabel sx={{ fontSize: 13 }}>Control Type</InputLabel>
      <Select sx={{width:138}} native defaultValue="">
        <option value="" />
      </Select>
    </FormControl>

    <FormControl size="small" sx={{ mb: 1 }}>
      <InputLabel sx={{ fontSize: 13 }}>Control Action</InputLabel>
      <Select sx={{width:138}} defaultValue="">
      </Select>
    </FormControl>
    </Box>
    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
      <TextField size="small" defaultValue="Control Value" sx={(theme) => ({
    '& .MuiInputBase-input': {
      fontSize: '12px',
      fontFamily: theme.typography.fontFamily,
    }
  })}/>
      <TextField size="small" defaultValue="Page Name" sx={(theme) => ({
    '& .MuiInputBase-input': {
      fontSize: '12px',
      fontFamily: theme.typography.fontFamily,
    }
  })}/>
    </Stack>
    <TextField
    
      size="small"
      label="Control Name"
      sx={{ mb: 1,width:'100%' }}
    />
    <TextField
    
      size="small"
      label="Xpath"
      sx={{width:'100%'}}
    />

  </DialogContent>
               <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 ,height:25}}>
                <Button onClick={handleClose} sx={{color:'grey',bgcolor:'grey.200',height:30}}>Cancel</Button>
                    <Button onClick={handleConfirm} variant='contained' color='info' sx={{height:30}}>Save</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
