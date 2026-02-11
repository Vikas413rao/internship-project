import React from 'react'
import { Button,Dialog,DialogTitle,DialogContent,DialogActions, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
export default function Customdialogbox({
    open,
    onClose,
    title,
    children,
    onConfirm,
    showClose=true,
    confirmlabel,
    canclelabel
}) {
  return (
    <div>
      <Dialog open={open} onClose={onClose} >
              <DialogTitle>{title}</DialogTitle>
              {showClose && (
              <IconButton onClick={onClose} sx={{position:'absolute',top:10,right:10}}><CloseIcon /></IconButton>)}
              <DialogContent>
                {children}
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose} sx={{left:-20,color:'grey',bgcolor:'grey.200',width:90}}>{canclelabel}</Button>
                    <Button onClick={onConfirm} variant='contained' color='info'  sx={{right:10}}>{confirmlabel}</Button>
              </DialogActions>
            </Dialog>
    </div>
  )
}
