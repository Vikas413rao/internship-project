import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, FormControl, IconButton, Link, NativeSelect, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow } from '../featureSlice';
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
export default function TableComponent({columns,selectedColumns}) {
  const {currentPage,rowsperPage,rows} = useSelector(state =>state.feature)
  const startIndex = (currentPage - 1) * rowsperPage;
  const paginatedrows = rows.slice(startIndex,startIndex+rowsperPage);
  const dispatch = useDispatch();

  return (

      <TBbox>
      <Tablebox>
                <TableContainer  component={Paper} sx={{width: 490,maxWidth: 500,overflowX:'auto', "&::-webkit-scrollbar": {display:'none'
    }, scrollbarWidth: 'none',msOverflowStyle: 'none',}}>
            <Table size='small' sx={{ width: "100%", tableLayout: "fixed"}}  >
              <TableHead sx={{bgcolor:'#2F8BCC'}}>
                <TableRow >
                {columns.filter(col=> selectedColumns.includes(col.key)).map(col => (
                  <TableCell sx={{color:'white',fontSize:12,width: 70}} key={col.key}>{col.label}</TableCell>
                ))}
                  <TableCell sx={{color:'white',fontSize:12,width: 20 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {paginatedrows.map((row) =>(
                
                  <TableRow key={row.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {columns.filter(col => selectedColumns.includes(col.key)).map(col => (
                    <TableCell sx={{fontSize:12}} key = {col.key}>{col.key === 'contentName' && 'Name'}
                    
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
                    <TableCell sx={{fontSize:12}}><IconButton onClick={()=>dispatch(deleteRow(row.id))}><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></IconButton></TableCell>
                  </TableRow> 
               ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Tablebox>
          <BPagination totalRows={rows.length} />
          </TBbox>

  )
}
