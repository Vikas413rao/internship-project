import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Closingdialog() {
     const [open,setOpen] = useState(false);
     const navigate = useNavigate();
     const handleCloseclick = () =>{
        setOpen(true);
      }
      const handleClose = () =>{
        setOpen(false);
      }
      const handleConfirm = () =>{
        setOpen(false);
        navigate('/');
      }
  return {
    open,
    handleCloseclick,
    handleClose,
    handleConfirm
  };
}
