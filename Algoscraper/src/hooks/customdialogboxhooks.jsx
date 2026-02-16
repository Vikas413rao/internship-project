import { useDispatch, useSelector } from 'react-redux';
import { closeCustomdialog, openCustomdialog } from '../featureSlice';

export default function useCustomdialogbox(){
const dispatch=useDispatch();
const open=useSelector((state) =>state.feature.customDialogOpen);

const handleOpen = () => {dispatch(openCustomdialog())};
const handleClose = () => {dispatch(closeCustomdialog())};
const handleConfirm =() => {dispatch(closeCustomdialog())};
return {open,handleOpen,handleClose,handleConfirm};
}