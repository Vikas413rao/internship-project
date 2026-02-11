import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DialogActions, DialogContentText,Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function Closingdialogbox({
    open,
    handleClose,
    handleConfirm
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{color:'red',alignItems:'center',display:'flex', gap:2}}><WarningAmberIcon/>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{color:'black',textAlign:'center'}}>
                Are You Sure?
              </DialogContentText>
              <DialogContentText>
                You will not be able to recover Data.
              </DialogContentText>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClose} sx={{left:-60,color:'grey',bgcolor:'grey.200',width:90}}>Cancel</Button>
              <Button variant='contained' color='info' onClick={handleConfirm} sx={{right:20}}>Confirm</Button>
            </DialogActions>

          </Dialog>
    </div>
  )
}
