import { Box, Button, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addRow, setPage } from '../featureSlice';
const Page=styled(Pagination)(({theme})=>({
    marginLeft:60,
    '& .Mui-selected':{
        backgroundColor:'#2F8BCC',
        color:theme.palette.common.white
    },
    '& .MuiPaginationItem-root':{
        fontSize:11,
        minWidth:17,
        height:22
    }
}))
const Pbox = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
 position: 'relative',
})
const Bbox = styled(Box)({
  flexShrink:0,
  padding:6,
  display:'flex',
  alignItems:'center',
  gap:2,
  borderTop:'1px solid rgba(0,0,0,0.25)'
})

export default function BPagination({totalRows, errorMessage}) {
    const dispatch = useDispatch();
    const {currentPage,rowsperPage} = useSelector(state =>state.feature);
    const totalPages = Math.ceil(totalRows/rowsperPage);
    const handlepageclick = (_,value) =>{
        dispatch(setPage(value))
    }
    const handleAddrow = () =>{
        dispatch(addRow());
    }
  return (
    <div>
        <Bbox>
        <Pbox>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
    <Button variant='contained' size='small'  onClick={handleAddrow}>+ Row</Button>
    {errorMessage && errorMessage.length >0 && (
        <Box>
            {errorMessage.map((err,index)=>(
    <div key={index} style={{fontSize:'11px',color:'red'}}>{err}</div>
            ))}
    </Box>
    )}
    </Box>
    <Box sx={{position:'absolute',right:45}}>
     <Page count={totalPages} page={currentPage} onChange={handlepageclick} shape="rounded"  siblingCount={1} boundaryCount={0} showFirstButton showLastButton  size='small'/>
         </Box>
         </Pbox>
         </Bbox>
    </div>
  )
}
