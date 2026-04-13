import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeediturl } from '../featureSlice';
import CustomTextField from './Textfeild';
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
          width: 300
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
      <DialogActions sx={{ justifyContent: 'center', gap: 2,height:'25px' }}>
        <Button
          onClick={handleClose}
          sx={{ bgcolor: 'grey.200', color: 'grey' }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleConfirm}
          variant="contained"
          color="info"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}
