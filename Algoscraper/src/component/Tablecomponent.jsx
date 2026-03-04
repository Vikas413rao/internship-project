import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, FormControl, IconButton, NativeSelect, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow, updateRow } from '../featureSlice';
import BPagination from './pagination';
const Tablebox = styled(Box)(({theme})=>({
    flex:1,
    overflowY:'auto',
    marginTop:5,
    marginLeft:10,
    minHeight:0,
}))
const TBbox = styled(Box)({
display:'flex',
flexDirection:'column',
height:310,
minHeight:100,
})
const Xpath = styled(TextField)(({theme})=>({
  '& .MuiInputBase-input': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none',
  },
}))
export default function TableComponent({columns}) {
  const {currentPage,rowsperPage,rows,selectcolumns,searchterm} = useSelector(state =>state.feature)
  const startIndex = (currentPage - 1) * rowsperPage;
  const dispatch = useDispatch();
const filteredRows =rows.filter(row => row.contentName?.toLowerCase().includes(searchterm.toLowerCase() || ''));
 const paginatedrows = filteredRows.slice(startIndex,startIndex+rowsperPage);
  return (

      <TBbox>
      <Tablebox>
                <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX:'auto', "&::-webkit-scrollbar": {display:'none'
    }, scrollbarWidth: 'none',msOverflowStyle: 'none',}}>
            <Table size='small' sx={{ width: "100%", tableLayout: "fixed"}}  >
              <TableHead sx={{bgcolor:'#2F8BCC'}}>
                <TableRow >
                {columns.filter(col=> selectcolumns.includes(col.key)).map(col => (
                  <TableCell sx={{color:'white',fontSize:12,width: 70}} key={col.key}>{col.label}</TableCell>
                ))}
                  <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {paginatedrows.map((row) =>(
                
                  <TableRow key={row.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {columns.filter(col => selectcolumns.includes(col.key)).map(col => (
                    <TableCell sx={{fontSize:12}} key = {col.key}>
                      {col.key === 'contentName' && (
                    <TextField variant='standard' fullWidth value={row[col.key] || ''}
                    onChange={(e) =>dispatch(updateRow({id: row.id,key: col.key,value: e.target.value}))}
                     InputProps={{ disableUnderline: true }}/>)}
                    {col.key === 'controlType' && (
                     <FormControl size='small'>
             
              <NativeSelect
              value={row[col.key] || ''}
              onChange={(e) => dispatch(updateRow({
                id: row.id,
                key: col.key,
                value: e.target.value
              }))}
              >
                <option value=''>Select</option>
                <option value='TextBox'>TextBox</option>
                <option value='DropDown'>DropDown</option>
                <option value='CheckBox'>CheckBox</option>
                <option value='RadioButton'>RadioButton</option>
                <option value='TextArea'>TextArea</option>
              </NativeSelect>
            </FormControl>)}
            {col.key === 'Xpath' && (
                   <Xpath variant='standard' fullWidth
                   value={row[col.key] || ''}
                   onChange={(e)=>dispatch(updateRow({
                    id: row.id,
                    key: col.key,
                    value: e.target.value
                   }))} 
                  />
       )}
        {!['contentName','controlType','Xpath'].includes(col.key) && (
          <TextField variant='standard' fullWidth
          value={row[col.key] || ''}
          onChange={(e)=>dispatch(updateRow({
            id: row.id,
            key: col.key,
            value: e.target.value
          }))} InputProps={{ disableUnderline: true }}/>
        )}
      </TableCell>
            ))}
                    <TableCell sx={{fontSize:12}}><IconButton onClick={()=>dispatch(deleteRow(row.id))}><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
                  </TableRow> 
               ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Tablebox>
          <BPagination totalRows={filteredRows.length} />
          </TBbox>

  )
}
