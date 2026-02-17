import { Box, Button, Pagination, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addRow, setPage } from '../featureSlice';
const Page=styled(Pagination)({
    marginLeft:90,
    '& .Mui-selected':{
        backgroundColor:'#2F8BCC',
        color:'#fff'
    },
    '& .MuiPaginationItem-root':{
        fontSize:11,
        minWidth:17,
        height:22
    }
})
const Pbox = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',

})
const Bbox = styled(Box)({
  flexShrink:0,
  padding:6,
  display:'flex',
  alignItems:'center',
  gap:2,
  borderTop:'1px solid rgba(0,0,0,0.25)'
})

export default function BPagination({totalRows}) {
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
      <Box sx={{display:'flex',alignItems:'center',gap:2}}>
    <Button variant='contained' size='small' sx={{top:3}} onClick={handleAddrow}>+ Row</Button>
    <Typography sx={{fontSize:12,color:'red'}}>Error will be displayed here</Typography>
   
    </Box>
    <Box sx={{flexGrow:1}}>
     <Page count={totalPages} page={currentPage} onChange={handlepageclick} shape="rounded"  siblingCount={0} boundaryCount={1} showFirstButton showLastButton  size='small'/>
         </Box>
         </Pbox>
         </Bbox>
    </div>
  )
}
