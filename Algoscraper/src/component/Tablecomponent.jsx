import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, FormControl, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
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

const TBbox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded'
})(({ isExpanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: isExpanded ? 420 : 303,
  minHeight: 100,
}));
const Xpath = styled(TextField)(({theme}) => ({
  '& .MuiInputBase-root': {
    height: 28, 
    fontFamily:theme.pa
  },
  '& .MuiInputBase-input': {
    fontSize: '11px',
    padding: '2px 0',  
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
}));
const Styledtable = styled(Table)(({ isExpanded }) => ({
  width: isExpanded ? '100%' : 'max-content',
  tableLayout:'auto',
  '& .MuiTableCell-root':{
    Padding:'4px 6px',
    fontSize:'11px'
  }
}))
const StyledCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'width'
})(({theme,width})=>({
  fontSize:'10px',
  padding:'4px 6px',
  width: width || 123,
  position:'relative',
 borderRight: `1px solid ${theme.palette.common.white}`,
}))
const StyledRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'isExpanded'
})(({ isExpanded }) => ({
  height: isExpanded ? 40 : 32,
}))
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isExpanded'
})(({ isExpanded }) => ({
  '& .MuiInputBase-root': {
    height: isExpanded ? 34 : 28,
  },
  '& .MuiInputBase-input': {
    fontSize: isExpanded ? '12px' : '10px',
    padding: '2px 0'
  }
}));
const Styledselect = styled (Select)(()=>({
  fontSize: '10px',
  height:28,
   '& .MuiSelect-select':{
    padding:'4px 8px',
    display:'flex',
    alignItems: 'center',
   }
}))
const SmallIconButton = styled(IconButton)(() => ({
  padding: 4,
}));
const SmallDeleteIcon = styled(DeleteOutlineOutlinedIcon)(() => ({
  fontSize: 16,
  color: 'red',
}));
const Resizer = styled(Box)(() => ({
  position:'absolute',
  right:0,
  top:0,
  height:'100%',
  width:'6px',
  cursor:'col-resize',
  zIndex:1
}));
const StyledTableContainer = styled(TableContainer, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  width: isExpanded ? '100%' : 490,
  maxWidth: '100%',

  overflowX: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  backgroundColor: theme.palette.background.paper,
}));
export default function TableComponent({columns,isExpanded}) {
  const {currentPage,rowsperPage,rows,selectcolumns,searchterm} = useSelector(state =>state.feature)
  const startIndex = (currentPage - 1) * rowsperPage;
  const dispatch = useDispatch();
const filteredRows =rows.filter(row => row.contentName?.toLowerCase().includes(searchterm.toLowerCase() || ''));
 const paginatedrows = filteredRows.slice(startIndex,startIndex+rowsperPage);

 //columns width state//
 const [colsWidth,setColWidth] = useState({});

 const handleResize = (e,key) =>{
  const startX = e.clientX;
  const startWidth = colsWidth[key] || 70;

const onMouseMove = (e) =>{
  const newWidth = startWidth + (e.clientX - startX);
  setColWidth(prev =>({
    ...prev,
    [key]:Math.max(newWidth,60)
  }))
};
const onMouseUp = () =>{
  document.removeEventListener('mousemove',onMouseMove);
  document.removeEventListener('mouseup',onMouseUp);
};
document.addEventListener('mousemove',onMouseMove);
document.addEventListener('mouseup',onMouseUp)
 }
  return (

      <TBbox isExpanded={isExpanded}>
      <Tablebox>
                <StyledTableContainer  component={Paper} isExpanded={isExpanded}>
            <Styledtable isExpanded={isExpanded}>
              <TableHead sx={{bgcolor:'#2F8BCC'}}>
                <TableRow >
                {columns.filter(col=> selectcolumns.includes(col.key)).map(col => (
                  <StyledCell sx={{color:'white',fontSize:12}}width={colsWidth[col.key]} key={col.key}>{col.label}<Resizer onMouseDown={(e)=>handleResize(e,col.key)}/></StyledCell>
                ))}
                  <StyledCell sx={{color:'white',fontSize:12 }}>Action
                  </StyledCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {paginatedrows.map((row) =>(
                
                  <StyledRow key={row.id}   isExpanded={isExpanded}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {columns.filter(col => selectcolumns.includes(col.key)).map(col => (
                    <StyledCell sx={{fontSize:12}} key = {col.key}width={colsWidth[col.key]}>
                      <Resizer onMouseDown={(e)=>handleResize(e,col.key)}/>
                      {col.key === 'contentName' && (
                    <StyledTextField variant='standard'  isExpanded={isExpanded}  fullWidth value={row[col.key] || ''}
                    onChange={(e) =>dispatch(updateRow({id: row.id,key: col.key,value: e.target.value}))}
                     InputProps={{ disableUnderline: true }}/>)}
                    {col.key === 'controlType' && (
                     <FormControl size='small'>
             
              <Styledselect
              value={row[col.key] || ''}
              displayEmpty
              onChange={(e) => dispatch(updateRow({
                id: row.id,
                key: col.key,
                value: e.target.value
              }))}
              >
                <MenuItem value=''>Select</MenuItem>
                <MenuItem value='TextBox'>TextBox</MenuItem>
                <MenuItem value='DropDown'>DropDown</MenuItem>
                <MenuItem value='CheckBox'>CheckBox</MenuItem>
                <MenuItem value='RadioButton'>RadioButton</MenuItem>
                <MenuItem value='TextArea'>TextArea</MenuItem>
              </Styledselect>
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
          <StyledTextField variant='standard' isExpanded={isExpanded}  fullWidth
          value={row[col.key] || ''}
          onChange={(e)=>dispatch(updateRow({
            id: row.id,
            key: col.key,
            value: e.target.value
          }))} InputProps={{ disableUnderline: true }}/>
        )}
      </StyledCell>
            ))}
                    <StyledCell sx={{fontSize:12}}><SmallIconButton onClick={()=>dispatch(deleteRow(row.id))}><SmallDeleteIcon sx={{color:'red'}}/></SmallIconButton></StyledCell>
                  </StyledRow> 
               ))}
              </TableBody>
            </Styledtable>
          </StyledTableContainer>
          </Tablebox>
          <BPagination totalRows={filteredRows.length} />
          </TBbox>

  )
}
