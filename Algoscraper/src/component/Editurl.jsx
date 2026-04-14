import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeediturl } from '../featureSlice';
import CustomTextField from './Textfeild';
import Custombutton from './custombutton';
export default function Editurl() {
    const dispatch = useDispatch();
  const open = useSelector((state) => state.feature.editurl);

  const handleClose = () => dispatch(closeediturl());

  const handleConfirm = () => {
    dispatch(closeediturl());
  };
  return (
    <div>
        <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          p: 1,
          width: 280
        }
      }}
    >
     
      <DialogTitle sx={{ fontSize: 14,height:'30px' }}>
        Application URL
      </DialogTitle>

      <IconButton
        onClick={handleClose}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <CustomTextField
          placeholder="Edit Link"
          placeholderSize='12px'
        />
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: 'center', gap: 2,height:'35px',mt:-1 }}>
        
        <Custombutton label='Cancel' variant='contained' width='100px' height='35px' fontSize='11px' onClick={handleClose}  sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }}/>
       

        <Custombutton label='Save' variant='contained' width='100px' height='35px' fontSize='11px' onClick={handleConfirm} />
      </DialogActions>
    </Dialog>
    </div>
  )
}
