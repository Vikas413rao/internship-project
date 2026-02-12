import { Box, Button, Pagination, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

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
    marginTop:1

})

export default function BPagination() {
  return (
    <div>
        <Pbox>
      <Box sx={{display:'flex',alignItems:'center',gap:2}}>
    <Button variant='contained' size='small' sx={{top:3}} >+ Row</Button>
    <Typography sx={{fontSize:12,color:'red'}}>Error will be displayed here</Typography>
   
    </Box>
    <Box sx={{flexGrow:1}}>
     <Page count={10} shape="rounded" page={1} siblingCount={0} boundaryCount={1} showFirstButton showLastButton  size='small'/>
         </Box>
         </Pbox>
    </div>
  )
}
