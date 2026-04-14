import CloseIcon from '@mui/icons-material/Close';
import { DialogActions, IconButton, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSession, closeFeaturedialog, closeSession, startSession } from '../featureSlice';
import Custombutton from './custombutton';
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
        width: 280
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
          <Stack direction="row" spacing={1} mt={2}>
            
            <Custombutton label='Start Section' variant='outlined' color='success' width='150px' height='40px' fontSize='11px' onClick={() => dispatch(startSession())} />
            <Custombutton label='Clear Section' variant='outlined' color='info' width='150px' height='40px' fontSize='11px' onClick={()=>dispatch(closeSession())} />
          </Stack>
        </DialogContent>
      </Dialog>
     
        <Dialog open={featureSessionOpen} onClose={()=>dispatch(closeSession())} {...dialogProps}>
          <DialogTitle sx={{ pr: 5 ,fontSize:13}}>Create Your Feature</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
            <Stack direction='row' spacing={1} mt={2}>
              <Custombutton label='Stop Section' variant='outlined' color='error' width='120px' height='40px' fontSize='11px' onClick={()=>dispatch(closeSession())} />
              <Custombutton label='Clear Section' variant='outlined' color='info' width='120px' height='40px' fontSize='11px' onClick={()=>dispatch(clearSession())} />
            </Stack>
            <Stack spacing={1.5} >
              <CustomDropdown
                label='Page List'
                value={pageValue}
                onChange={(e)=>setPageValue(e.target.value)}
               height='32px'
               fontSize='13px'
               options={pagelist}
                showPlaceholder={false}
              />
               <CustomDropdown
                label='Feature List'
                value={featureValue}
                onChange={(e)=>setFeatureValue(e.target.value)}
               height='32px'
               fontSize='13px'
               options={pagelist}
                showPlaceholder={false}
              />
             
            </Stack>
          </DialogContent >
          <DialogActions sx={{mt:-3}}><Custombutton label='Proceed' variant='contained' width='120px' height='40px' fontSize='11px' /></DialogActions>
        </Dialog>
    </>
  );
}
