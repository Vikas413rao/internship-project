import React from 'react'
import { useState } from 'react'
export default function Customdialogboxhooks() {
    const [open,setOpen]=useState(false);

    const handleOpen=()=>{setOpen(true);}
    const handleClose=()=>{setOpen(false);
    }
    const handleConfirm=(action)=>{ 
        if(action) action(); 
        setOpen(false); }
  return {
    open,
    handleOpen,
    handleClose,
    handleConfirm
  };
}
