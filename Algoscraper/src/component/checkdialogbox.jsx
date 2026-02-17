import { Dialog, DialogActions, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useCustomizecolumns from '../hooks/Customizecolumns';
export default function Checkdialogbox({open,handleClose,columns,selectedcolumn,setSelectedColumns}) {
    const {draftColumns,handleToggle,handleApply}=useCustomizecolumns((updateColumns)=>{
        setSelectedColumns(updateColumns);
        handleClose();
    })
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Customize Columns</DialogTitle>
        <DialogContent>
            <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr",columnGap: 3,rowGap: 1,mt: 1,}}>
            {columns.map(col=>(
                <FormControlLabel key={col.key} control={<Checkbox checked={draftColumns.includes(col.key)} onChange={()=> handleToggle(col.key)}/>} label={col.label}/>
            ))}
            </Box>
        </DialogContent>
        <DialogActions>
             <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleApply}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
