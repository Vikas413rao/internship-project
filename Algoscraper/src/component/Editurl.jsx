import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeediturl } from '../featureSlice';
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
     
      <DialogTitle sx={{ fontSize: 14 }}>
        Application URL
      </DialogTitle>

      <IconButton
        onClick={handleClose}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <TextField
          fullWidth
          size="small"
          placeholder="Edit Link"
        />
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: 'center', gap: 2 }}>
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
