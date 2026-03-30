import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Button, DialogActions, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function Closingdialogbox({
  open,
  handleClose,
  handleConfirm
}) {
 
  return (
    <div >
      <Dialog open={open} onClose={handleClose}  maxWidth='sm' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily})}}>
        <Box sx={{height:40,backgroundColor:'#fdb9b9'}}>
            <DialogTitle sx={{color:'red',alignItems:'center',display:'flex',gap:1,fontSize:15}}>
             <WarningAmberIcon fontSize='small'/>Alert</DialogTitle></Box>
            <DialogContent>
              <DialogContentText sx={(theme) =>({color:theme.palette.text.primary,textAlign:'center',fontSize:13})}>
                Are You Sure?
              </DialogContentText>
              <DialogContentText sx={(theme)=>({fontSize:11,width:280,textAlign:'center',color:theme.palette.text.secondary})}>
                You will not be able to recover Data.
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{alignItems:'center',justifyContent:'center',gap:4}}>
              <Button onClick={handleClose} sx={{color:'grey',bgcolor:'grey.200',width:120,height:35}}>Cancel</Button>
              <Button variant='contained' color='info' onClick={handleConfirm} sx={{width:120,height:35}}>Confirm</Button>
            </DialogActions>

          </Dialog>
    </div>
  )
}
