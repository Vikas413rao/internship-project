import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, DialogActions, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Custombutton from './custombutton';
export default function Closingdialogbox({
  open,
  handleClose,
  handleConfirm
}) {
 
  return (
    <div >
      <Dialog open={open} onClose={handleClose}  maxWidth='sm' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily, height: 160})}}>
        <Box sx={{height:40,backgroundColor:'#fdb9b9'}}>
            <DialogTitle sx={{color:'red',alignItems:'center',display:'flex',gap:1,fontSize:15}}>
             <WarningAmberIcon fontSize='small'/>Alert</DialogTitle></Box>
            <DialogContent sx={{ overflow: 'hidden', py: 2 }}>
              <DialogContentText sx={(theme) =>({color:theme.palette.text.primary,textAlign:'center',fontSize:13})}>
                Are You Sure?
              </DialogContentText>
              <DialogContentText sx={(theme)=>({fontSize:11,width:230,textAlign:'center',color:theme.palette.text.secondary})}>
                You will not be able to recover Data.
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{alignItems:'center',justifyContent:'center',gap:4}}>
              <Custombutton label='Cancel' variant='contained' width='100px' height='35px' fontSize='11px' onClick={handleClose}  sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }}/>
              <Custombutton label='Confirm' variant='contained' width='100px' height='35px' fontSize='11px' onClick={handleConfirm} />
             
            </DialogActions>

          </Dialog>
    </div>
  )
}
