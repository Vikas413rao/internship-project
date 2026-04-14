import { Dialog, DialogActions, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useCustomizecolumns from '../hooks/Customizecolumns';
import Custombutton from './custombutton';
export default function Checkdialogbox({open,handleClose,columns,setSelectedColumns}) {
    const {draftColumns,handleToggle,handleApply}=useCustomizecolumns((updateCols)=>{
        setSelectedColumns(updateCols);
        handleClose();
    })
  return (
    <div>
      <Dialog open={open} onClose={handleClose}  width='sm' 
      PaperProps={{sx: (theme) => ({fontFamily: theme.typography.fontFamily,height:280,display:'flex',flexDirection:'column',overflow:'hidden',width:295})}}>
        <DialogTitle sx={{fontSize:14,height:40}}>Customize Columns</DialogTitle>
        <DialogContent sx={{overflow:'hidden'}}>
            <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr",columnGap: 3,rowGap: 1,mt: 1,}}>
            {columns.map(col=>(
                <FormControlLabel key={col.key} control={<Checkbox checked={draftColumns.includes(col.key)} onChange={()=> handleToggle(col.key)}/>} label={col.label}
                 sx={(theme) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '12px',
      fontFamily: theme.typography.fontFamily,
      whiteSpace: 'nowrap',
    }
  })}/>
            ))}
            </Box>
        </DialogContent>
        <DialogActions sx={{height:40,display:'flex',justifyContent:'space-between',ml:2,mr:2,mt:-2}}>
          
             <Custombutton label='Cancel' variant='contained' width='100px' height='28px' fontSize='11px' onClick={handleClose}  sx={{
    backgroundColor: 'grey.200',
    color: 'grey'
  }}/>
        <Custombutton label='Apply' variant='contained' width='100px' height='28px' fontSize='11px' onClick={handleApply} />
        </DialogActions>
      </Dialog>
    </div>
  )
}
