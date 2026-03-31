import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
export default function Customdialogbox({
  open,
  onClose,
  onConfirm,  
  title,
    children,
    showClose=true,
    confirmlabel,
    canclelabel
}) {
  
  return (
    <div>
      <Dialog open={open} onClose={onClose} width='xs' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:200,display:'flex',flexDirection:'column',overflow:'hidden'})}}>
              <DialogTitle>{title}</DialogTitle>
              {showClose && (
              <IconButton onClick={onClose} sx={{position:'absolute',top:10,right:10}}><CloseIcon /></IconButton>)}
              <DialogContent sx={{fontSize:12,width:320,overflow:'hidden'}}>
                {children}
              </DialogContent>
               <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
                <Button onClick={onClose} sx={{color:'grey',bgcolor:'grey.200'}}>{canclelabel}</Button>
                    <Button onClick={onConfirm} variant='contained' color='info' >{confirmlabel}</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
