import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow, updateRow } from '../featureSlice';
import CustomDropdown from './dropdown';
import BPagination from './pagination';
import CustomTextField from './Textfeild';
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
  height: isExpanded ? 350 : 270,
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
export default function TableComponent({columns,isExpanded,page}) {
  const {currentPage,rowsperPage,rows,selectcolumns,searchtermscarper,searchtermscenario,searchtermtable} = useSelector(state =>state.feature)
  const startIndex = (currentPage - 1) * rowsperPage;
  const dispatch = useDispatch();
  const searchterm =
    page === "scraper" ? searchtermscarper: 
    page === "scenario" ? searchtermscenario :
     searchtermtable;
 const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      String(val || '').toLowerCase().includes((searchterm || '').toLowerCase())
    )
  );
  const paginatedrows = filteredRows.slice(startIndex, startIndex + rowsperPage);
const [validationError,setvalidationError]=useState({});
 const [colsWidth,setColWidth] = useState({});

 const validateField = (id,key,value)=>{
  let error ='';
  if(key === 'contentName'){
    if(/\d/.test(value)){
      error = 'Content name must not conatin numbers.';
    }
  }
  if(key === 'Xpath'){
    const xpathpattern = /^(\/|\/\/|@|\(|[a-zA-Z_][\w-]*::)/;
  if(value && ! xpathpattern.test(value)){
    error = 'Xpath must be valid Xpath expression'
  }
  }

  setvalidationError(prev =>{
    const next = {...prev};
    if(error){
      next[`${id}_${key}`]=error;
    }
    else{
      delete next [`${id}_${key}`];
    }
    return next
  })
 }

const allError = Object.values(validationError);
const searcherror = searchterm && filteredRows.length === 0 ? ["No Records Found"] : [];
const errormessage = searcherror.length >0 ? searcherror : allError;
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
                  {paginatedrows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} align="center">
                    No records found
                  </TableCell>
                </TableRow>
              )}
               {paginatedrows.map((row) =>(
                
                  <StyledRow key={row.id} isExpanded={isExpanded}>
                    {columns.filter(col => selectcolumns.includes(col.key)).map(col => (
                    <StyledCell sx={{fontSize:12}} key = {col.key}width={colsWidth[col.key]}>
                      <Resizer onMouseDown={(e)=>handleResize(e,col.key)}/>
                      {col.key === 'contentName' && (
                 <CustomTextField variant='standard'  isExpanded={isExpanded}  fullWidth value={row[col.key] || ''}
                   error={!!validationError[`${row.id}_contentName`]} onChange={(e) =>{validateField(row.id,'contentName',e.target.value);
                    dispatch(updateRow({id: row.id,key: col.key,value: e.target.value}));}}
                     InputProps={{ disableUnderline: true }} fontSize='11px' height='20px' expandedHeight='30px' expandedWidth='120px'/>
                      )}
                    {col.key === 'controlType' && (
                     <CustomDropdown
                      isTable  
                      value={row[col.key] ?? ''}
                      onChange={(e) =>dispatch(updateRow({
                      id: row.id,
                      key: col.key,
                      value: e.target.value
                    }))
                     }
                     options={[
                      { value: 'TextBox', label: 'TextBox' },
                      { value: 'DropDown', label: 'DropDown' },
                      { value: 'CheckBox', label: 'CheckBox' },
                      { value: 'RadioButton', label: 'RadioButton' },
                      { value: 'TextArea', label: 'TextArea' }
                    ]}
                    />
                    )}
            {col.key === 'Xpath' && (
                  
                  <CustomTextField variant='standard' isLink fullWidth value = {row[col.key] || ''} onChange={(e)=>{validateField(row.id, 'Xpath', e.target.value); dispatch(updateRow({
                    id: row.id,
                    key: col.key,
                    value: e.target.value
                  }));}} InputProps={{ disableUnderline: true }} fontSize='11px' height='20px' extendedHeight='28px'/>
       )}
        {!['contentName','controlType','Xpath'].includes(col.key) && (
          <CustomTextField variant='standard' isExpanded={isExpanded}  fullWidth
          value={row[col.key] || ''}
          onChange={(e)=>dispatch(updateRow({
            id: row.id,
            key: col.key,
            value: e.target.value
          }))} InputProps={{ disableUnderline: true }} fontSize='11px' height='20px' expandedHeight='30px' expandedWidth='120px'/>
        
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
          <BPagination totalRows={filteredRows.length} errorMessage={errormessage}/>
          </TBbox>

  )
}
