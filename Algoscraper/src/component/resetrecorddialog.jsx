import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { closeresetrecord, setnextopen } from '../featureSlice';
import Custombutton from './custombutton';
export default function Resetrecorddialog() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const Openreset = useSelector(state=>state.feature.resetrecordopen)

    const isscraper = location.pathname === '/scraperui';
    const isscenario = location.pathname === '/addscenario';
    const istable = location.pathname === '/tablescreen'
    const handlenav= ()=>{
      dispatch(closeresetrecord());
      if(isscraper){
        dispatch(setnextopen(false));
      }else{
        navigate('/scraperui')
      }
    }
  return (
    <div>
      <Dialog open={Openreset} onClose={()=>dispatch(closeresetrecord())} maxWidth='xs' PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,minHeight:100,height:190,width:'280px'})}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',p:1,height:40}}>
              <DialogTitle sx={{fontSize:15}}>Reset Record</DialogTitle>
              <IconButton onClick={()=>dispatch(closeresetrecord())} ><CloseIcon /></IconButton>
              </Box>
              <DialogContent sx={{overflow:'hidden',py:2}}>
                {isscraper &&(
                  <>
                  <DialogContentText sx={{color:'text.secondary',fontSize:12,width:200,flexDirection:'column',display:'flex'}}>
                    Are you sure you want to refresh? All unsaved data will be lost.
                  </DialogContentText>
                  </>
                )}
                {(isscenario || istable ) && (
                  <>
                <Typography sx={{color:'text.primary',fontSize:12,mt:0}}>Are You Sure?</Typography>
                <DialogContentText sx={{color:'text.secondary',fontSize:12,width:290}}>
                Do you really want to reset these records
                <FormGroup >
                 <FormControlLabel control={<Checkbox defaultChecked size='small' sx={{p:0.5}}/>} label="Save Data" sx={{'& .MuiFormControlLabel-label':{fontSize:13}}}/>
              </FormGroup>
              </DialogContentText></>
                )}
              </DialogContent>
              <DialogActions sx={{display:'flex',justifyContent:'space-between',p:2}}>
                
                <Custombutton onClick={()=>dispatch(closeresetrecord())} label='No' width='80px' height='30px' sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }} />
                    <Custombutton onClick={handlenav} label='Yes' width='80px' height='30px' variant='contained' />
              </DialogActions>
            </Dialog>
    </div>
  )
}
