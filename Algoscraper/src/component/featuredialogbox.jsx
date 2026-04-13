import CloseIcon from '@mui/icons-material/Close';
import { DialogActions, IconButton, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSession, closeFeaturedialog, closeSession, startSession } from '../featureSlice';
import CustomDropdown from './dropdown';
export default function Featuredialogbox({ pagelist }) {
  const dispatch = useDispatch();
 const { featureDialogOpen,featureSessionOpen,sessionType} = useSelector((state)=>state.feature);
   const [pageValue, setPageValue] = useState("");
  const [featureValue, setFeatureValue] = useState("");
   const dialogProps = {
    maxWidth: "xs",
    fullWidth: true,
    PaperProps: {
      sx: {
        p: 1,
        width: 290
      }
    }
  };

  return (
    <>
      <Dialog open={featureDialogOpen} onClose={()=>dispatch(closeFeaturedialog())}  {...dialogProps}>
        <DialogTitle sx={{ pr: 5 ,fontSize:13}}>
          Create Your Feature
          <IconButton onClick={()=>dispatch(closeFeaturedialog())} sx={{ position: 'absolute', right: 8, top: 8 ,fontSize:13}}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant='outlined' color='success' onClick={() => dispatch(startSession())} sx={{width:'150px',height:'40px',fontSize:'11px'}}>Start Section</Button>
            <Button variant='outlined' color='info'  onClick={()=>dispatch(closeSession())} sx={{width:'150px',height:'40px',fontSize:'11px'}}>Clear Section</Button>
          </Stack>
        </DialogContent>
      </Dialog>
     
        <Dialog open={featureSessionOpen} onClose={()=>dispatch(closeSession())} {...dialogProps}>
          <DialogTitle sx={{ pr: 5 ,fontSize:13}}>Create Your Feature</DialogTitle>
          <DialogContent>
            <Stack direction='row' spacing={2} mt={2}>
              <Button color='error' variant='outlined' onClick={()=>dispatch(closeSession())} sx={{width:'120px',height:'40px',fontSize:'11px'}}>Stop Section</Button>
              <Button color='info' variant='outlined' onClick={()=>dispatch(clearSession())} sx={{width:'120px',height:'40px',fontSize:'11px'}}>Clear Section</Button>
            </Stack>
            <Stack spacing={1.5} mt={2}>
              <CustomDropdown
                label='Page List'
                value={pageValue}
                onChange={(e)=>setPageValue(e.target.value)}
               height='32px'
               fontSize='13px'
               options={pagelist}
              />
               <CustomDropdown
                label='Feature List'
                value={featureValue}
                onChange={(e)=>setFeatureValue(e.target.value)}
               height='32px'
               fontSize='13px'
               options={pagelist}
              />
             
            </Stack>
          </DialogContent >
          <DialogActions sx={{height:'25px'}}><Button variant='contained'>Proceed</Button></DialogActions>
        </Dialog>
    </>
  );
}
