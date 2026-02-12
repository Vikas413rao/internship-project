import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, FormControl, IconButton, Link, NativeSelect, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

const Tablebox = styled(Box)({
    flexGrow:1,
    marginTop:1,
    marginLeft:2,
    minHeight:0,
    overflowY:'auto',
    overflowX: "hidden",
    "&::-webkit-scrollbar": {display: "none",},
    scrollbarWidth:"none"
})
export default function TableComponent({columns,selectedColumns}) {
  return (
    <div>
      <Tablebox>
                <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX: "auto"}}>
            <Table size='small' sx={{ width: "100%", tableLayout: "fixed"}} aria-label="a dense table" >
              <TableHead sx={{bgcolor:'#2F8BCC'}}>
                <TableRow>
                {columns.filter(col=> selectedColumns.includes(col.key)).map(col => (
                  <TableCell sx={{color:'white',fontSize:12,width: 70}} key={col.key}>{col.label}</TableCell>
                ))}
                  <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {columns.filter(col => selectedColumns.includes(col.key)).map(col => (
                    <TableCell sx={{fontSize:12}}>{col.key === 'contentName' && 'Name'}
                    
                    {col.key === 'controlType' && (
                     <FormControl size='small'>
             
              <NativeSelect
              >
                <option value={10}>TextBox</option>
                <option value={20}>DropDown</option>
              </NativeSelect>
            </FormControl>)}
            {col.key === 'Xpath' && (
                   <Link href="#" variant="body2" sx={{fontSize:12}}>
        XPath Link
      </Link>
       )}
        {!['contentName','controlType','Xpath'].includes(col.key) && (col.label)}
      </TableCell>
            ))}
      
                    <TableCell sx={{fontSize:12}}><IconButton ><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
                  </TableRow>
               
              </TableBody>
            </Table>
          </TableContainer>
          </Tablebox>
    </div>
  )
}
