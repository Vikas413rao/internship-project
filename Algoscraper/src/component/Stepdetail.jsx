import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, Select, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeCustomdialog } from '../featureSlice';
import CustomTextField from './Textfeild';
import Custombutton from './custombutton';
export default function Stepdetailbox() {
   const dispatch = useDispatch();
  const open = useSelector((state) => state.feature.customDialogOpen);
  const handleClose = () => dispatch(closeCustomdialog());
  const handleConfirm = () => {
    dispatch(closeCustomdialog());
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} width='sm' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:265,display:'flex',flexDirection:'column',overflow:'hidden',width:320})}}>
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
      <CustomTextField variant='outlined' defaultValue="Control Value"  fontSize='12px'/>
      <CustomTextField variant='outlined' defaultValue="Page Name" fontSize='12px'/>
    </Stack>
    <Box sx={{gap:0.5,display:'flex',flexDirection:'column'}}>
    <CustomTextField
      label="Control Name"
      sx={{ mb: 1,width:'100%' }}
    />
    <CustomTextField
      label="Xpath"
      sx={{width:'100%'}}
    />
</Box>
  </DialogContent>
               <DialogActions sx={{ justifyContent: "center", gap: 2 ,mt:-2}}>
                 <Custombutton onClick={handleClose} variant='contained' label='Cancel' width='80px' height='30px' sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }} />
                <Custombutton onClick={handleConfirm} variant='contained' label='Save' width='80px' height='30px'/>
               
              </DialogActions>
            </Dialog>
    </div>
  )
}
