import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeClosingdialog, openclosingdialog } from '../featureSlice';
export default function Closingdialog() {
     const dispatch=useDispatch();
     const navigate = useNavigate();
     const {closingDialogopen}=useSelector((state)=>state.feature);
     const handleCloseclick = () =>{
      dispatch(openclosingdialog());
     };
     const handleClose = () =>{
      dispatch(closeClosingdialog());
     }
     const handleConfirm = () =>{
      dispatch(closeClosingdialog());
      navigate('/')
     }
  return {
    open:closingDialogopen,
    handleCloseclick,
    handleClose,
    handleConfirm
  };
}
