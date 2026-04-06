import { Dialog, DialogActions, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useCustomizecolumns from '../hooks/Customizecolumns';
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
        <DialogActions sx={{height:40,display:'flex',justifyContent:'space-between',p:1,ml:2,mr:2}}>
             <Button onClick={handleClose} sx={(theme)=>({backgroundColor: theme.palette.grey[300]})}>Cancel</Button>
        <Button variant="contained" onClick={handleApply}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
