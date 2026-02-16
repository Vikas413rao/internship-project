import CloseIcon from '@mui/icons-material/Close';
import { DialogActions, IconButton, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { clearSession, closeFeaturedialog, closeSession, startSession } from '../featureSlice';

export default function Featuredialogbox({ pagelist }) {
  const dispatch = useDispatch();
 const { featureDialogOpen,featureSessionOpen,sessionType} = useSelector((state)=>state.feature);
   
  return (
    <>
      <Dialog open={featureDialogOpen} onClose={()=>dispatch(closeFeaturedialog())}>
        <DialogTitle sx={{ pr: 5 }}>
          Create Your Feature
          <IconButton onClick={()=>dispatch(closeFeaturedialog)} sx={{ position: 'absolute', right: 8, top: 8 }}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant='outlined' color='success' onClick={() => dispatch(startSession())}>Start Section</Button>
            <Button variant='outlined' color='info' onClick={() => dispatch(clearSession())}>Clear Section</Button>
          </Stack>
        </DialogContent>
      </Dialog>
     
        <Dialog open={featureSessionOpen} onClose={()=>dispatch(closeSession())}>
          <DialogTitle sx={{ pr: 5 }}>Create Your Feature</DialogTitle>
          <DialogContent>
            <Stack direction='row' spacing={2} mt={2}>
              <Button color='error' variant='outlined' onClick={()=>dispatch(closeSession())}>Stop Section</Button>
              <Button color='info' variant='outlined' onClick={()=>dispatch(clearSession())}>Clear Section</Button>
            </Stack>
            <Stack>
              <TextField
                id="page-list-select"
                select
                label='Page List'
                defaultValue=""
                SelectProps={{ native: true }}
                sx={{ pt: 2 }}
                variant="filled"
              >
                {pagelist?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="feature-list-select"
                select
                label="Feature List"
                defaultValue=""
                SelectProps={{ native: true }}
                sx={{ pt: 2 }}
                variant="filled"
              >
                {pagelist?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions><Button variant='contained'>Proceed</Button></DialogActions>
        </Dialog>
    </>
  );
}
